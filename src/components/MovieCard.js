import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => (
	<div className="col-6 col-md-4 col-lg-2 animated fadeIn moviecard" style={{"animationDelay": (props.index / 10) + 's'}}>
			<img 
				src={'https://image.tmdb.org/t/p/w200' + props.poster_path} 
				alt={props.title} 
				className="mx-auto d-block img-fluid"
			>
			</img>
			<p className="lead text-center">{props.title}</p>
	</div>
);