import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Feed from './Feed';
import CameraEnhanceRoundedIcon from '@material-ui/icons/CameraEnhanceRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import { Avatar } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import '../Post.css';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Post = () => {
  const [userData, setUserData] = useState([]);
  const { setLoading, post, setPost, currentUser } = useContext(AppContext);
  const history = useHistory();
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    setVideo(e.target.files[0]);
  };

  console.log(image);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ml_default', 'video');
    formData.append('image', e.target.files[0]);
    if (e.target.files[0].name.includes('mp4, mov')) {
      axios
        .post('/gallery/videos', formData)
        .then((res) => setVideo(res.data.secure_url));
    } else if (e.target.files[0].name.includes('mp4, mov')) {
      axios
        .post('gallery/images', formData)
        .then((res) => setImage(res.data.secure.url));
    } else
      axios
        .post('gallery/post', formData)
        .then((res) => setImage(res.data.secure.url));
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

  // const like = () => {
  //   axios.post(`/likes/${id}`)
  // }

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
                ></input>

                <h3 className="post__text"> Upload Photo </h3>
              </div>
              <div className="post__option">
                <input
                  type="file"
                  name="video"
                  className="change"
                  accept="video/*"
                  placeholder="Share your artwork"
                  onChange={handleChange}
                ></input>
                <DuoRoundedIcon style={{ color: 'green' }} />
                <h3> Upload Video </h3>
              </div>
              <div className="post__option">
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  placeholder="Share your artwork"
                  size="2"
                  className="change"
                  onChange={handleChange}
                ></input>
                <EventRoundedIcon style={{ color: 'red' }} />
                <h3> Schedule Event </h3>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="post__bottom"></div>
      </div>
      {userData &&
        userData?.map((user) => {
          return <Feed key={user.user._id} feed={user} />;
        })}
    </div>
  );
};

export default Post;
