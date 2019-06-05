import React from 'react';
import Actor from './Actor';

export default (props) => (
	<div className="row" id="CastList">
	{props.cast && props.cast.map(actor => 
		<Actor key={actor.id} {...actor} />
	)}
	</div>
);