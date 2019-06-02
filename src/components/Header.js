import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHighlight} from '../actions/MovieCatalog';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = (props) => (
			<div>
				{props.movie &&				
					<div className="jumbotron jumbotron-fluid">					
					  <div id="header" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w1280" + props.movie.backdrop_path + "')"}}></div>
					  <div className="container animated fadeIn" id="header_container">					  	
					    <div className="row justify-content-center">
					    		<div className="header_shadow"></div>
								<div className="col-12 col-lg-3">
									<img 
										src={'https://image.tmdb.org/t/p/w200' + props.movie.poster_path} 
										alt={props.movie.title} 
										className="mx-auto d-block img-fluid poster_image"
									/>
								</div>	
								<div className="col-12 col-lg-5">
									<h1 className="secondary display-4" id="header_title">{props.movie.title}</h1>
									<p className="text-white" id="header_description">{props.movie.overview}</p>
									<Link to={'/movies/' + props.movie.id}><button className="btn btn-outline-warning btn-sm">Show me more</button></Link>									
									&ensp;
									<button className="btn btn-outline-danger btn-sm" onClick={props.fetchHighlight}><i className="fas fa-redo-alt"></i></button>
								</div>
							</div>
					  </div>
					</div>
				}
			</div>
)

const mapStateToProps = state => ({
	movie: state.moviecatalog.highlight
})

const mapDispatchToProps = dispatch => ({
	fetchHighlight: () => dispatch(fetchHighlight())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
