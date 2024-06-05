import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcom from '../images/welcome.jpg';
import '../CSS/Welcome.css';

const Welcome = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center">
      <Row>
        {/* Image on the left */}
        <Col xs={12} md={6}>
          <img
            src={welcom}
            alt="Welcome Image"
            className="img-fluid"
          />
        </Col>

        {/* Text on the right */}
        <Col xs={12} md={6} className="text-container">
          <p className="text-primary">------- Welcome To Siddhesh Travels</p>
          <h2 className="font-weight-bold text-orange">
            TOUR & TRAVEL'S THE <br/> WORLD ONE PLACE <br/> AT A TIME
          </h2>
          <p className="text-black">
            Perfect for those looking to experience the region’s archaeological
            and cultural treasures in a short amount of time, this adventure
            includes a four-day trek. One of the world’s best-known hikes.
          </p>
          
          {/* Points with ✅ logo */}
          <ul className="list-unstyled">
            <li>
              <span role="img" aria-label="check-mark">
                ✅
              </span>{' '}
              We know the best routes
            </li>
            <li>
              <span role="img" aria-label="check-mark">
                ✅
              </span>{' '}
              Low-cost travel
            </li>
            <li>
              <span role="img" aria-label="check-mark">
                ✅
              </span>{' '}
              The art of traveling here
            </li>
            <li>
              <span role="img" aria-label="check-mark">
                ✅
              </span>{' '}
              Live your travel dreams
            </li>
            <li>
              <span role="img" aria-label="check-mark">
                ✅
              </span>{' '}
              Plan your next trip with confidence
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
