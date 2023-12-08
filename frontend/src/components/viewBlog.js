import React from 'react';
import { useLocation } from 'react-router-dom';
import UserNavbar from './userNavbar';
import SingleBlog from './singleBlog';
export default function ViewBlog({route,navigate}) {
  const location = useLocation()
  return (
    <div>
      <UserNavbar name={location.state.by} id={location.state.id}/>
      <div  className='container-fluid view-bg'>
      <SingleBlog image={location.state.image} des={location.state.des} title={location.state.title} by={location.state.by}/>
      </div>
      
    </div>
  );
}
