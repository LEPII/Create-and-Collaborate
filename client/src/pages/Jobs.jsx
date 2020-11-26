import React from 'react';
import Navbar from '../components/Navbar';
import JobGrid from '../components/JobGrid';
import Footer from '../components/Footer';
import SMS from '../helper/SMS';

const Jobs = () => {
  return (
    <>
      <Navbar />
      <SMS />
      <JobGrid />
      <Footer />
    </>
  );
};

export default Jobs;
