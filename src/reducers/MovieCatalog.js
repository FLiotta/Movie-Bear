import {FETCH_MOVIES, FETCH_HIGHLIGHT, SET_LOADING} from '../actions/MovieCatalog';

const defaultState = {
	actualPage: 0,
  total: 0,
	movies: [],
  highlight: undefined,
  isLoading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
  	case FETCH_MOVIES:
  		return {
  			...state, 
        isLoading: false,
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
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
     	return state;
  }
}
