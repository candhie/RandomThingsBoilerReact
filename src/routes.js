import React from 'react';
import { Route, Switch } from 'react-router';

import HomeContainer from './containers/HomeContainer';
import UserContainer from './containers/UserContainer';
import CompanyContainer from './containers/CompanyContainer'

export default (
  <Switch>
    <Route exact path="/" component={HomeContainer}/>
    <Route exact path="/user" component={UserContainer}/>
    <Route exact path="/company" component={CompanyContainer}/>
  </Switch>
);