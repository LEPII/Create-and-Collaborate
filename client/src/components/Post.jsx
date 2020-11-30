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
  const { setLoading, post, setPost, currentUser, loading } = useContext(
    AppContext
  );
  const history = useHistory();
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0].name.includes('mov')) {
      return setVideo(e.target.files[0]);
    }
    setImage(e.target.files[0]);
  };
  console.log(currentUser);
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('ml_default', 'video');
    formData.append(image ? 'image' : 'video', image || video);
    try {
      const { data } = await axios.post(
        `/gallery/${image ? 'images' : 'videos'}`,
        formData,
        { withCredentials: true }
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
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
  }, [loading]);

  
  return (
    <div className="post__container">
      <div className="post">
        <div className="post__top">
          <Avatar
            onClick={() => history.push(`/profile/${currentUser.user._id}`)}
          />
          <form onSubmit={handleSubmitFile}>
            <input
              className="post__input"
              placeholder="Select a file then hit the share button!"
              disabled
            />
            <button
              type="submit"
              style={{ position: 'absolute' }}
              class="glow-on-hover"
              type="submit"
            >
              SHARE!
            </button>
            <div className="post__bottom">
              <div className="post__option">
                <CameraEnhanceRoundedIcon
                  className="post__option__pic"
                  style={{ color: 'blue' }}
                />
                <input
                  type="file"
                  name="photo"
                  className="change"
                  accept="image/*"
                  maxlength="2"
                  formenctype="multipart/form-data"
                  onChange={handleChange}
                ></input>
                <h3 className="post__text"> Upload Photo </h3>
              </div>
              <div className="post__option">
                <DuoRoundedIcon
                  className="post__option__pic"
                  style={{ color: 'green' }}
                />{' '}
                <input
                  type="file"
                  name="photo"
                  className="change"
                  accept="video/*"
                  placeholder="Share your artwork"
                  onChange={handleChange}
                ></input>
                <h3> Upload Video </h3>
              </div>
              <div className="post__option">
                <Link to="/events-form">
                  <EventRoundedIcon
                    style={{ color: 'red' }}
                    className="post__option__pic"
                  />
                </Link>
                <h3> Schedule Event </h3>
              </div>
              <div className="post__option">
                <Link to="/jobs-form">
                  <WorkIcon
                    style={{ color: 'orange' }}
                    className="post__option__pic"
                  />
                </Link>
                <h3> Post Job </h3>
              </div>
            </div>
          </form>
        </div>
        <div className="post__bottom"></div>
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
