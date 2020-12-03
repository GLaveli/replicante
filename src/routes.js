import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Covid from './pages/Covid';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/covid" component={Covid} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;