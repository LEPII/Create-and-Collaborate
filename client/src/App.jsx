import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
