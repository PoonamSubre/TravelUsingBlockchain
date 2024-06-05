// PackageDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = ({ itineraryData }) => {
  const { id } = useParams();
  const selectedPackage = itineraryData.find((pkg) => pkg.id === parseInt(id, 10));

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <h2>{selectedPackage.destination} Details</h2>
      <p>Price: {selectedPackage.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PackageDetails;
