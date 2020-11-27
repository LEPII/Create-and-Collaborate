import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../profile.css';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Mentor from '../helper/Mentor';
import Student from '../helper/Student';
import SMSModal from '../helper/SMSModal';

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

  const follow = () => {
    axios.put(`/users/${id}`, { withCredentials: true });
  };

  return (
    <>
      <Card>
        <img className="profheader" src={user.header} alt={'userheader'} />
      </Card>
      <div class="profcard">
        <h3>{user?.username}</h3>
        <div>
          <img className="profPic fixSpace" src={user.avatar} alt="user" />
        </div>
        <div>
          <button type="button" onClick={follow} class="btn  fixSpace">
            Connect
          </button>
        </div>
        <div>
          <Link to={`/messages/${id}`}>
            <button type="button" class="btn  fixSpace">
              Message
            </button>
          </Link>
        </div>
        <div className="fixSpace">
          <h6>{user.category}</h6>
        </div>
        <div>
          <p>FOLLOWERS:</p>
        </div>
      </div>
      <div className="mentor">
        <div>{user.mentor ? <Mentor /> : <Student />}</div>
        <div className="info">
          <h3>{user?.name}</h3>
          <h5>{user?.location}</h5>
        </div>
      </div>
    </>
  );
};

export default ProfileHead;
