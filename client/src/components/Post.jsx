import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import FileUploader from './FileUploader';
import CameraEnhanceRoundedIcon from '@material-ui/icons/CameraEnhanceRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import { Avatar } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import '../Post.css';

const Post = () => {
  const {
    post,
    setPost,
    image,
    setImage,
    imageUrl,
    setImageUrl,
    loading,
    setLoading
  } = useContext(AppContext);

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
        <Avatar />
        <form>
          <input
            // value={post}
            onChange={handleChange}
            className="post__input"
            placeholder={`What do you want to share today`}
          />
          <input
            // value={imageURL}
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
          <CameraEnhanceRoundedIcon style={{ color: 'blue' }} />
          <h3> Upload Photo </h3>
        </div>
        <div className="post__option">
          <DuoRoundedIcon style={{ color: 'green' }} />
          <FileUploader />
        </div>
        <div className="post__option">
          <EventRoundedIcon style={{ color: 'red' }} />
          <h3> Schedule Event </h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
