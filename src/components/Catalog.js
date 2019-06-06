import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import Loading from './Loading';

const Catalog = (props) => (
	<div className="row" id="catalog">
		{props.results && props.results.map((result, i) => {							
			const index = (i >= 20) ? Math.floor(i%20) : i;
				return (
					<div className="col-6 col-md-4 col-lg-2 animated fadeIn moviecard" style={{"animationDelay": (index / 10) + 's', paddingBottom: "50px"}}>
						<Link to={'/' + props.section +'/' + result.id}>
							<Card 
								key={result.id} 
								{...result} 
								showTitle={true}
								size="sm"
							/>
						</Link>
					</div>
				)
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