import React from 'react'
import Button from './button'

const TodoItems = (props) => {
    return (
        <li>
            {props.todo}
            <button onClick={props.delete}>{props.labelDelete}</button>
            <button onClick={props.edit}>{props.labelEdit}</button>
        </li>
    )
}

export default TodoItems