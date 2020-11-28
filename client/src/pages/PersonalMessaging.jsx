import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './messaging.css';
import axios from 'axios';

const PersonalMessaging = () => {
  const [messages, setMessages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/message/${id}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(messages);

  return <div>messaging component</div>;
};

export default PersonalMessaging;
