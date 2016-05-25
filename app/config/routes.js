import React from 'react';
import Main from '../components/Main';
import UserHome from '../components/UserHome';
//import Dashboard from '../components/Dashboard';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={UserHome} />
  </Route>
);

// <Route path="dashboard/:nickname" component={Dashboard} />