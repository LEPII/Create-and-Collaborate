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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/events" component={Events} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/jobs" component={Jobs} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
