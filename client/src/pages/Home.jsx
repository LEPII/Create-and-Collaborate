import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Feed from '../components/Feed';
import Container from '@material-ui/core/Container';
import '../Home.css';

const Home = () => {
  return (
    <div className="home__body">
      <Navbar />
      <Container maxWidth="md">
        <Post />
        <Feed />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
