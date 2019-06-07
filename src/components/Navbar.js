import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top transparent" id="navbar">
  <NavLink className="navbar-brand" to="/">
    <img src="/images/logo.png" id="logo" alt="navbar logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link" activeClassName="active">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tv" className="nav-link" activeClassName="active">TV Series</NavLink>
      </li>
      <li className="nav-item">
        <a href="https://www.github.com/fliotta/movie-bear" className="nav-link" target="_blank">Github</a>
      </li>
    </ul>
  </div>
</nav>
);
