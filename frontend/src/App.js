import React from 'react'
import './App.css'
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Sidebar from './components/sidebar';
import Createblog from './components/createblog';
export default function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      {/* <Createblog/> */}
        
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createblog' element={<Createblog/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}
