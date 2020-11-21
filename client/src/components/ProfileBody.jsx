import React from 'react';
import VideoUploader from '../helper/VideoUploader';

const ProfileBody = () => {
  return (
    <div>
      <div className="profaction">
        <VideoUploader />
        <h4>Media Goes here</h4>
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
      <div className="profbody"></div>
    </div>
  );
};

export default ProfileBody;
