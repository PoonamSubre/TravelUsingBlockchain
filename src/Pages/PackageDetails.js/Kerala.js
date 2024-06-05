import React from 'react';
import { Link } from 'react-router-dom';

const Kerala = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img src="https://wallpaperaccess.com/full/1635200.jpg" alt="Munnar" className="img-fluid" />
          <div className="mt-4 text-center">
            <h2>Munnar - A Perfect Vacation Destination</h2>
            <p>
              Munnar is an all-time favorite vacation spot among tourists because of its pleasant weather, serenity, misty and lush environs, and soothing ambiance. It is situated at an altitude of 1600 meters above sea level. Munnar was once the summer resort of the British government and is now a popular holiday destination in South India. For a refreshing vacation, you must book a one day Munnar sightseeing tour with Top Station.
            </p>
            <p>
              The green hills and curvy roads are interspersed with tea, coffee, and spice plantations. You can explore the tea plantations, opt for tree house stays, spot rare species of birds, and witness animals in their natural habitat. Besides trekking and camping in the lap of nature, you can taste the authentic Keralite cuisine, and shop local wares at the bustling marketplaces.
            </p>
            <p>
              On a one day Munnar sightseeing tour with Top Station by cab, you can explore the best of Munnar’s green valleys and hills. Booking a one day cab is a great way to comfortably enjoy the unique tourist places in Munnar if you are traveling with family, friends, kids, senior citizens, or even solo.
            </p>
            <h3>Highlights of Munnar Sightseeing Tour with Top Station by Cab</h3>
            <ul>
              <li>Full-day Munnar Local Sightseeing Tour with Top Station</li>
              <li>Duration: 8 to 9 hours</li>
              <li>Tour by Private Cab (not shared with others)</li>
              <li>Pickup & Drop: Munnar Hotel / Home</li>
              <li>Places Covered: Flower Garden, Photo Point, Honey Tree, Botanical Garden, Mattupetty Dam, DTPC Boating, Shooting Point, Echo Point, Kundala Dam, and Top Station.</li>
            </ul>
            <Link to="/payment">
            <button className="btn btn-primary btn-lg">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kerala;
