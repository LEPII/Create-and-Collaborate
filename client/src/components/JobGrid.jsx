import React, { useState, useEffect } from 'react';
import '../jobs.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import JobSearch from './JobSearch';

const JobGrid = () => {
  const [jobs, setJobs] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('/jobs', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setJobs]);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  const filteredJobs =
    jobs && jobs.filter((jobs) => jobs.title.includes(searchValue));

  return (
    <div className="jobContainer">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/400x100" />
      </Card>
      <JobSearch handleSearch={handleSearch} />
      <table class="table">
        {jobs &&
          jobs.map((job) => {
            return (
              <div className="gridBG">
                <div className="container gridInnards">
                  <tr>
                    <th scope="row">{job.compensation}</th>
                    <td>{job.title}</td>
                    <td colspan="2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam fuga repudiandae perferendis tempora minima
                      ullam in consequuntur rem voluptatem. Labore aperiam
                      voluptatum temporibus sint ratione exercitationem iure
                      repudiandae ullam reprehenderit.
                    </td>
                  </tr>
                </div>
              </div>
            );
          })}
      </table>
    </div>
  );
};

export default JobGrid;
