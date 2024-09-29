import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const VideoPlayer = ({ video, courseId }) =>{
  const [completed, setCompleted] = useState(false);

  const handleVideoComplete = async () => {
    try {
      await axios.post('http://localhost:4001/courses/update', { courseId, videoId: video._id });
      setCompleted(true);
    } catch (error) {
      console.error('Failed to update progress:', error);
    }
  };

  return (
    <div className="mt-4">
      <h4>{video.title}</h4>
      <video src={video.url} controls onEnded={handleVideoComplete} className="w-100" />
      {completed && <Button variant="success" disabled className="mt-2">Completed</Button>}
    </div>
  );
}

export default VideoPlayer;
