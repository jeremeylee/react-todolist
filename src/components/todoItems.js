import React from 'react'
import '../App.css';

const TodoItems = (props) => {
    return (
        <li onClick={props.function} className="list-group-item">
            {props.todo}
            <button class="btn btn-outline-dark" onClick={props.delete}>{props.labelDelete}</button>
            <button class="btn btn-outline-dark" onClick={props.edit}>{props.labelEdit}</button>
        </li>
    )
}

export default TodoItems