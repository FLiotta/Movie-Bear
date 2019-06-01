import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/MovieCatalog';
import MovieCard from '../components/MovieCard';
import BottomScrollListener from 'react-bottom-scroll-listener';

class MainPage extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.fetchMovies()
	}

	render(){
		return (			
			<div className="row">
				<div className="col-12">
					<div className="row" style={{padding: "50px"}}>
						{this.props.movies && this.props.movies.map((movie, i) => {
							
							const index = (i >= 20) ? Math.floor(i%20) : i;
							return (<MovieCard key={movie.id} {...movie} index={index} />)
						})}
					</div>
				</div>
				<BottomScrollListener onBottom={this.props.fetchMovies} />
			</div>			
		)
	}
}

const mapStateToProps = state => ({
	movies: state.moviecatalog.movies
})

const mapDispatchToProps = dispatch => ({
	fetchMovies: (config) => dispatch(fetchMovies(config))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);