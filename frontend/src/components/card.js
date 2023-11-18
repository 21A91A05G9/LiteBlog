import React from 'react'
import Logo from '../images/bg.jpg'
import Like from './like'

export default function card(props) {
  return (
    <div class="col-md-4 col-lg-3">
    <div class="card bg-light">
      <img src={Logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.des}</p>
      </div>
      <p className=''>{props.category}</p>
      
    </div>
  </div>
    
  )
}
