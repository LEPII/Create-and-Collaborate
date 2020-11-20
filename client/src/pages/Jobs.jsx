import React from 'react';
import JobSearch from '../components/JobSearch';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobGrid from '../components/JobGrid';

const Jobs = () => {
  return (
    <>
      <Navbar />
      <JobSearch />
      <JobGrid />
      <Footer />
    </>
  );
};

export default Jobs;
