import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/messages/${id}`, { withCredentials: true })
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMessages]);
  console.log(messages);

  return <div>messaging component</div>;
};

export default Messaging;
