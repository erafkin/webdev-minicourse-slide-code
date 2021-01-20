import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
// import App from './App';
import Friend from './friend'
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
 applyMiddleware(thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));
ReactDOM.render(
 <Provider store={store}>
   <Friend />
 </Provider>,
 document.getElementById('root'),
);


