import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../profile.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';

const ProfileHead = () => {
  const [user, setUser] = useState('');
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

  return (
    <>
      <Card>
        <img className="profheader" src={user.header} alt={'userheader'} />
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
      <Footer className="foot" />
    </>
  );
};

export default ProfileHead;
