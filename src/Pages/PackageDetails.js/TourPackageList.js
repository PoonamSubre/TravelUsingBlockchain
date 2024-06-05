import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

const TourPackageList = () => {
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    const fetchTourPackages = async () => {
      const q = query(collection(db, 'tourPackages'));
      const querySnapshot = await getDocs(q);
      const packages = [];
      querySnapshot.forEach((doc) => {
        packages.push(doc.data());
      });
      setTourPackages(packages);
    };

    fetchTourPackages();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tour Packages</h1>
      <div className="grid grid-cols-3 gap-4">
        {tourPackages.map((tourPackage, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">{tourPackage.heading}</h2>
            <p className="text-gray-600 mb-2">{tourPackage.itinerary}</p>
            <p className="text-gray-600 mb-2">Price: {tourPackage.price}</p>
            <p className="text-gray-600 mb-2">Date: {tourPackage.date}</p>
            <p className="text-gray-600 mb-2">Duration: {tourPackage.duration}</p>
            <div>
              {tourPackage.images.map((image, index) => (
                <img key={index} src={image} alt={`Tour Package ${index + 1}`} className="w-full mb-2" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackageList;
