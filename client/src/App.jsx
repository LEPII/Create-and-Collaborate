import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';
import Welcome from './pages/Welcome';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/Events" component={Events} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/Jobs" component={Jobs} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/Welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
