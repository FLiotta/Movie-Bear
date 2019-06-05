import {FETCH_ARTICLE, FETCH_CREDITS, FETCH_IMAGES, FETCH_VIDEOS} from '../actions/article';

const defaultState = {};

export default (state = defaultState, action) => {
	switch(action.type){
		case FETCH_ARTICLE:
			return action.payload;
		case FETCH_CREDITS:
			return {
				...state,
				credits: action.payload
			}
		case FETCH_IMAGES:
			return {
				...state,
				posters: action.payload.posters,
				backdrops: action.payload.backdrops
			}
		case FETCH_VIDEOS:
			return {
				...state,
				videos: action.payload.results
			}
		default:
			return state;
	}
}