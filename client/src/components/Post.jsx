import React from 'react';
import { AppContext } from '../context/AppContext';
import './Post.css';

const Post = () => {
  const { post, setPost, loading, setLoading } = useContext(AppContext);

  return (
    <div className="post">
      <div className="post__top">
        <input className="post__input"></input>
      </div>
      <div className="post__bottom"></div>
    </div>
  );
};

export default Post;
