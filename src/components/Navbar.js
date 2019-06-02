import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top transparent" id="navbar">
  <a className="navbar-brand" href="#">
    <img src="/logo.png" id="logo" alt="" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link disabled">TV Series</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link disabled">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link disabled">Github</NavLink>
      </li>
    </ul>
  </div>
</nav>
);
