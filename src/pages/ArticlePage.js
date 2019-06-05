import React,{Component} from 'react';
import {fetchArticle} from '../actions/article';
import {connect} from 'react-redux';
import CastList from '../components/CastList';
import InfoCard from '../components/InfoCard';
import ImageList from '../components/ImageList';

class ArticlePage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchArticle(this.props.match.params.id, this.props.section)
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.article.status > 200)
			nextProps.history.push("/404")
	}

	render(){
		return (
			<div className="container animated fadeIn" id="article">
				{(this.props.article && this.props.article.credits && this.props.article.genres) &&
				<div className="row">					
					<div className="col-12">
						<div className="row justify-content-center">
							<div className="col-10 col-lg-3">
								<img src={'https://image.tmdb.org/t/p/w200' + this.props.article.poster_path} className="mx-auto d-block"  />
							</div>
							<div className="col-10 col-lg-8" id="article_description">
								<div className="row">
									<div className="col-12">
										<h1 id="title" className="display-4">
											{this.props.section == 'movie' 
												? this.props.article.title 
												: this.props.article.name
											}
											{this.props.article.homepage 
												&& <span>
													<a href={this.props.article.homepage} id="homepage_link" target="_blank"> Homepage <i class="fas fa-external-link-alt"></i></a>
													</span>
											}
										</h1>
										{this.props.article.tagline  
											&& <p className="lead" id="tagline">─{this.props.article.tagline}</p>
										}
										<p className="lead">{this.props.article.overview}</p>
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Info</p>
										<InfoCard {...this.props.article} />
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Crew</p>
										<CastList {...this.props.article.credits} />
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Video</p>
										{this.props.article.videos && <iframe width="90%" height="315" src={'https://www.youtube.com/embed/' + this.props.article.videos[0].key} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
									</div>
									<div className="col-12 section">
										<p className="lead text-white">Images</p>
										<ImageList backdrops={this.props.article.backdrops} />
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
	fetchArticle: (id, section) => dispatch(fetchArticle(id,section))
})


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);