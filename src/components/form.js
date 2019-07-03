import React from 'react'
import '../App.css';

const Form = (props) => {
  
  return (
      <form onSubmit={props.onSubmit}>
      <div class="input-group mb-3">
        <input
          value={props.value}
          onChange={props.onChange}
          placeholder="What do you need to do?"
          class="form-control"
          aria-describedby="button-addon"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" id="button-addon" type="submit">{props.buttonText}</button>
        </div>
      </div>
    </form>
  )
  
}
export default Form