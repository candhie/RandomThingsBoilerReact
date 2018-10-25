import React from 'react';
import { Route, Switch } from 'react-router';

import HomeContainer from './containers/HomeContainer';

export default (
  <Switch>
    <Route exact path="/" component={HomeContainer}/>
  </Switch>
);