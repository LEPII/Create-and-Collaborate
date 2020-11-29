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
  const { currentUser, loading, setLoading } = useContext(AppContext);
  const followButton = useRef(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/users/${id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
        setFollowing(response.data.user.followers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(following);
  console.log(user);

  const follow = async () => {
    try {
      await axios.put(`/users/${id}`, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
    if (following.indexOf(currentUser._id) === -1) {
      followButton.current.className = 'follow';
    } else {
      followButton.current.className = 'unfollow';
    }
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
          <button
            type="button"
            ref={followButton}
            onClick={follow}
            class="btn fixSpace"
          >
            Connect
          </button>
          {/* {(following.indexOf(current) === -1 )? <Follow /> : <Unfollow />} */}
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
        <div>
          <p>FOLLOWERS:</p>
          <div></div>
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
