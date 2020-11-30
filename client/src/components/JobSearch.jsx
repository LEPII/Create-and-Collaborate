import React from 'react';
import '../jobs.css';
import { Card } from 'react-bootstrap';

const JobSearch = ({ handleSearch }) => {
  return (
    <div className="jobsearchfix">
      <Card className="jobForm">
        <form>
          <div className="jobsearch">
            <h3 className="Create">Find your next gig!</h3>
            <input
              type="text"
              placeholder="Search by Title..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default JobSearch;
