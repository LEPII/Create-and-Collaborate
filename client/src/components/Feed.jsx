import React from 'react';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import Messaging from '../pages/Messaging';
import '../Feed.css';
import { useHistory } from 'react-router-dom';

const Feed = ({ feed }) => {
  const history = useHistory();

  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar
          src={feed?.user[0].avatar}
          onClick={() => history.push(`/profile/${feed.user[0]._id}`)}
          className="feed__avatar"
        />
        <div className="feed__topInfo">
          <h3
            onClick={() => history.push(`/profile/${feed.user[0]._id}`)}
            className="feed__username"
          >
            {feed?.user[0]?.username}
          </h3>
          <p>{feed?.images?.createdAt}</p>
        </div>
      </div>
      <div className="feed__bottom">
        <p>{feed?.images?.caption}</p>
      </div>
      <div className="feed__image">
        <img src={feed?.images.image} alt={feed?.images.caption} />
      </div>
      <div className="feed__options">
        <div className="feed__option">
          <FavoriteBorderOutlinedIcon className="feed__icon" />
          <p> Love</p>
        </div>
        <div className="feed__option">
          <AssistantRoundedIcon className="feed__icon" />
          <p> Reflect</p>
        </div>
        <div className="feed__option">
          <ShareRoundedIcon className="feed__icon" />
          <p> Share</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
