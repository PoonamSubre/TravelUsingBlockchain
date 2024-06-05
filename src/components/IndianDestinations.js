import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { db } from '../Pages/firebase'; 
import "../CSS/IndianDestination.css";

const IndianDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsCollection = collection(db, 'tourPackages');
        const q = query(destinationsCollection);
        const querySnapshot = await getDocs(q);
        const destinationData = [];
        querySnapshot.forEach((doc) => {
          destinationData.push({ id: doc.id, ...doc.data() });
        });
        console.log('Fetched destinations:', destinationData);
        setDestinations(destinationData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Group destinations into sets of 4
  const groupedDestinations = chunkArray(destinations, 4);

  return (
    <div className="container-fluid mt-5 border">
      <h2 className="text-center mb-4">Explore and Experience the rich Indian Culture.....</h2>
      <p>India is a beautiful land of rich diversity, culture, and adventures. It is the seventh-largest country in the world.</p>
      <Carousel indicators={false} interval={null}>
        {groupedDestinations.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="d-flex justify-content-between">
              {group.map((destination, index) => (
                <div key={index} className="carousel-card">
                 <Link
  to={`/destination/${destination.id}`} 
  style={{ backgroundImage: `url(${destination.imageURL})`, height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="card-text">
    <h3>{destination.PackageName}</h3>
    <p>Starting Price: {destination.price}</p>
  </div>
</Link>

                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default IndianDestination;
