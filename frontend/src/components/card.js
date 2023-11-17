import React from 'react'
import Logo from '../images/bg.jpg'
export default function card(props) {
  return (
    <div class="col-md-3">
    <div class="card bg-light">
      <img src={Logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.des}</p>
      </div>
      <p>{props.category}</p>
    </div>
  </div>
    
  )
}
