import {FETCH_MOVIES, FETCH_HIGHLIGHT, FETCH_SERIES, SET_LOADING, CLEAR} from '../actions/catalog';

const defaultState = {
	actualPage: 0,
  total: 0,
	results: [],
  highlight: undefined,
  isLoading: false,
  section: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
  	case FETCH_MOVIES:
  		return {
  			...state, 
        isLoading: false,
        total: state.total + action.payload.results.length,
  			actualPage: action.payload.page,
        section: "movies",
  			results: state.section != "movies" ? action.payload.results : state.results.concat(action.payload.results),
        highlight: state.highlight && state.section == "movies" ? state.highlight : action.payload.results[Math.floor(Math.random() * action.payload.results.length) + 0]
  		};
    case FETCH_HIGHLIGHT:
      return {
        ...state,
        highlight: action.payload
      }
    case FETCH_SERIES:
      return {
        ...state,
        section: "tv",
        isLoading: false,
        total: state.total + action.payload.results.length,
        actualPage: action.payload.page,
        results: state.section != "tv" ? action.payload.results : state.results.concat(action.payload.results),
        highlight: state.highlight && state.section == "tv" ? state.highlight : action.payload.results[Math.floor(Math.random() * action.payload.results.length) + 0]
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case CLEAR:
      return defaultState      
    default:
     	return state;
  }
}
