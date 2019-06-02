import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies, clear} from '../actions/catalog';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import BottomScrollListener from 'react-bottom-scroll-listener';

class MoviePage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchMovies()		
	}

	componentWillUnmount(){
		this.props.clear()
	}

	render(){
		return (			
			<div className="row justify-content-center">
				<div className="col-12">
					<Header/>
				</div>
				<div className="col-12">
					<Catalog />
				</div>				
				<BottomScrollListener onBottom={this.props.fetchMovies} />
			</div>			
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchMovies: (config) => dispatch(fetchMovies(config)),
	clear: () => dispatch(clear())
});

export default connect(undefined, mapDispatchToProps)(MoviePage);