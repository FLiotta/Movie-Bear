import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchCatalog, clear} from '../actions/catalog';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import BottomScrollListener from 'react-bottom-scroll-listener';

class CatalogPage extends Component {
	constructor(props){
		super(props);
		this.handleFetch = this.handleFetch.bind(this);
	}

	componentDidMount(){
		this.handleFetch();
	}

	componentWillUpdate(nextProps){
		if(nextProps.location.pathname != this.props.location.pathname)
			this.props.clear()
		this.handleFetch(nextProps.section)
	}

	componentWillUnmount(){
		this.props.clear();
	}

	handleFetch(section){
		if(!this.props.isLoading)
			this.props.fetchCatalog({section: section ? section : this.props.section});
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
				<BottomScrollListener onBottom={this.handleFetch} />
			</div>			
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCatalog: (config) => dispatch(fetchCatalog(config)),
	clear: () => dispatch(clear())
});

export default connect(undefined, mapDispatchToProps)(CatalogPage);