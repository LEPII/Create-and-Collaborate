import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Images = () => {
  const [image, setImage] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/gallery/images/${id}`, { withCredentials: true })
      .then((response) => {
        setImage(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setImage]);

  return (
    <div>
      {image &&
        image.map(() => {
          return <div>{image.image}</div>;
        })}
    </div>
  );
};

export default Images;
