import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileBody = () => {
  const [portfolio, setPortfolio] = useState('');
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/portfolios/${id}`, { withCredentials: true })
      .then((response) => {
        setPortfolio(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setPortfolio]);
  console.log(portfolio);

  return (
    <>
      <div className="profaction">
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
        </button>
      </div>
      <div className="profbody">
        <div>
          <h6>Works at:</h6>
          <p>{portfolio.company}</p>
        </div>
        <div>
          <h6>Position:</h6>
          <p>{portfolio.position}</p>
        </div>
        <div>
          <h6>Studied at:</h6>
          <p>{portfolio.school}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
