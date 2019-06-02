import React from 'react';

export default (props) => (
	<div className="container animated fadeIn" id="about">		
		<div className="row justify-content-center">
			<div className="col-10">
				<h1 className="display-4 text-left text-white">About</h1>
				<div className="row justify-content-center">
					<div className="col-12 section">
						<div className="row justify-content-center">
							<div className="col-12 col-md-8">
								<p className="text-white lead text-left">											
									This site was made by <a href="https://www.github.com/FLiotta" target="_blank">@FLiotta</a> using The Movie Database's API, All the data is provided by them, you can read more about their api and the services they provide <a href="https://www.themoviedb.org/documentation/api" target="_blank">here</a>.
								</p>
							</div>
							<div className="col-12 col-md-4">
								<img 
									src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg"
									className="d-block mx-auto" 
									alt="themoviedatabase logo"
									width="25%" 
								/>
							</div>
						</div>
					</div>
					<div className="col-12 section">
						<div className="row justify-content-center">
							<div className="col-12 col-md-8">
								<p className="text-white lead text-left">			
									The technologies used on this website are React,Redux,Sass and Webpack, if you want to check the source code, its avaible on it's <a href="https://www.github.com/fliotta" target="_blank">github repository <i class="fab fa-github-alt"></i></a>.
								</p>
							</div>
							<div className="col-12 col-md-4">
								<img src="/images/stack.svg" className="d-block mx-auto img-fluid" alt="stack" />
							</div>
						</div>
					</div>
					<div className="col-5 col-md-4 col-lg-2 section">
						<img src="/images/logo.png" id="about_logo" className="d-block mx-auto img-fluid" alt="logo"/>
					</div>
				</div>
			</div>
		</div>
	</div>
)