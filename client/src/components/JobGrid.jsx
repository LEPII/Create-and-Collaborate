import React, { useState, useEffect } from 'react';
import '../jobs.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JobSearch from './JobSearch';

const JobGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('/jobs', { withCredentials: true })
      .then((response) => {
        setJobs(response.data);
        setUsers(response.data);
        console.log(response.data[0].user[0].avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setJobs]);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  const filteredJobs = jobs?.filter((job) => {
    return job.job.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="jobContainer">
      <Card>
        <Card.Img
          variant="top"
          src="https://s3-alpha-sig.figma.com/img/214d/30e1/f96fbe50eb065fa3d577174f8df52c02?Expires=1607299200&Signature=Qp-mhTP9sUzg5hm6VmaUQEmnZK-JBKXLiTce3GPxVGfcIPotk4xj6nS~eyI7Bfz~ZbXLkGdNhUUDXI4XrqDc2WOqAHLjaFp4AWdh1L9nVJiHGlajo4S6dBrVxLAYIwXBpjfqK5x77jjAKUPcwdLX6E0z65dyH10dxbICcWQ1bh8yg-tMi07C8sSBjY2lfaH9L8GihVLp5ITiy8kdqm0-GzFmobrfA1ydHLUDf4bdwS9CtN36PN~KzuUYVBti0RYT7bgHiXN2VzRS05jR00M934TU9UL6WpSapmROSY8Tv2il7jsLaw2X7dKszdHr~5lvukUdhES3tdVT~TpT1YpPLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          style={{ width: '100%', height: 400 }}
        />
      </Card>
      <div class="container ">
        <JobSearch handleSearch={handleSearch} />
        {jobs &&
          filteredJobs.map((job) => {
            return (
              <table className="table gridInnards">
                <tbody>
                  <tr>
                    <th scope="row">
                      ${job.job.compensation}
                      <a href={`/profile/${job.job.hostedBy}`}>
                        <img className="jobAvatar" src={job.user[0].avatar} />
                      </a>
                    </th>
                    <td>{job.job.title}</td>
                    <td colSpan="2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam fuga repudiandae perferendis tempora minima
                      ullam in consequuntur rem voluptatem. Labore aperiam
                      voluptatum temporibus sint ratione exercitationem iure
                      repudiandae ullam reprehenderit.
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        ;
      </div>
    </div>
  );
};

export default JobGrid;
