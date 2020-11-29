import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PeopleSearch from './PeopleSearch';
import '../peopleFeed.css';

const PeopleFeed = () => {
  const [profileData, setProfileData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('/portfolios', { withCredentials: true })
      .then((response) => {
        setProfileData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  console.log(profileData);
  // const filteredPeople = profileData?.filter((people) => {
  //   return people.portfolios.title.toLowerCase().includes(searchValue.toLowerCase());
  // });

  return (
    <div className="peopleContainer">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{ width: '85%', height: 400 }}
        />
      </Card>
      <div class="container ">
        <PeopleSearch handleSearch={handleSearch} />
        {/* {profileData &&
          profileData?.map((profile) => { */}
        {/* return ( */}
        <table className="table gridInnards">
          <tbody>
            <tr>
              <th scope="row">
                {/* {profile?.portfolio?.company}
                      <a href={`/profile/${profile.portfolio.hostedBy}`}>
                      <img className="peopleAvatar" src={profile.user.avatar} />
                      </a>  */}
              </th>
              {/* <td>{profile.portfolio.company}</td> */}
              <td colSpan="2">Tee heee</td>
            </tr>
          </tbody>
        </table>
        {/* );
          })} */};
      </div>
    </div>
  );
};

export default PeopleFeed;
