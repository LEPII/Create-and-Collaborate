import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/message/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>messaging component</div>;
};

export default Messaging;
