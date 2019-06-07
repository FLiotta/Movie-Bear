import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage';
import Error404 from '../pages/Error404';
import Navbar from '../components/Navbar';
import ArticlePage from '../pages/ArticlePage'

export default (props) => (
  <BrowserRouter>
  	<Navbar />
  	<div id="routercontainer">
	    <Switch>
	      <Route path="/" render={(props) => <CatalogPage {...props} section="movie" />} exact />
	      <Route path="/tv" render={(props) => <CatalogPage {...props} section="tv" />} exact/>
	      <Route path="/movie/:id" render={(props) => <ArticlePage {...props} section="movie" />} />
	      <Route path="/tv/:id" render={(props) => <ArticlePage {...props} section="tv" />} />
	      <Route component={Error404} />
	    </Switch>
    </div>
  </BrowserRouter>
)
