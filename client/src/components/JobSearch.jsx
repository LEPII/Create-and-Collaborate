import React from 'react';
import { FormControl } from 'react-bootstrap';

const JobSearch = () => {
  return (
    <div>
      <form>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Search by Title..."
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Search by Location..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;
