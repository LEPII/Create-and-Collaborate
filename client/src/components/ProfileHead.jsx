import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import '../profile.css';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Card } from 'react-bootstrap';
import Mentor from '../helper/Mentor';
import Student from '../helper/Student';

const ProfileHead = () => {
  const [user, setUser] = useState([]);
  const [following, setFollowing] = useState([]);
  const { currentUser, setLoading, loading } = useContext(AppContext);
  const { id } = useParams();

  const fetchUser = () => {
    axios
      .get(`/users/${id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
        setFollowing(response.data.user.followers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [loading]);

  const follow = async () => {
    setLoading(true);
    try {
      await axios.put(`/users/${id}`, {
        withCredentials: true
      });
      await fetchUser();
      setLoading(false);
    } catch (error) {
      console.log('what happened', error.message);
    }
  };

  const isFollowing = (user.followers || []).some(
    (follower) => follower._id === currentUser?._id
  );

  const followColor = isFollowing ? 'green' : 'grey';

  console.log(following);

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
          <button
            type="button"
            onClick={follow}
            className={'btn fixSpace'}
            id={`${isFollowing ? 'unfollow-button' : 'follow-button'}`}
          >
            Connect
          </button>
        </div>
        <div>
          <Link to={`/messages/${id}`}>
            <button type="button" class="btn fixSpace">
              Message
            </button>
          </Link>
        </div>
        <div className="fixSpace">
          <h6>{user.category}</h6>
        </div>
        <p>FOLLOWERS:</p>
        <div>
          <div className="follower-avatar">
            <a href={`/profile/${following[0]?._id}`}>
              <img src={following[0]?.avatar} />
            </a>
            <a href={`/profile/${following[1]?._id}`}>
              <img src={following[1]?.avatar} />
            </a>
            <a href={`/profile/${following[2]?._id}`}>
              <img src={following[2]?.avatar} />
            </a>
          </div>
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
