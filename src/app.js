import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux';
import configStore from './store';
import {fetchMovies} from './actions/MovieCatalog';
import {fetchGenres} from './actions/GenresList';
import './styles/main.scss';
import './helpers/helpers';

let store = configStore();

store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchGenres())
let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
