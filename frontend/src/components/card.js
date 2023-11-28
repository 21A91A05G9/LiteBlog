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
    
    <div class="col-md-3 ">
      <article class="card cards">
  <img
    class="card__background"
    src={Logo}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h4 class="card__title ">{props.title}</h4>
      <p class="card__description ">
      {Text(props.des, 50)}
      </p>
      <div className='row'><p className='col-md-11'>written by-<br/>{props.by}</p></div>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    {/* <div class="card bg-light cards" >
      <img src={Logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{Text(props.des, 50)}</p>
      </div>
      <div className='row'><p className='col-md-2'><Like title={props.title} des={props.des} by={props.by} category={props.category} state={props.state} /></p><p className='col-md-9'>{props.category}</p></div>
      <div className='row'><p className='col-md-11'>by &nbsp;{props.by}</p></div>
      
      
    </div> */}
  </div>
    
  )
}
