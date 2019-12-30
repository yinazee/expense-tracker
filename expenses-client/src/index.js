import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'redux-redux'


import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
