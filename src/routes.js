import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Property from './pages/Property';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/property/:id" component={Property} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}
