/**
 * Created by air on 2017/12/27.
 */
import React from 'react';
import AddTodo from './addtodo.js';
import TodoList from './todoList.js';

import './style.css';

export default () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    );
}