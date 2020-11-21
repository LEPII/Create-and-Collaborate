import React from 'react';
import Footer from '../components/Footer';
import '../profile.css';

const ProfileHead = () => {
  return (
    <div class="profcard">
      <div>
        <img src="https://via.placeholder.com/125px" alt="user" />
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          Connect
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          Message
        </button>
      </div>
      <div>
        <h6>Singer-Songwriter</h6>
      </div>
      <div>
        <p>FOLLOWERS</p>
      </div>
    </div>
  );
};

export default ProfileHead;
