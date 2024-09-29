import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CourseList.css';
import image from "../../assets/learning_logo.jpg"

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4001/courses');
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Available Courses</h2>
      <Row>
        {courses.map(course => (
          <Col md={4} key={course._id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={image || 'default-image.jpg'} alt={course.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description ? course.description.substring(0, 100) : ''}...</Card.Text>
                <Button as={Link} to={`/courses/${course._id}`} variant="primary" className="mt-auto">View Course</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CourseList;
