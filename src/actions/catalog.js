import {API} from '../config';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_HIGHLIGHT = "FETCH_HIGHLIGHT";
export const FETCH_SERIES = "FETCH_SERIES";
export const SET_LOADING = "SET_LOADING";
export const CLEAR = "CLEAR";

export const clear = () => {
	return dispatch => dispatch({
		type: CLEAR
	})
}

export const fetchMovies = (params = {}) => {
	return async (dispatch,getState) => {
		const state = getState();
		const config = {
			page: params.page ? params.page : state.catalog.actualPage + 1,
			sort_by: params.sort_by ? params.sort_by : 'popularity.desc'
		}

		dispatch({type: SET_LOADING})

		await fetch(`${API.URL}/discover/movie?page=${config.page}&api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(movielist => {
				dispatch({
					type: FETCH_MOVIES,
					payload: movielist
				})
			})
	}
}

export const fetchSeries = (params = {}) => {
	return async (dispatch, getState) => {
		const state = getState();
		const config = {
			page: params.page ? params.page : state.catalog.actualPage + 1,
			sort_by: params.sort_by ? params.sort_by : 'popularity.desc'
		}

		dispatch({type: SET_LOADING});

		await fetch(`${API.URL}/discover/tv?page=${config.page}&language=en-US&api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(serieslist => {
				dispatch({
					type: FETCH_SERIES,
					payload: serieslist
				})
			})
	}
}

export const fetchHighlight = () => {
	return (dispatch, getState) => {
		const catalog = getState().catalog.results;
		const newHighlight = catalog[Math.floor(Math.random() * catalog.length) + 0];
		
		dispatch({
			type: FETCH_HIGHLIGHT,
			payload: newHighlight
		})
	}
}

export const setLoading = () => {
	return dispatch => dispatch({
		type: SET_LOADING
	})
}