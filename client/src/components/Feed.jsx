import React from 'react';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';

const Feed = ({ feed }) => {
  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar src={feed?.user.avatar} className="feed__avatar" />
        <div className="feed__topInfo">
          <h3>{feed?.user.username}</h3>
          {feed?.images.map((image, i) => (
            <p key={i}>{image.createdAt}</p>
          ))}
        </div>
      </div>
      <div className="feed__bottom">
        {feed?.images.map((image, i) => (
          <p key={i}>{image.caption}</p>
        ))}
      </div>
      <div className="feed__image">
        {feed?.images.map((image, i) => (
          <img key={i} src={image.image} alt={image.caption} />
        ))}
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
