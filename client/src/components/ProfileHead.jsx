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
        <h6>Category:</h6>
        <p>Actor</p>
      </div>
      <h6>Followers:</h6>
      <div className="followers">
        <img
          className="circle"
          src="https://via.placeholder.com/100px"
          alt="user"
        />
        <img
          className="circle"
          src="https://via.placeholder.com/100px"
          alt="user"
        />
        <img
          className="circle"
          src="https://via.placeholder.com/100px"
          alt="user"
        />
        <img
          className="circle"
          src="https://via.placeholder.com/100px"
          alt="user"
        />
      </div>
    </div>
  );
};

export default ProfileHead;
