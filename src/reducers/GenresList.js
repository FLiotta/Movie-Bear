import {FETCH_GENRES} from '../actions/GenresList';

const defaultState = {};

export default (state = defaultState, action) => {
	switch(action.type){
		case FETCH_GENRES:
			return action.payload;
		default:
			return state;
	}
}