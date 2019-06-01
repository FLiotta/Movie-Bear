import {FETCH_MOVIES} from '../actions/MovieCatalog';

const defaultState = {
	actualPage: 0,
	movies: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
  	case FETCH_MOVIES:
  		return {
  			...state, 
  			actualPage: action.payload.page,
  			movies: state.movies.concat(action.payload.results) 
  		};
    default:
     	return state;
  }
}
