import {FETCH_MOVIE, FETCH_MOVIE_CREDITS, FETCH_MOVIE_IMAGES, FETCH_MOVIE_VIDEOS} from '../actions/article';

const defaultState = {};

export default (state = defaultState, action) => {
	switch(action.type){
		case FETCH_MOVIE:
			return action.payload;
		case FETCH_MOVIE_CREDITS:
			return {
				...state,
				credits: action.payload
			}
		case FETCH_MOVIE_IMAGES:
			return {
				...state,
				posters: action.payload.posters,
				backdrops: action.payload.backdrops
			}
		case FETCH_MOVIE_VIDEOS:
			return {
				...state,
				videos: action.payload.results
			}
		default:
			return state;
	}
}