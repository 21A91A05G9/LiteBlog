import React from 'react'
import Logo from '../images/bg.jpg'
import Like from './like'

export default function card(props) {

  function Text(text, limit) {
    if (text.length <= limit) {
      return text;
    } 
    else {
      return text.slice(0, limit) + "...";
    }
  }
  return (
    <div class="col-md-4 col-lg-3">
    <div class="card bg-light cards" >
      <img src={Logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{Text(props.des, 50)}</p>
      </div>
      <div className='row'><p className='col-md-2'><Like title={props.title} des={props.des} by={props.by} category={props.category} state={props.state} /></p><p className='col-md-9'>{props.category}</p></div>
      <div className='row'><p className='col-md-11'>by &nbsp;{props.by}</p></div>
      
      
    </div>
  </div>
    
  )
}
