import React from 'react';
import VideoUploader from '../components/VideoUploader';

const ProfileBody = () => {
  return (
    <>
      <div className="profaction">
        <VideoUploader />
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
      </div>
      <div className="profbody">
        <p>placeholder</p>
      </div>
    </>
  );
};

export default ProfileBody;
