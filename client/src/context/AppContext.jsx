import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

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
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
