import React, { useState } from 'react'
import '../App.css';

const TodoItems = (props) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleEnter = () => {
        setIsHovered(true)

    }

    const handleLeave = () => {
        setIsHovered(false)
    }
    return (
        <li 
            onClick={props.select} 
            className="list-group-item"
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
        >
            {props.todo}
            {isHovered ? (<button className="btn btn-outline-dark" onClick={props.delete}>{props.labelDelete}</button>) : (
                <div></div>
            )}
                      
            {isHovered ? (<button className="btn btn-outline-dark" onClick={props.edit}>{props.labelEdit}</button>) : (
                <div></div>
            )}
                
        </li>   
    )
}

export default TodoItems