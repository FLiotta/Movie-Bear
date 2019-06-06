import {FETCH_ARTICLE, FETCH_CREDITS, FETCH_IMAGES, FETCH_VIDEOS, CLEAR} from '../actions/article';

const defaultState = {
	main: {
		isLoading: true,
		info: undefined
	},
	credits: {
		isLoading: true,
		info: undefined
	},
	images: {
		isLoading: true,
		info: undefined
	},
	videos: {
		isLoading: true,
		info: undefined
	}
};

export default (state = defaultState, action) => {
	switch(action.type){
		case FETCH_ARTICLE:
			return {
				...state,
				main: {
					isLoading: false, 
					info: action.payload
				}
			};
		case FETCH_CREDITS:
			return {
				...state,
				credits: {
					isLoading: false, 
					info: action.payload.cast
				}
			}
		case FETCH_IMAGES:
			return {
				...state,
				images: {
					isLoading: false, 
					info: action.payload.backdrops
				}
			}
		case FETCH_VIDEOS:
			return {
				...state,
				videos: {
					isLoading: false, 
					info: action.payload.results
				}
			}
		case CLEAR:
			return defaultState;
		default:
			return state;
	}
}