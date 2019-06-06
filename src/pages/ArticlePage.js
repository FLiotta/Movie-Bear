import React,{Component} from 'react';
import {fetchArticle, clear} from '../actions/article';
import {connect} from 'react-redux';
import Card from '../components/Card';
import CastList from '../components/CastList';
import InfoCard from '../components/InfoCard';
import ImageList from '../components/ImageList';
import Loading from '../components/Loading';

class ArticlePage extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.fetchArticle(this.props.match.params.id, this.props.section)
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.main.info.status == 404)
			this.props.history.push('/404');
	}

	componentWillUnmount(){
		this.props.clear();
	}

	render(){
		return (
			<div className="container animated fadeIn" id="article">
				{(	!this.props.main.isLoading && 
					!this.props.credits.isLoading && 
					!this.props.videos.isLoading &&
					!this.props.images.isLoading) 
					? <div className="row">					
						<div className="col-12">
							<div className="row justify-content-center">
								<div className="col-7 col-lg-3" style={{paddingBottom: "50px"}}>
									<Card 
										{...this.props.main.info}
									/>
								</div>
								<div className="col-10 col-lg-8" id="article_description">
									<div className="row">
										<div className="col-12">
											<h1 id="title" className="display-4">
												{this.props.section == 'movie' 
													? this.props.main.info.title 
													: this.props.main.info.name
												}
												{this.props.main.info.homepage 
													&& <span>
														<a href={this.props.main.info.homepage} id="homepage_link" target="_blank"> Homepage <i class="fas fa-external-link-alt"></i></a>
														</span>
												}
											</h1>
											{this.props.main.info.tagline  
												&& <p className="lead" id="tagline">─{this.props.main.info.tagline}</p>
											}
											<p className="lead">{this.props.main.info.overview}</p>
										</div>
										<div className="col-12 section">
											<p className="lead text-white">Info</p>
											<InfoCard {...this.props.main.info} />
										</div>
										<div className="col-12 section">
											<p className="lead text-white">Crew</p>
											<CastList {...this.props.credits} />
										</div>
										<div className="col-12 section">
											<p className="lead text-white">Video</p>
											{this.props.videos.info && <iframe width="100%" height="355" src={'https://www.youtube.com/embed/' + this.props.videos.info[0].key} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
										</div>
										<div className="col-12 section">
											<p className="lead text-white">Images</p>
											<ImageList backdrops={this.props.images.info} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				: <Loading />
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	main: state.article.main,
	images: state.article.images,
	videos: state.article.videos,
	credits: state.article.credits
})

const mapDispatchToProps = dispatch => ({
	fetchArticle: (id, section) => dispatch(fetchArticle(id,section)),
	clear: () => dispatch(clear())
})


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);