import React from 'react';
import { Card } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';

const CoverImage = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/350x100" />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Text>CREATE & COLLABORATE</Card.Text>
          <Card.Text>Connecting with Artist & the world around you!</Card.Text>
          <LoginModal />
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CoverImage;
