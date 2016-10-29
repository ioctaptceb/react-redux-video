import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

const initialState = {};

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer, initialState);
console.log(store);

render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root')
);

