import React from 'react';
import FileUploader from '../components/FileUploader';

const ProfileBody = () => {
  return (
    <div className="profaction">
      <FileUploader />
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
  );
};

export default ProfileBody;
