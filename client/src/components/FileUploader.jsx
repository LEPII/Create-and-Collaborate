import React, { useState } from 'react';
import axios from 'axios';
import Post from './Post';

const FileUploader = () => {
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    const url = 'https://api.cloudinary.com/v1_1/demo/video/upload';
    const formData = new FormData();
    formData.append('ml_default', 'video');
    formData.append('file', e.target.files[0]);
    if (e.target.files[0].name.includes('mp4')) {
      axios.post(url, formData).then((res) => setVideo(res.data.secure_url));
    } else {
      axios.post('gallery/images', formData);
      // .then((res) = setImage (res.data.secure.url));
    }
  };
  const handleSaveFile = () => {
    axios.post('/gallery/videos', { video });
    console.log('hey', video);
  };

  return (
    <div>
      <Post handle={handleFile} save={handleSaveFile} />
    </div>
  );
};

export default FileUploader;
