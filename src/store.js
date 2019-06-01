import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import movieCatalogReducer from './reducers/MovieCatalog';
import genresListReducer from './reducers/GenresList';

export default () => {

  const reducers = combineReducers({
    moviecatalog: movieCatalogReducer,
    genreslist: genresListReducer
  })
  const store = createStore(reducers, applyMiddleware(thunk));

  return store;
}
