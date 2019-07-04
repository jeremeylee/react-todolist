import React from 'react'
import '../App.css';

const Form = (props) => {
  
  return (
      <form onSubmit={props.onSubmit}>
      <div className="input-group mb-3">
        <input
          value={props.value}
          onChange={props.onChange}
          placeholder="What do you need to do?"
          className="form-control"
          aria-describedby="button-addon"
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" id="button-addon" type="submit">{props.buttonText}</button>
        </div>
      </div>
    </form>
  )
  
}
export default Form