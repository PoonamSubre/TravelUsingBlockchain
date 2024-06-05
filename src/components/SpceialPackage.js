import React from 'react';

const SpecialPackage = ({ type }) => {
  // Define content for different package types
  const packageContent = {
    honeymoon: {
      title: 'Honeymoon Package',
      description: 'Explore romantic destinations perfect for your honeymoon.',
      imageUrl: 'url_to_honeymoon_image.jpg',
    },
    familyTrip: {
      title: 'Family Trip Package',
      description: 'Enjoy quality time with your family at amazing destinations.',
      imageUrl: 'url_to_family_trip_image.jpg',
    },
    soloTrip: {
      title: 'Solo Trip Package',
      description: 'Embark on an adventure and discover yourself on a solo journey.',
      imageUrl: 'url_to_solo_trip_image.jpg',
    },
    // Add more package types as needed
  };

  // Get the content based on the provided type or default to an unknown package
  const selectedPackage = packageContent[type] || { title: 'Unknown Package', description: '', imageUrl: '' };

  return (
    <div className="special-package">
      <h2>{selectedPackage.title}</h2>
      <img src={selectedPackage.imageUrl} alt={selectedPackage.title} />
      <p>{selectedPackage.description}</p>
    </div>
  );
};

export default SpecialPackage;
