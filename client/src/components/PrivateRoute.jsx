import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to="/welcome" /> : <Component {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
