import React from 'react';
import UserEditForm from '../components/UserEditForm';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const UserEditPage = () => {
  return (
    <div className="UserEditForm">
      <NavBar />
      <UserEditForm />
      <Footer />
    </div>
  );
};

export default UserEditPage;
