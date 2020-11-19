import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = () => {
  const [video, setVideo] = useState('');

  const handleVideo = (e) => {
    const url = 'https://api.cloudinary.com/v1_1/demo/video/upload';
    const formData = new FormData();
    formData.append('ml_default', 'video');
    formData.append('file', e.target.files[0]);
    axios.post(url, formData).then((res) => setVideo(res.data.secure_url));
  };
  const handleSaveVideo = () => {
    axios.post('/gallery/videos', { video });
  };

  return (
    <div>
      <input type="file" onChange={handleVideo} />
      <button onClick={handleSaveVideo}>Save Video</button>
    </div>
  );
};

export default VideoUploader;
