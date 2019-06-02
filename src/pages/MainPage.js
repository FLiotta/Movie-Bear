import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/MovieCatalog';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import BottomScrollListener from 'react-bottom-scroll-listener';

class MainPage extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		if(this.props.total == 0)
			this.props.fetchMovies()
	}

	componentDidUpdate(){
		console.log(this.props)
	}

	render(){
		return (			
			<div className="row justify-content-center">
				<div className="col-12">
					<Header/>
				</div>
				<div className="col-12">
					<div className="row" style={{padding: "50px"}}>
						{this.props.movies && this.props.movies.map((movie, i) => {							
							const index = (i >= 20) ? Math.floor(i%20) : i;
							return (<MovieCard key={movie.id} {...movie} index={index} />)
						})}
						{this.props.isLoading &&
							<div className="col-12">
								<Loading />
							</div>
						}
					</div>
				</div>				
				<BottomScrollListener onBottom={this.props.fetchMovies} />
			</div>			
		)
	}
}

const mapStateToProps = state => ({
	total: state.moviecatalog.total,
	movies: state.moviecatalog.movies,
	isLoading: state.moviecatalog.isLoading
})

const mapDispatchToProps = dispatch => ({
	fetchMovies: (config) => dispatch(fetchMovies(config))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);