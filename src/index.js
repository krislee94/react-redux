import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Store';
import TodoApp from './TodoApp'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
