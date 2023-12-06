import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleBlog from './singleBlog';
export default function ViewBlog({route,navigate}) {
  const location = useLocation()
  return (
    <div>
      <div className='container-fluid view-bg'>
        <h2 className='text-center'>{location.state.title}</h2>
        <img className='offset-5 col-2 viewmg' src={`http://localhost:5002/${location.state.image}`}  />
        <div className='offset-3 col-6 single-des' >{location.state.des}</div>
      </div>
    </div>
  );
}
