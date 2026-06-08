import React from 'react';
import NavigationBar from '../components/Nav';
import { Container, Row, Col, Image } from "react-bootstrap";
import "../index.css";


export default function Home() {
  return (
    <div className="home">
      <NavigationBar />
      
      <Container className="py-5">
      <Row className="align-items-center">
        
        
        <Col md={6}>
          <h1>Full Bloom Landscaping</h1>
          <p>Professional landscaping, lawn care, and garden maintenance tailored to your needs.</p>
        </Col>

        
        <Col md={6} className="text-md-end text-center">
          <Image
            src="/garden.jpg"
            roundedCircle
            fluid
            style={{
              width: "500px",
              height: "500px",
              objectFit: "cover",
              objectPosition: "10% 100%",
            }}
          />
        </Col>

      </Row>
    </Container>
    </div>
    
    
    
  );
}