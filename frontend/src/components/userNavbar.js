import React from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHomeUser,faUser,faCamera} from '@fortawesome/free-solid-svg-icons'
export default function UserNavbar(props) {
  
  return (
    <>
    <div>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
         
          <img src={Logo} alt="Logo" height={20} width={25} />    &nbsp;
          <span>BlogLite</span>
        </a>
        <p className=" d-flex">

        
        <Link to={'/createblog/'+props.id}><button  type="submit" className='btn-sm  d-flex mx-3'>Create New Blog</button></Link>
       
        <div class="dropdown">
          <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
          </button>
          <ul class="dropdown-menu">
            <Link to='/'><li class="dropdown-item">SIGN OUT</li></Link>
            <Link to={'/profile/'+props.id}><li  className='dropdown-item'>Profile</li></Link>
       
          </ul>
        </div>
        </p>
        
      </div>
    </nav>
    </div>
    </>
  )
}
