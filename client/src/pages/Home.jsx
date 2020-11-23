import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Feed from '../components/Feed';
import Container from '@material-ui/core/Container';

const Home = ({ history }) => {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return (
    <Container maxWidth="md">
      <div className="home__body">
        <button
          onClick={() => history.push(`/profile/${currentUser.user._id}`)}
        >
          Profile
        </button>
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
