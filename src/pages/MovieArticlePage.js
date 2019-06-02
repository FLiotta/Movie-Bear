import React,{Component} from 'react';
import {fetchMovie} from '../actions/article';
import {connect} from 'react-redux';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MovieArticlePage extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentWillMount(){
		this.props.fetchMovie(this.props.match.params.id)
	}

	render(){
		return (
			<div className="container animated fadeIn" id="article">
				{this.props.article.id &&
				<div className="row">					
					<div className="col-12">
						<div className="row justify-content-center">
							<div className="col-3">
								<img src={'https://image.tmdb.org/t/p/w200' + this.props.article.poster_path}  />
							</div>
							<div className="col-8" id="article_description">
								<div className="row">
									<div className="col-12">
										<h1 id="title" className="display-4">{this.props.article.title}</h1>
										<p>{this.props.article.overview}</p>
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Info</p>
										<div className="row">
											<div className="col-3">	
												<CircularProgressbar 
													value={this.props.article.vote_average} 
													maxValue={10} 					
													text={this.props.article.vote_average + '/10'} 
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
											<div className="col-6" id="article_info">												
												<p><span className="subtitle">Genres:</span> {this.props.article.genres.map(g => <span key={g.id}>{g.name} / </span>)}</p>
												<p><span className="subtitle">Budget:</span> U$D{this.props.article.budget}</p>
												<p><span className="subtitle">Release date:</span> {this.props.article.release_date}</p>
												<p><span className="subtitle">Duration:</span> {this.props.article.runtime}mins</p>
											</div>
										</div>
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Video</p>
										{this.props.article.videos && <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.props.article.videos[0].key} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Images</p>
										{this.props.article.backdrops && this.props.article.backdrops.map(backdrop => <a href={'https://image.tmdb.org/t/p/original' + backdrop.file_path} target="_blank"><img key={backdrop.file_path} src={'https://image.tmdb.org/t/p/w200' + backdrop.file_path} className="img-fluid article_image" style={{padding: "10px"}} /></a>)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	article: state.article
})

const mapDispatchToProps = dispatch => ({
	fetchMovie: (id) => dispatch(fetchMovie(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieArticlePage);