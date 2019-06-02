import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MoviePage from '../pages/MoviePage';
import TvPage from '../pages/TvPage';
import Navbar from '../components/Navbar';

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" component={MoviePage} exact />
	      <Route path="/tv" component={TvPage} exact/>
	    </Switch>
    </div>
  </BrowserRouter>
)
