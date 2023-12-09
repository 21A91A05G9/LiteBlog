import React from 'react'
import { Link } from 'react-router-dom'
export default function singleBlog(props) {
  return (
    <div className='row'>
    <div className='singleimg text-center col-md-5'> <img src={`http://localhost:5002/${props.image}`} alt="Photo" width="auto" height="303"/></div>
    <div className='col-md-6'>
        <h2 className=' '>{props.title}</h2>
        <div className='single-des'>{props.des}</div>
        <p className='single-para container mt-3'><i>writen by {props.by}</i></p>
        <p className='single-para container' style={{position:'relative',top:'-10px'}}><i>09/12/2023</i></p>
    </div>
    
    </div>
  )
}
