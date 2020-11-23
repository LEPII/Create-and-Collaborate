import React from 'react';
import { Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import ProfileBody from '../components/ProfileBody';
import ProfileHead from '../components/ProfileHead';
import '../profile.css';

const Profile = () => {
  return (
    <>
      <div className="profBG">
        <Navbar />
        <Card>
          <img className="" src="https://via.placeholder.com/350" />
        </Card>
        <ProfileBody />
        <ProfileHead />
      </div>
    </>
  );
};

export default Profile;
