import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Feed from './Feed';
import CameraEnhanceRoundedIcon from '@material-ui/icons/CameraEnhanceRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import { Avatar } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import '../Post.css';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
  const [userData, setUserData] = useState([]);
  const { setLoading, post, setPost, currentUser } = useContext(AppContext);
  const history = useHistory();
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    // setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    setVideo(e.target.files[0]);
  };

  console.log(userData);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ml_default', 'video');
    formData.append('image', e.target.files[0]);
    if (e.target.files[0].name.includes('mp4, mov')) {
      axios
        .post('/gallery/videos', formData)
        .then((res) => setVideo(res.data.secure_url));
    } else {
      axios
        .post('gallery/images', formData)
        .then((res) => setImage(res.data.secure.url));
    }
  };

  useEffect(() => {
    axios
      .get('/gallery/images', {
        withCredentials: true
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUserData]);

  console.log(setUserData);
  return (
    <div className="post__container">
      <div className="post">
        <div className="post__top">
          <Avatar
            onClick={() => history.push(`/profile/${currentUser.user._id}`)}
          />

          <form onSubmit={handleSubmitFile}>
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
            <button type="submit" style={{ position: 'absolute' }}>
              Submit
            </button>

            <div className="post__bottom">
              <div className="post__option">
                <CameraEnhanceRoundedIcon style={{ color: 'blue' }} />
                <input
                  type="file"
                  name="photo"
                  className="change"
                  accept="image/*"
                  formenctype="multipart/form-data"
                  onChange={handleChange}
                />
                <h3 className="post__text"> Upload Photo </h3>
              </div>
              <div className="post__option">
                <DuoRoundedIcon style={{ color: 'green' }} />
                <input
                  type="file"
                  name="video"
                  className="change"
                  accept="video/*"
                  placeholder="Share your artwork"
                  onChange={handleChange}
                />
                <h3 className="post__text"> Upload Video </h3>
              </div>

              <div className="post__option">
                <EventRoundedIcon style={{ color: 'red' }} />
                <Link to="/events-form">
                  <h3 className="post__text"> Schedule Event </h3>
                </Link>
              </div>
              <div className="post__option">
                <WorkIcon style={{ color: 'orange' }} />
                <Link to="/jobs-form">
                  <h3 className="post__text"> Post Job </h3>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {userData &&
        userData
          ?.map((user) => {
            return <Feed key={user.user._id} feed={user} />;
          })
          .reverse()}
    </div>
  );
};

export default Post;
