import React from 'react';
import PortfolioEditForm from '../components/PortfolioEditForm';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioEditPage = () => {
  return (
    <div className="UserEditForm">
      <NavBar />
      <PortfolioEditForm />
      <Footer />
    </div>
  );
};

export default PortfolioEditPage;
