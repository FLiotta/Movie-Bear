import {FETCH_MOVIES, FETCH_HIGHLIGHT} from '../actions/MovieCatalog';

const defaultState = {
	actualPage: 0,
  total: 0,
	movies: [],
  highlight: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
  	case FETCH_MOVIES:
  		return {
  			...state, 
        total: state.total + action.payload.results.length,
  			actualPage: action.payload.page,
  			movies: state.movies.concat(action.payload.results),
        highlight: state.highlight ? state.highlight : action.payload.results[Math.floor(Math.random() * action.payload.results.length) + 0]
  		};
    case FETCH_HIGHLIGHT:
      return {
        ...state,
        highlight: action.payload
      }
    default:
     	return state;
  }
}
