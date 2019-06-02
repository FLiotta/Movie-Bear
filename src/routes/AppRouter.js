import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MoviePage from '../pages/MoviePage';
import TvPage from '../pages/TvPage';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/Navbar';
import MovieArticlePage from '../pages/MovieArticlePage'

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" component={MoviePage} exact />
	      <Route path="/tv" component={TvPage} exact/>
	      <Route path="/about" component={AboutPage} />
	      <Route path="/movies/:id" component={MovieArticlePage} />
	    </Switch>
    </div>
  </BrowserRouter>
)
