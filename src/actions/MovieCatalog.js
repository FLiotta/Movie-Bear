import {API} from '../config';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_HIGHLIGHT = "FETCH_HIGHLIGHT";

export const fetchMovies = (params = {}) => {
	return async (dispatch,getState) => {

		const config = {
			page: params.page ? params.page : getState().moviecatalog.actualPage + 1,
			sort_by: params.sort_by ? params.sort_by : 'popularity.desc'
		}

		await fetch(`${API.URL}/discover/movie?sort_by=${config.sort_by}&page=${config.page}&api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(movielist => {
				dispatch({
					type: FETCH_MOVIES,
					payload: movielist
				})
			})
	}
}

export const fetchHighlight = () => {
	return (dispatch, getState) => {
		const catalog = getState().moviecatalog.movies;
		const newHighlight = catalog[Math.floor(Math.random() * catalog.length) + 0];
		
		dispatch({
			type: FETCH_HIGHLIGHT,
			payload: newHighlight
		})
	}
}