import React from 'react';
import CoverImage from '../components/CoverImage';
import DropDownIcon from '../components/DropDownIcon';
import TestWelcomePage from '../components/TestWelcomePage';

const Welcome = () => {
  return (
    <div className="jobContainer">
      <TestWelcomePage /> <CoverImage />
      <DropDownIcon />
    </div>
  );
};

export default Welcome;
