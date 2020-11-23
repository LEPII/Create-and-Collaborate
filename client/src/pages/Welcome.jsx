import React, { useState, useContext, useEffect } from 'react';
import CoverImage from '../components/CoverImage';
import DropDownIcon from '../components/DropDownIcon';
import LogForm from '../components/LogForm';
import Footer from '../components/Footer';
import axios from 'axios';

const Welcome = () => {
  return (
    <>
      <CoverImage />
      <DropDownIcon />
      <Footer />
    </>
  );
};

export default Welcome;
