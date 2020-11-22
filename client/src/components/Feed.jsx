import React from 'react';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';

const Feed = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar src={profilePic} className="feed__avatar" />
        <div className="feed__topInfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="feed__bottom">
        <p>{message}</p>
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
