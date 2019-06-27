import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.function}>{props.label}</button>
    )
}

export default Button