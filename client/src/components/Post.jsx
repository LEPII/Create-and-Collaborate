import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Feed from './Feed';
import CameraEnhanceRoundedIcon from '@material-ui/icons/CameraEnhanceRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import { Avatar } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import '../Post.css';
import { useHistory } from 'react-router-dom';

const Post = ({ handle, save }) => {
  const [userData, setUserData] = useState([]);
  const { setLoading, post, setPost, currentUser } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    axios
      .get('/users/all', {
        withCredentials: true
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUserData]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/gallery/images',
        withCredentials: true,
        data: setPost
      });
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar
          onClick={() => history.push(`/profile/${currentUser.user._id}`)}
        />
        <form>
          <input
            onChange={handleChange}
            className="post__input"
            placeholder={`What do you want to share today`}
          />
          <input
            onChange={handleChange}
            className="post__input"
            placeholder={`Image or Video URL (Optional)`}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <CameraEnhanceRoundedIcon
            onClick={handle}
            style={{ color: 'blue' }}
          />
          <h3> Upload Photo </h3>
        </div>
        <div className="post__option">
          <DuoRoundedIcon onClick={handle} style={{ color: 'green' }} />
          <h3> Upload Video </h3>
        </div>
        <div className="post__option">
          <EventRoundedIcon style={{ color: 'red' }} />
          <h3> Schedule Event </h3>
        </div>
      </div>
      {userData &&
        userData.map((user) => {
          return <Feed key={user.user._id} feed={user} />;
        })}
    </div>
  );
};

export default Post;
