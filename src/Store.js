/**
 * Created by air on 2017/12/26.
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);