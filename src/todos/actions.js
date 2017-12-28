/**
 * Created by air on 2017/12/26.
 */
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

//创建action对象

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text: text
});

export const toggleTodo = (id)=>({

    type:TOGGLE_TODO,
    id:id
});

export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    id:id
})