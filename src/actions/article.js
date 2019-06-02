import {API} from '../config';

export const FETCH_MOVIE = "FETCH_MOVIE",
	 		 FETCH_MOVIE_CREDITS = "FETCH_MOVIE_CREDITS",
	 		 FETCH_MOVIE_IMAGES = "FETCH_MOVIE_IMAGES",
	 		 FETCH_MOVIE_VIDEOS = "FETCH_MOVIE_VIDEOS";

export const fetchMovie = (id) => {
	return dispatch => {
		fetch(`${API.URL}/movie/${id}?api_key=${API.API_KEY}&language=en-US`)
			.then(response => response.json())
			.then(movie => {
				dispatch({
					type: FETCH_MOVIE,
					payload: movie
				})

				dispatch(fetchCredits(id))
				dispatch(fetchImages(id));
				dispatch(fetchVideos(id))
			})
	}
} 

export const fetchCredits = (id) => {
	return dispatch => {
		fetch(`${API.URL}/movie/${id}/credits?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(credits => {
				dispatch({
					type: FETCH_MOVIE_CREDITS,
					payload: credits
				})
			})
	}
}

export const fetchImages = (id) => {
	return dispatch => {
		fetch(`${API.URL}/movie/${id}/images?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(images => {
				dispatch({
					type: FETCH_MOVIE_IMAGES,
					payload: images
				})
			})
	}
}

export const fetchVideos = (id) => {
	return dispatch => {
		fetch(`${API.URL}/movie/${id}/videos?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(videos => {
				dispatch({
					type: FETCH_MOVIE_VIDEOS,
					payload: videos
				})
			})
	}
}