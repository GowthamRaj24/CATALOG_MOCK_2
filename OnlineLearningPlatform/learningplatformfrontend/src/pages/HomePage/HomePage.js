import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Welcome to Our Online Learning Platform</h1>
          <p className="lead mt-3">Start your learning journey today with our wide range of courses!</p>
          <Button as={Link} to="/courses" variant="primary" size="lg" className="mt-4">
            Explore Courses
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
