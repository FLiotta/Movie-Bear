import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => (
	<div className="row">
		<div className="col-10 col-md-10 col-lg-10">	
			<p><span className="subtitle">Genres:</span> {props.genres.map(g => <span key={g.id}> {g.name} / </span>)}</p>
			{props.budget > 0
				&& 	<p>
						<span className="subtitle">Budget:</span> $ {props.budget}
					</p>
			}
			{props.revenue > 0
				&&	<p>
						<span className="subtitle"> Revenue:</span> $ {props.revenue}
					</p>
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