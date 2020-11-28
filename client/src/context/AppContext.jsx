import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [currentUser, setCurrentUser] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const [post, setPost] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`/users/me`, {
        withCredentials: true
      })
      .then((response) => {
        setCurrentUser(response.data.user);
      })
      .catch((error) => console.log(error));
  }, [setCurrentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        events,
        setEvents,
        search,
        setSearch,
        post,
        setPost,
        image,
        setImage,
        imageUrl,
        setImageUrl
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
