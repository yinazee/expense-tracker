import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'redux-redux'


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDom.render(
  <Provider store={myStore}>
    <App />
  </Provider>,

  document.getElementById('root')
)
