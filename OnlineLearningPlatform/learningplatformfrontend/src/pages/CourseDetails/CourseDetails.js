import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import "bootstrap/dist/css/bootstrap.min.css";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    console.log(id);
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/courses/${id}`);
        setCourse(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error('Failed to fetch course details:', error);
      }
    };
    fetchCourse();
  }, []);

  if (!course) return (<><Container className="mt-5"><h2>Loading...</h2></Container></>);

  return (
    <>
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <VideoPlayer video={course.videos[0]} courseId={course._id} />
        </Col>
        <Col md={4}>
          <h3>Course Content</h3>
          <ListGroup>
            {course.videos.map((video, index) => (
              <ListGroup.Item key={index}>
                {video.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="success" className="mt-3" block>Enroll in Course</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CourseDetails;
