import {API} from '../config';

export const FETCH_GENRES = "FETCH_GENRES";

export const fetchGenres = () => {
	return dispatch => {
		fetch(`${API.URL}/genre/movie/list?api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(list => dispatch({
				type: FETCH_GENRES,
				payload: list.genres
			}))
	}
}