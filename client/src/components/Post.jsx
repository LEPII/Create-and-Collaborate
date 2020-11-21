import React from 'react';
import { AppContext } from '../context/AppContext';
import CameraEnhanceRoundedIcon from '@material-ui/icons/CameraEnhanceRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import { Avatar } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import '../Post.css';

const Post = () => {
  //   const { post, setPost, image, setImage, imageUrl, setImageUrl, loading, setLoading } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar />
        <form>
          <input
            //  value={post}
            //  onChange={e => setPost(e.target.value)}
            className="post__input"
            placeholder={`What do you want to share today`}
          />
          <input
            //  value={imageURL}
            //  onChange={e => setImageUrl (e.target.value)}
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
          <h3> Upload Video </h3>
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
