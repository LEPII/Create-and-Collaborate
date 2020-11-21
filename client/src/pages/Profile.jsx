import React from 'react';
import { Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import ProfileBody from '../components/ProfileBody';
import ProfileHead from '../components/ProfileHead';
import Footer from '../components/Footer';
import '../profile.css';

const Profile = () => {
  return (
    <>
      <Navbar />
      <Card>
        <img className="" src="https://via.placeholder.com/350x350" />
      </Card>
      <ProfileBody />
      <ProfileHead />
    </>
  );
};

export default Profile;
