import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MoviePage from '../pages/MoviePage';
import TvPage from '../pages/TvPage';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/Navbar';
import ArticlePage from '../pages/ArticlePage'

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" component={MoviePage} exact />
	      <Route path="/tv" component={TvPage} exact/>
	      <Route path="/about" component={AboutPage} />
	      <Route path="/movies/:id" render={(props) => <ArticlePage {...props} section="movie" />} />
	      <Route path="/tv/:id" render={(props) => <ArticlePage {...props} section="tv" />} />
	    </Switch>
    </div>
  </BrowserRouter>
)
