import React from 'react';
import Actor from './Actor';

export default (props) => (
	<div className="row" id="CastList">
	{props.info && props.info.map(actor => 
		<Actor key={actor.id} {...actor} />
	)}
	</div>
);