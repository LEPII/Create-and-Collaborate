import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PeopleSearch from './PeopleSearch';

const PeopleGrid = () => {
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const fetchData = () => {
    const profileData = axios.get('/gallery/images', { withCredentials: true });
    const userData = axios.get('/users/all', { withCredentials: true });
    axios
      .all([profileData, userData])
      .then(
        axios.spread((...allData) => {
          const profileInfo = allData[0];
          const userInfo = allData[1];
          setProfileData(profileInfo);
          setUserData(userInfo);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="PeopleContainer">
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

export default PeopleGrid;
