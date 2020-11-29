import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Messenger from '../helper/Messenger';
import Navbar from '../components/Navbar';
import './messaging.css';
import axios from 'axios';

const PersonalMessaging = () => {
  const [messages, setMessages] = useState(null);
  const { id } = useParams();

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

  return (
    <div className="messageContainer">
      <Navbar />
      <div>
        {messages?.map((message) => {
          return (
            <div class="card chat">
              <div class="card-body">
                <h5 class="card-title to"> To: {message.to}</h5>
                <h6 class="card-subtitle time">{message.createdAt}</h6>
                <p class="card-text text">{message.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="messageBox">
        <Messenger />
      </div>
    </div>
  );
};

export default PersonalMessaging;
