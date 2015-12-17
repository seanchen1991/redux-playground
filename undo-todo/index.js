import React from 'react';
import todoApp from './reducers';
import App from './containers/App';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(todoApp);

const container = document.getElementById('container');
render(
    <Provider store={store}>
        <App />
    <Provider>,
    container
);
