import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

const store = createStore(todoApp);

const container = document.getElementById('container');
render(
    <Provider store={store}>
        <App />
    <Provider>,
    container
);
