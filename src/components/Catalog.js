import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import Loading from './Loading';

const Catalog = (props) => (
	<div className="row" id="catalog">
		{props.results && props.results.map((result, i) => {							
			const index = (i >= 20) ? Math.floor(i%20) : i;
				return (<Card key={result.id} {...result} section={props.section} index={index} />)
		})}
		{props.isLoading &&
			<div className="col-12">
				<Loading />
			</div>
		}
	</div>
);

const mapStateToProps = state => ({
	results: state.catalog.results,
	section: state.catalog.section,
	isLoading: state.catalog.isLoading
})

export default connect(mapStateToProps)(Catalog);