import {API} from '../config';

export const FETCH_ARTICLE = "FETCH_ARTICLE",
	 		 FETCH_CREDITS = "FETCH_CREDITS",
	 		 FETCH_IMAGES = "FETCH_IMAGES",
	 		 FETCH_VIDEOS = "FETCH_VIDEOS",
	 		 CLEAR = "CLEAR";

export const fetchArticle = (id, section) => {
	return dispatch => {
		fetch(`${API.URL}/${section}/${id}?api_key=${API.API_KEY}&language=en-US`)
			.then(response => {
				if(response.status == 200)
					return response.json();
				return {status: response.status}
			})
			.then(payload => {
				dispatch({
					type: FETCH_ARTICLE,
					payload
				})

				if(payload.id){
					dispatch(fetchCredits(id, section))
					dispatch(fetchImages(id, section));
					dispatch(fetchVideos(id, section))
				}
			})
	}
} 

export const clear = () => {
	return dispatch => dispatch({
		type: CLEAR
	})
}

export const fetchCredits = (id, section) => {
	return dispatch => {
		fetch(`${API.URL}/${section}/${id}/credits?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(credits => {
				dispatch({
					type: FETCH_CREDITS,
					payload: credits
				})
			})
	}
}

export const fetchImages = (id, section) => {
	return dispatch => {
		fetch(`${API.URL}/${section}/${id}/images?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(images => {
				dispatch({
					type: FETCH_IMAGES,
					payload: images
				})
			})
	}
}

export const fetchVideos = (id, section) => {
	return dispatch => {
		fetch(`${API.URL}/${section}/${id}/videos?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(videos => {
				dispatch({
					type: FETCH_VIDEOS,
					payload: videos
				})
			})
	}
}