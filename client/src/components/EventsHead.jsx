import React from 'react';
import { Card } from 'react-bootstrap';

const EventsHead = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/350x100" />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Text>GIGS</Card.Text>
          <Card.Text>find a gig, and start creating!</Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EventsHead;
