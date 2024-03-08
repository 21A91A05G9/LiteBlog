import React from 'react'
// import Logo from '../images/BL.jpg'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faHomeUser,faUser,faCamera} from '@fortawesome/free-solid-svg-icons'
export default function UserNavbar(props) {
  
  return (
    <>
    <div>
<<<<<<< HEAD
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
=======
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
>>>>>>> 6b9b978d5477e6cc07086e79f136e3980416940c
         
          {/* <img src={Logo} alt="Logo" height={20} width={20} />    &nbsp; */}
          <span style={{color:'#f6efe0'}}><span style={{color:"var(--brand-color)"}}>B</span>logLite</span>
        </a>
        <p className=" d-flex">

        
        <Link to={'/createblog/'+props.id}><button  type="submit" className='btn-sm  d-flex mx-3'>Create New Blog</button></Link>
       
<<<<<<< HEAD
        <div className="dropdown">
          <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
          </button>
          <ul className="dropdown-menu">
            
            <Link to={'/profile/'+props.id}><li  className='dropdown-item'>Profile</li></Link>
            <Link to={'/'+props.id}><li className="dropdown-item">Home</li></Link>
            {/* <Link to='/'><li className="dropdown-item">SIGN OUT</li></Link> */}
=======
        <div class="dropdown">
          <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
          </button>
          <ul class="dropdown-menu">
            
            <Link to={'/profile/'+props.id}><li  className='dropdown-item'>Profile</li></Link>
            <Link to={'/'+props.id}><li class="dropdown-item">Home</li></Link>
            {/* <Link to='/'><li class="dropdown-item">SIGN OUT</li></Link> */}
>>>>>>> 6b9b978d5477e6cc07086e79f136e3980416940c
          </ul>
        </div>
        </p>
        
      </div>
    </nav>
    </div>
    </>
  )
}
