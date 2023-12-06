import React from 'react'

export default function singleBlog(props) {
  return (
    <div className='row'>
    <div className='sigleimg text-center col-md-5'> <img src={`http://localhost:5002/${props.image}`} alt="Photo" width="auto" height="303"/></div>
    <div className='col-md-6'>
        <h2 className=' '>{props.title}</h2>
        <div className='single-des'>{props.des}</div>
    </div>
    </div>
  )
}
