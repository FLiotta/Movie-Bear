import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHighlight} from '../actions/catalog';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = (props) => (
			<div>
				{props.header &&				
					<div className="jumbotron jumbotron-fluid">					
					  <div id="header" style={{backgroundPosition: "center", backgroundImage: "url('https://image.tmdb.org/t/p/w200" + props.header.backdrop_path + "')"}}></div>
					  <div className="container" id="header_container">					  	
					    <div className="row justify-content-center">
					    		<div className="header_shadow"></div>
								<div className="col-12 col-lg-3">
									<img 
										src={'https://image.tmdb.org/t/p/w200' + props.header.poster_path} 
										alt={props.header.title} 
										className="mx-auto d-block img-fluid animated fadeInRight"
										id="poster_image"
									/>
								</div>	
								<div className="col-10 col-lg-5">
									<h1 className="secondary display-4" id="header_title">{props.header.title ? props.header.title : props.header.name}</h1>
									<p className="text-white" id="header_description">{props.header.overview}</p>
									<Link to={'/' + props.section + '/' + props.header.id}><button className="btn btn-outline-warning btn-sm">Show me more</button></Link>									
									&ensp;
									<button id="refetchButton" className="btn btn-outline-danger btn-sm" onClick={props.fetchHighlight}><i className="fas fa-redo-alt"></i></button>
								</div>
							</div>
					  </div>
					</div>
				}
			</div>
)

const mapStateToProps = state => ({
	header: state.catalog.highlight,
	section: state.catalog.section
})

const mapDispatchToProps = dispatch => ({
	fetchHighlight: () => dispatch(fetchHighlight())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
