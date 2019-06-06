import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => (
	<div className="poster">
		<div className="poster_main">
			<div className="poster_shadow"></div>
			<img 
				src={'https://image.tmdb.org/t/p/w200' + props.poster_path} 
				alt={props.title} 
				className="mx-auto d-block img-fluid poster_image"
			/>
		</div>
		{props.showTitle &&
			<div className="poster_description">
				<p className="lead text-center">{props.title ? props.title : props.name}</p>
			</div>
		}
		<div className={props.size == 'sm' ? "rating_sm" : "rating"}>
			<CircularProgressbar 
				value={props.vote_average} 
				maxValue={10} 					
				text={props.vote_average + '/10'} 
				styles={{
					path: {
						stroke: '#EF810E',
						strokeLinecap: 'round',
						transition: 'stroke-dashoffset 0.5s ease 0s',
					},
					trail: {
						stroke: '#053752',
						strokeLinecap: 'round',
					},
					text: {
						fill: '#EF810E',
						fontSize: '22px',
					},
					background: {
						fill: '#EF810E'
					}
				}}
			/>
		</div>
	</div>
);