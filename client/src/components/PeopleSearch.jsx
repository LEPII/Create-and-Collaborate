import React from 'react';
import '../peopleFeed.css';
import { Card } from 'react-bootstrap';

const PeopleSearch = ({ handleSearch }) => {
  return (
    <div class="peoplesearchfix">
      <Card>
        <form>
          <div className="peoplesearch">
            <h3>Search for Talent</h3>
            <div class="row">
              <input
                type="text"
                placeholder="Search Talent By Category..."
                onChange={(e) => handleSearch(e.target.value)}
              />
              <input
                type="text"
                placeholder="Search Talent by Company..."
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PeopleSearch;
