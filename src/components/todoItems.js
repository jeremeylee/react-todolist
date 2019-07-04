import React, { useState } from 'react'
import '../App.css';

const TodoItems = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleEnter = () => {
        setIsHovered(true)

    }

    const handleLeave = () => {
        setIsHovered(false)
    }

    const handleMouseDown = () => {
        setIsClicked(!isClicked)
    }


    return (
        <li 
            className="list-group-item"
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
            onMouseDown={() => handleMouseDown()}
        >
            {isClicked ? (<strike>{props.todo}</strike>) : props.todo}
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