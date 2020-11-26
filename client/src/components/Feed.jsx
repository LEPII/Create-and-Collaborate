import React from 'react';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';
import { useHistory } from 'react-router-dom';

const Feed = ({ feed }) => {
  const history = useHistory();

  // let imagess = feed?.images;
  // console.log(imagess)
  // let filteredFeed = imagess.filter(function (el) {
  //   if imagess != null;
  // });
  // console.log(filteredFeed)
  // function bouncer(arr) {
  //     for (i = 0; i < arr.length; i++){
  //         for (j=0; j<feed.length;j++) {
  //            arr = arr.filter(x => x) {
  //                  return val !== notAllowed[j];
  //                 });
  //    }
  //   return arr;
  //   }
  ////////

  // let realColors = imagess.filter(function (e) {return e != null;});

  ////////

  // const evens = imagess.filter(item => item != null);

  ////////
  // var result =  array.filter(function(e) {
  //   return e.length;
  // });

  console.log(feed);
  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar
          src={feed?.user.avatar}
          onClick={() => history.push(`/profile/${feed.user._id}`)}
          className="feed__avatar"
        />
        <div className="feed__topInfo">
          <h3>{feed?.user.username}</h3>
          <p>{feed?.images[0]?.createdAt}</p>
        </div>
      </div>
      <div className="feed__bottom">
        <p>{feed?.images[0]?.caption}</p>
      </div>
      <div className="feed__image">
        <img src={feed?.images[0]?.image} alt={feed?.images.caption} />
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
