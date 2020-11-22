import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../profile.css';
import { useParams } from 'react-router-dom';
import Jobs from '../pages/Jobs';

const ProfileHead = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [user, setUser] = useState('');
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/portfolios/${id}`, { withCredentials: true })
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setPortfolio]);

  useEffect(() => {
    axios
      .get(`/users/${id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUser]);

  return (
    <div class="profcard">
      <h5>{user.name}</h5>
      <div>
        <img className="profPic fixSpace" src={user.avatar} alt="user" />
      </div>
      <div>
        <button type="button" class="btn btn-primary fixSpace">
          Connect
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-primary fixSpace">
          Message
        </button>
      </div>
      <div className="fixSpace">
        <h3>{user.category}</h3>
      </div>
      <div>
        <p>FOLLOWERS:</p>
      </div>
    </div>
  );
};

export default ProfileHead;
