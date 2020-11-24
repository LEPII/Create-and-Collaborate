import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../profile.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProfileHead = () => {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState('');
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/users/${id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUser]);

  useEffect(() => {
    axios
      .get(`/users/all`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUserData]);

  console.log(user);

  return (
    <>
      <Card>
        <img className="profheader" src={user.header} />
      </Card>
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
          <h6>{user.category}</h6>
        </div>
        <div>
          <p>FOLLOWERS:</p>
        </div>
      </div>
    </>
  );
};

export default ProfileHead;
