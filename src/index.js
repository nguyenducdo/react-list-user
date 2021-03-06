import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from "./reducers/RootReducer";

const InitialState = {};
// Create store
const store = createStore(RootReducer, InitialState);

const AppRoot = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    AppRoot,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
