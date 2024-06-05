import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from './firebase'; 
import DefaultImage from '../images/INDIAN.png'; 

const Family = () => {
  const [itineraryData, setItineraryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tourPackages'));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        console.log('Fetched Data:', data); 
        setItineraryData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Special Family Packages</h1>
      {itineraryData.map(item => (
        <Link key={item.id} to={`/package/${item.id}`} className="text-decoration-none text-dark">
          <div className="row mb-4 border p-3">
            <div className="col-md-4">
              {item && item.imageURL ? (
                <img src={item.imageURL} alt={item.destination} className="img-fluid" />
              ) : (
                <img src={DefaultImage} alt="Default" className="img-fluid" />
              )}
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-end">
              <div className="text-right">
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>{item.PackageName}</h3> 
                <p style={{ textAlign: 'center' }}>{item.description}</p> 
              </div>
              <div style={verticalLineStyle}></div>
              <div>
                <p><strong>Tour Duration:</strong> {item.duration}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <button className="btn btn-primary">View Tour</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const verticalLineStyle = {
  borderLeft: '1px solid #ccc',
  height: '100%',
  margin: '0 15px', 
};

export default Family;
