import React from 'react';
import ArticleImage from './ArticleImage';
export default (props) => (
	<div className="row">
		{props.backdrops && props.backdrops.map(backdrop => 
			<ArticleImage key={backdrop.file_path} {...backdrop} />
		)}
	</div>
);