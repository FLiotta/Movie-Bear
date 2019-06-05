import {FETCH_CATALOG, FETCH_HIGHLIGHT, SET_LOADING, CLEAR} from '../actions/catalog';

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
  	case FETCH_CATALOG:
  		return {
  			...state, 
        isLoading: false,
        total: state.total + action.payload.catalog.results.length,
  			actualPage: action.payload.catalog.page,
        section: action.payload.section,
  			results: action.payload.section != state.section ? action.payload.catalog.results : state.results.concat(action.payload.catalog.results),
        highlight: state.highlight ? state.highlight : action.payload.catalog.results[Math.floor(Math.random() * action.payload.catalog.results.length) + 0]
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
    case CLEAR:
      return defaultState      
    default:
     	return state;
  }
}
