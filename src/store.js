import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalog';
import articleReducer from './reducers/article';

export default () => {

  const reducers = combineReducers({
    catalog: catalogReducer,
    article: articleReducer
  })
  const store = createStore(reducers, applyMiddleware(thunk));

  return store;
}
