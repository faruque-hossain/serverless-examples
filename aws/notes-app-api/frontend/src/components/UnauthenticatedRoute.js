import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (!cProps.isAuthenticated ? <C {...props} {...cProps} /> : <Redirect to="/" />)} />
);
