import React from 'react';

const ItineraryData = () => {
    const itineraryData = [
        { id: 1, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 2, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        // Add more packages as needed
    ];

    return (
        <div>
            <h1>Special Family Packages</h1>
            <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
                {itineraryData.map(item => (
                    <div key={item.id} style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                        <img src={item.image} alt={item.destination} style={{ width: '100%', marginBottom: '10px' }} />
                        <h3>{item.destination}</h3>
                        <p>{item.description}</p>
                        <p>Tour Duration: {item.duration}</p>
                        <p>Price: {item.price}</p>
                        <button>View Tour</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItineraryData;
