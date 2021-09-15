import App from 'App';
import 'utils/scss/index.scss';
import 'utils/css/grid.css';
import 'antd/dist/antd.css';
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
