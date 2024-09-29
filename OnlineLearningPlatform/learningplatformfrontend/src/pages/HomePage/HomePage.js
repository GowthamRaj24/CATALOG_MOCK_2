import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <Container className="mt-5 text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4">Welcome to Our Online Learning Platform</h1>
            <p className="lead mt-3">Start your learning journey today with our wide range of courses!</p>
            <Button as={Link} to="/courses" variant="primary" size="lg" className="mt-4">
              Explore Courses
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <CourseList />
      </Container>
    </div>
  );
}

export default HomePage;
