import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Feed from '../components/Feed';
import Container from '@material-ui/core/Container';

const Home = ({ history }) => {
  return (
    <Container maxWidth="md">
      <div className="home__body">
        <Post />
        <Feed />
      </div>
    </Container>
  );
};

export default Home;
