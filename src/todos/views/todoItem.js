/**
 * Created by air on 2017/12/27.
 */
import React, {PropTypes} from 'react';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li
            className="todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    )
}



export default TodoItem;
