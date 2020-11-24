import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';

const Feed = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    axios
      .get('/users/all', {
        withCredentials: true
      })
      .then((response) => {
        setUserData(response.data);
        console.log(setUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUserData]);
  console.log(userData);

  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar src={null} className="feed__avatar" />
        <div className="feed__topInfo">
          {/* <h3>{currentUser.username}</h3> */}
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="feed__bottom">{/* <p>{post.caption}</p> */}</div>

      <div className="feed__image">{/* <img src={post.image} alt="" /> */}</div>
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
