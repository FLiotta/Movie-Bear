import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  </BrowserRouter>
)
