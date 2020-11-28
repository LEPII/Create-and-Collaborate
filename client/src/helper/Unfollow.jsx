import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Unfollow = () => {
  let { id } = useParams();
  const click = async () => {
    try {
      await axios.put(`/users/${id}`, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={click}>Disconnect</button>
    </div>
  );
};

export default Unfollow;
