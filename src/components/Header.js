import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.movie &&					
					<div className="jumbotron jumbotron-fluid">
					  <div id="header" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w1280" + this.props.movie.backdrop_path + "')"}}></div>
					  <div className="container" id="header_container">					  	
					    <div className="row justify-content-center">
					    		<div className="header_shadow"></div>
								<div className="col-12 col-lg-3">
									<img 
										src={'https://image.tmdb.org/t/p/w200' + this.props.movie.poster_path} 
										alt={this.props.movie.title} 
										className="mx-auto d-block img-fluid poster_image"
									/>
								</div>	
								<div className="col-12 col-lg-5">
									<h1 className="secondary display-4" id="header_title">{this.props.movie.title}</h1>
									<p className="text-white" id="header_description">{this.props.movie.overview}</p>
									<a href={'/movies/' + this.props.movie.id}><button className="btn btn-outline-warning btn-sm">Show me more</button></a>
								</div>
							</div>
					  </div>
					</div>
				}
			</div>
		)
	}
};

const mapStateToProps = state => ({
	movie: state.moviecatalog.movies[Math.floor(Math.random() * state.moviecatalog.movies.length) + 0]
})

export default connect(mapStateToProps)(Header);
