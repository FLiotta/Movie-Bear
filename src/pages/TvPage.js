import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchSeries, clear} from '../actions/catalog';
import Catalog from '../components/Catalog';
import Header from '../components/Header';
import BottomScrollListener from 'react-bottom-scroll-listener';

class TvPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchSeries()
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
				<BottomScrollListener onBottom={this.props.fetchSeries} />
			</div>			
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchSeries: (config) => dispatch(fetchSeries(config)),
	clear: () => dispatch(clear())
});

export default connect(undefined, mapDispatchToProps)(TvPage);