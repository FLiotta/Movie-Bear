import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/Navbar';
import ArticlePage from '../pages/ArticlePage'

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" render={(props) => <CatalogPage {...props} section="movie" />} exact />
	      <Route path="/tv" render={(props) => <CatalogPage {...props} section="tv" />} exact/>
	      <Route path="/movies/:id" render={(props) => <ArticlePage {...props} section="movie" />} />
	      <Route path="/tv/:id" render={(props) => <ArticlePage {...props} section="tv" />} />
	      <Route path="/about" component={AboutPage} />
	    </Switch>
    </div>
  </BrowserRouter>
)
