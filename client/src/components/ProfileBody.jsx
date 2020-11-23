import React, { useEffect, useState } from 'react';
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

  return (
    <>
      <div className="profaction">
        <h4>Gallery:</h4>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
          <h4>Images</h4>
        </button>
        <button type="button" class="btn btn-secondary">
          <img src="https://via.placeholder.com/100px" alt="user" />
          <h4>Videos</h4>
        </button>
      </div>
      <div className="profbody">
        <div>
          <h6>Works at:</h6>
          <p>{portfolio?.company}</p>
        </div>
        <div>
          <h6>Position:</h6>
          <p>{portfolio?.position}</p>
        </div>
        <div>
          <h6>Studied at:</h6>
          <p>{portfolio?.school}</p>
        </div>
        <div className="profdescription">
          <h3>About me:</h3>
          <p>{portfolio?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
