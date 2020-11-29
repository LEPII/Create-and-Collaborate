import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './messaging.css';
import axios from 'axios';

const Messaging = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`/message/me`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="messageContainer">
      <Navbar />
      {messages?.map((message) => {
        return (
          <div class="card chat">
            <div class="card-body">
              <h5 class="card-title from">From: {message.from}</h5>
              <h6 class="card-subtitle time">{message.createdAt}</h6>
              <p class="card-text text">{message.text}</p>
              <a href={`/messages/${message.toID}`} class="card-link">
                Reply
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messaging;
