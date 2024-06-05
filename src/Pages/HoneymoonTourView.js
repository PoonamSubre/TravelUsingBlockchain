import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from './firebase';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'; 
import DefaultImage from '../images/HONEYMOON.png'; 

const HoneymoonTourView = () => {
  const { id } = useParams(); 
  const [tourPackage, setTourPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchTourPackage = async () => {
      try {
        const docRef = doc(db, 'honeymoonPackages', id); 
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTourPackage({ id: docSnap.id, ...data });
          setPrice(data.price);
        } else {
          setError('Honeymoon package not found');
        }
      } catch (error) {
        setError('Error fetching honeymoon package');
        console.error('Error fetching document: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourPackage();
  }, [id]);

  const handleBookNow = () => {
    setShowPaymentOptions(true);
  };
  
  const handlePaymentOptionSelect = (paymentOption) => {
    const paymentWindow = window.open('', '_blank');
  
    switch (paymentOption) {
      case 'UPI/Card':
        paymentWindow.location.href = 'url/to/upi_card_payment_page';
        break;
      case 'Ether':
        paymentWindow.location.href = 'url/to/ether_payment_page';
        break;
      default:
        break;
    }

    setShowPaymentOptions(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container fluid>
      <>
        <img src={tourPackage.image || DefaultImage} alt={tourPackage.destination} className="tour-image" />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="tour-details">
                <h2>{tourPackage.PackageName}</h2>
                <p>{tourPackage.description}</p> 
              </div>
            </Col>
            <Col lg={4}>
              <Card className="booking-card">
                <Card.Body>
                  <Card.Title>Book Now</Card.Title>
                  <Card.Text>Price: {price}</Card.Text> 
                  <Button variant="primary" onClick={handleBookNow}>Book Now</Button> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr className="my-4" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="itinerary">
                <h3>Itinerary (Day Wise)</h3>
                <p>{tourPackage.itineraryDayWise}</p> 
              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={showPaymentOptions} onHide={() => setShowPaymentOptions(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Payment Option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="payment-options">
              <Button variant="primary" onClick={() => handlePaymentOptionSelect('UPI/Card')}>UPI/Card</Button>
              <Button variant="primary" onClick={() => handlePaymentOptionSelect('Ether')}>Ether</Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </Container>
  );
};

export default HoneymoonTourView;
