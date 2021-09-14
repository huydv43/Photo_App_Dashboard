import App from 'App';
import 'assets/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
    ,document.getElementById('root')
);
