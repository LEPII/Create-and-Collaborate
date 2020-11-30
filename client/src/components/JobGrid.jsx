import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../jobs.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import JobSearch from './JobSearch';

const JobGrid = () => {
  const { setLoading } = useContext(AppContext);
  const [jobs, setJobs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('/jobs', { withCredentials: true })
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  const filteredJobs = jobs?.filter((job) => {
    return job.job.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="jobForm">
      <Card>
        <Card.Img
          variant="top"
          src="https://s3-alpha-sig.figma.com/img/446f/a110/d306f50e0cd7130e7e25a7c39684e75c?Expires=1607299200&Signature=LFB8H44WlYI4-IG3OAbPKuuxatl17N9CnPORojaLOUECTJvK5X5ND12FKgwWf6XlVyfSHOrVxKpZuOuOO9NoQpQIbHN0kHOiOGktKGHDL1Wbcj9tVinAC~wiZ~tWAWtl1-UAHVJZR-MhWmGVybcNF~uA10X7J~jeWKu1UIWvSjengUd9nnREAy95~unalPyowfX4aBAl7QGeoMNx00yWrqCJ3AqoGx7L1gk0IWj7G5GhA9qCq-cGAZk6KyyhOy4gFsZ4dthgSZ38R3Tptbrs9UQd0quvcFDP5yXxoJKIVfFQRUDLHwhNb0d0S4~lSa6lOuUpFF-ABgDQKDvWYbK8Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          style={{ width: '100%', height: 400 }}
        />
      </Card>
      <div class="container">
        <JobSearch handleSearch={handleSearch} />
        {jobs &&
          filteredJobs.map((job, id) => {
            return (
              <table key={id} className="table gridInnards">
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
