import {API} from '../config';

export const 	FETCH_CATALOG = "FETCH_CATALOG",
				FETCH_HIGHLIGHT = "FETCH_HIGHLIGHT",
				SET_LOADING = "SET_LOADING",
				CLEAR = "CLEAR";

export const clear = () => {
	return dispatch => dispatch({
		type: CLEAR
	})
}

export const fetchCatalog = (params = {}) => {
	return (dispatch,getState) => {
		const state = getState();
		const config = {
			section: params.section,
			page: params.page ? params.page : state.catalog.actualPage + 1,
			sort_by: params.sort_by ? params.sort_by : 'popularity.desc'
		}

		dispatch({type: SET_LOADING})

		fetch(`${API.URL}/discover/${config.section}?page=${config.page}&api_key=${API.API_KEY}`)
			.then(response => response.json())
			.then(catalogList => {
				dispatch({
					type: FETCH_CATALOG,
					payload: {
						catalog: catalogList,
						section: config.section
					}
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