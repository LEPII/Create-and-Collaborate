import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './messaging.css';
import axios from 'axios';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/message/`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(messages);

  return (
    <div>
      <Navbar />
      <div className="messageContainer">
        {messages?.map((message) => {
          return (
            // <div className='chat'>
            //   <div className='to'><p>To:{message.to}</p></div>
            //   <div className='time'><p>{message.createdAt}</p></div>
            //   <div className='text'>{message.text}</div>
            //   <button>Reply</button>
            // </div>
            <div class="card chat">
              <div class="card-body">
                <h5 class="card-title to">To:{message.to}</h5>
                <h6 class="card-subtitle time">{message.createdAt}</h6>
                <p class="card-text text">{message.text}</p>
                <a href="#" class="card-link">
                  Reply
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messaging;
