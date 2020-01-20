import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import accountReducer from './reducers/accountReducer'


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let myStore = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={myStore}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'))
