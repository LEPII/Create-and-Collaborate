import React from 'react';
import { Card } from 'react-bootstrap';

const EventsHead = () => {
  return (
    <Card className="jobForm">
      <Card.Img
        variant="top"
        src="https://s3-alpha-sig.figma.com/img/214d/30e1/f96fbe50eb065fa3d577174f8df52c02?Expires=1607299200&Signature=Qp-mhTP9sUzg5hm6VmaUQEmnZK-JBKXLiTce3GPxVGfcIPotk4xj6nS~eyI7Bfz~ZbXLkGdNhUUDXI4XrqDc2WOqAHLjaFp4AWdh1L9nVJiHGlajo4S6dBrVxLAYIwXBpjfqK5x77jjAKUPcwdLX6E0z65dyH10dxbICcWQ1bh8yg-tMi07C8sSBjY2lfaH9L8GihVLp5ITiy8kdqm0-GzFmobrfA1ydHLUDf4bdwS9CtN36PN~KzuUYVBti0RYT7bgHiXN2VzRS05jR00M934TU9UL6WpSapmROSY8Tv2il7jsLaw2X7dKszdHr~5lvukUdhES3tdVT~TpT1YpPLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        style={{ width: '100%', height: 400 }}
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EventsHead;
