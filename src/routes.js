import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Property from './pages/Property';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/property" component={Property} />
    </Switch>
  );
}
