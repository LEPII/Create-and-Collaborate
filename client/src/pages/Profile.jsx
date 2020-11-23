import React from 'react';
import Navbar from '../components/Navbar';
import ProfileBody from '../components/ProfileBody';
import ProfileHead from '../components/ProfileHead';
import '../profile.css';

const Profile = () => {
  return (
    <>
      <div className="profBG">
        <Navbar />
        <ProfileBody />
        <ProfileHead />
      </div>
    </>
  );
};

export default Profile;
