import React from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';


import './index.css';
import App from './App';


//Configuration of the redux and the middlewares
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from  'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './main/reducers';

//Enable the chome extension to debug 
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// TODO: Criar os snipts de acordo com as estruturas básicas para o desenvolimento