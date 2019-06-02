import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => (
	<div className="col-6 col-md-4 col-lg-2 animated fadeIn moviecard" style={{"animationDelay": (props.index / 10) + 's', paddingBottom: "50px"}}>
		<Link to={'/' + props.section +'/' + props.id}>
		<div className="poster">
			<div className="poster_shadow"></div>
			<img 
				src={'https://image.tmdb.org/t/p/w200' + props.poster_path} 
				alt={props.title} 
				className="mx-auto d-block img-fluid poster_image"
			/>
			<div className="poster_description">
				<p className="lead text-center">{props.title ? props.title : props.name}</p>
			</div>
			<div className="rating">
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
		</Link>
	</div>
);

const mapStateToProps = state => ({
	section: state.catalog.section
})

export default connect(mapStateToProps)(Card);