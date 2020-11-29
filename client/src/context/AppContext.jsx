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

  const fetchCurrentUser = () => {
    axios
      .get(`/users/me`, {
        withCredentials: true
      })

      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    console.log('current user in congtext', currentUser);
  }, [currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        fetchCurrentUser,
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
