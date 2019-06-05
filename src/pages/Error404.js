import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
	<div className="row justify-content-center" id="errorContainer">
		<div className="col-8 col-lg-8">
			<img src="/images/404.png" alt="error 404" className="img-fluid mx-auto d-block" />
			<Link to="/"><p className="lead text-center" id="goBack">Take me back</p></Link>
		</div>
	</div>
)