import React from 'react'
import Logo from '../images/logo.png'
import Sidebar from './sidebar'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHomeUser,faUser,faCamera} from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <>
    <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <button class="btn btn-sm sidebtn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> 
          <img src={Logo} alt="Logo" height={20} width={25} />   </button> &nbsp;
          BlogLite
        </a>
        <p className=" d-flex">

        
        <Link to='/createblog'><button  type="submit" className='btn-sm btn d-flex mx-3'>create New Blog</button></Link>
        <Link to='/register'><button className="btn btn-sm d-flex" type="submit mx-3">SIGN IN</button></Link>
        </p>
        
      </div>
    </nav>
    <Sidebar/>
    </div>
    </>
  )
}
