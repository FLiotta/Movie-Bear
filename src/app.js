import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux';
import configStore from './store';
import './styles/main.scss';
import './helpers/helpers';

const store = configStore();

ReactDOM.render(
	<Provider store={store}><AppRouter /></Provider>
	,document.getElementById('app')
);
