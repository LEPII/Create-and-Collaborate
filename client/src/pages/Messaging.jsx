import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/message/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMessages]);

  return <div>messaging component</div>;
};

export default Messaging;
