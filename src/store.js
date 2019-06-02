import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalog';
import genresListReducer from './reducers/GenresList';

export default () => {

  const reducers = combineReducers({
    catalog: catalogReducer,
    genreslist: genresListReducer
  })
  const store = createStore(reducers, applyMiddleware(thunk));

  return store;
}
