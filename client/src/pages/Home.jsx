import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Feed from '../components/Feed';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <Container maxWidth="md">
      <div className="home__body">
        <Post />
        <Feed
          profilePic="https://via.placeholder.com/400x100"
          message="KING KONG AINT GOT NOTHING ON ME"
          timestamp="today"
          username="ElonMusk"
          image="https://via.placeholder.com/400x100"
        />
      </div>
    </Container>
  );
};

export default Home;
