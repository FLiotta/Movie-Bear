import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Navbar from '../components/Navbar';

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" component={MainPage} exact />
	    </Switch>
    </div>
  </BrowserRouter>
)
