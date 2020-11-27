import React from 'react';
import { Card } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';

const CoverImage = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://s3-alpha-sig.figma.com/img/e723/fb35/be1f61d3828e564be6d413406c1e566f?Expires=1607299200&Signature=gp6v61TLrZJrAa1YAVjDYVo0cJXeNWwcj1cNJLNUQP9Brz3rwls1PKzzJVuw3pjoxM~kU1QfIpfbiOf5SOKitb5SdXmwdDCrzMCkdwNvwUlH7G8~0EqjCJBIWaQmaHvC3FOKjagKo6F7-zplBaBCAUpQwzaMUKo9aI3jKPuqUXOur20QIwMC7owrcRZCc95Xs8WFNGdADpG6eNIe7rOFhViVXpd58x0zUo1mwq9ETjU3EB~kKpJsIlOeGDLP5zANBCmGQZMXOoIuXFTJe7XcoVGX35vgzLrKlitn8Cdg4guTU8tq7wUqStbpScLxYmSsA~z6~fYaSKY1llkXOx2Qcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Text id="CCletters1" className="Create">
            CREATE & COLLABORATE
          </Card.Text>
          <Card.Text id="CCletters2" className="Create">
            Connecting with Artist{' '}
          </Card.Text>
          <Card.Text id="CCletters3" className="Create">
            & the world around you!
          </Card.Text>
          <LoginModal />
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CoverImage;
