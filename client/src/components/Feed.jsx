import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';

const Feed = ({ id, time, caption, image, avatar, username }) => {
  const [userData, setUserData] = useState('');
  const [myUserData, setMyUserData] = useState('');

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
  console.log(userData);

  useEffect(() => {
    axios
      .get('/users/me', {
        withCredentials: true
      })
      .then((response) => {
        setMyUserData(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMyUserData]);
  console.log(myUserData);

  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar src={avatar} className="feed__avatar" />
        <div className="feed__topInfo">
          <h3>{username}</h3>
          <p>{time}</p>
        </div>
      </div>
      <div className="feed__bottom">
        <p>{caption}</p>
      </div>
      <div className="feed__image">
        <img src={image} alt="" />
      </div>
      <div className="feed__options">
        <div className="feed__option">
          <FavoriteBorderOutlinedIcon />
          <p>Love</p>
        </div>
        <div className="feed__option">
          <AssistantRoundedIcon />
          <p>Reflect</p>
        </div>
        <div className="feed__option">
          <ShareRoundedIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
