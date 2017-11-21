import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'components/HomePage/Loadable';
import NotFoundPage from 'components/NotFoundPage/Loadable';
import Header from 'components/Header/Loadable';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
