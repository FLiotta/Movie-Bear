import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => (
	<div className="row justify-content-center justify-content-lg-start">
		<div className="col-6 col-md-3 col-lg-3">	
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
		<div className="col-10 col-md-10 col-lg-6" id="article_info">	
			<p><span className="subtitle">Genres:</span> {props.genres.map(g => <span key={g.id}> {g.name} / </span>)}</p>
			{props.budget 
				&& <p><span className="subtitle">Budget:</span> $ {props.budget} <span className="subtitle">Revenue:</span> $ {props.revenue}</p>
			}
			{props.release_date 
				?	<p><span className="subtitle">Release date:</span> {props.release_date}</p>
				: 	<p><span className="subtitle">First air date:</span> {props.first_air_date}</p>
			}
			{props.runtime 
				&& <p><span className="subtitle">Duration:</span> {props.runtime}mins</p>
			}
			{props.number_of_seasons
				&& <p><span className="subtitle">Seasons:</span> {props.number_of_seasons}</p>
			}
			{props.number_of_episodes
				&& <p><span className="subtitle">Episodes:</span> {props.number_of_episodes}</p>
			}
		</div>
	</div>
);