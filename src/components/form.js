import React from 'react'

const Form = (props) => 
    <form onSubmit={props.onSubmit}>
    Enter something todo:
    <input
      value={props.value}
      onChange={props.onChange}
    />
    <button type="submit">{props.buttonText}</button>
  </form>
  
export default Form