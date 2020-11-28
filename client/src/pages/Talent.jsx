import React from 'react';
import PeopleFeed from '../components/PeopleFeed';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Talent = () => {
  return (
    <div>
      <Navbar />
      <div className="home__body">
        <PeopleFeed />
      </div>

      <Footer />
    </div>
  );
};

export default Talent;
