import React from 'react';
import '../jobs.css';
import { Card } from 'react-bootstrap';

const JobSearch = ({ handleSearch }) => {
  return (
    <div class="jobsearchfix">
      <Card>
        <form>
          <div className="jobsearch">
            <h3>Find your next gig!</h3>
            <input
              type="text"
              placeholder="Search by Title..."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default JobSearch;
