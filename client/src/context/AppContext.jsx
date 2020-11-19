import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`user/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
