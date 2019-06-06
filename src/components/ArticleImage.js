import React from 'react';

export default (props) => (
	<div className="col-6 col-md-3">
		<a key={props.file_path} href={'https://image.tmdb.org/t/p/original' + props.file_path} target="_blank">
			<img src={'https://image.tmdb.org/t/p/w200' + props.file_path} className="img-fluid article_image mx-auto d-block" />
		</a>
	</div>
)