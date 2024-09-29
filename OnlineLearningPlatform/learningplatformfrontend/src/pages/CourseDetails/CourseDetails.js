import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import "bootstrap/dist/css/bootstrap.min.css";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/courses/${id}`);
        setCourse(response.data.course);
        console.log(response.data.course.videos[0].url);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
      }
    };
    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await axios.post(`http://localhost:4001/courses/enroll/${id}`);
      console.log('Enrollment successful');
      // Optionally, you can refetch the course details to update the enrolled students list
      const response = await axios.get(`http://localhost:4001/courses/${id}`);
      setCourse(response.data);
    } catch (error) {
      console.error('Failed to enroll:', error);
    }
  };

  if (!course) return (
    <Container className="mt-5 text-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h2>Loading...</h2>
    </Container>
  );

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h2">{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text><strong>Instructor:</strong> {course.instructor}</Card.Text>
              {course.videos && course.videos.length > 0 ? (
                <VideoPlayer video={course.videos[0].url} courseId={course._id} />
              ) : (
                <Card.Text>No videos available</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title as="h3">Course Content</Card.Title>
              <ListGroup variant="flush">
                {course.videos && course.videos.length > 0 ? (
                  course.videos.map((video, index) => (
                    <ListGroup.Item key={index}>
                      {video.title}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No videos available</ListGroup.Item>
                )}
              </ListGroup>
              <Button variant="success" className="mt-3" onClick={handleEnroll} block>Enroll in Course</Button>
              <Card.Title as="h3" className="mt-4">Enrolled Students</Card.Title>
              <ListGroup variant="flush">
                {course.enrolledStudents && course.enrolledStudents.length > 0 ? (
                  course.enrolledStudents.map((student, index) => (
                    <ListGroup.Item key={index}>
                      {student}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No students enrolled</ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetails;
