import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AssistantRoundedIcon from '@material-ui/icons/AssistantRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import '../Feed.css';

const Feed = () => {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  // const { post, setPost } = useContext(AppContext);
  // console.log(currentUser)
  const fetchData = () => {
    const postData = axios.get('/gallery/images', { withCredentials: true });
    const userData = axios.get('/users/all', { withCredentials: true });
    axios
      .all([postData, userData])
      .then(
        axios.spread((...allData) => {
          const postInfo = allData[0];
          const userInfo = allData[1];
          setPostData(postInfo);
          setUserData(userInfo);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };
  // /
  // useEffect(() => {
  //   axios
  //     .get('/gallery/allposts', {
  //       withCredentials: true
  //     })
  //     .then((response) => {
  //       setPostData(response.data);
  //       console.log(response.data)
  //     })
  // .catch((error) => {
  //   console.log(error)
  // });
  // }, [setPostData]);
  // console.log(setPostData)

  // useEffect(() => {
  //   fetchData ()
  // }, []);

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
