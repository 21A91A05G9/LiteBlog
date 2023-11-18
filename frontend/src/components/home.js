import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Card from './card'
import DisplayBlogdata from './displayBlogdata'
export default function Home() {
  
  return (
    <div>
        <div >
        
          <Navbar/>
          <div className='container-fluid'>
            <div className='text-center my-4'>
              <input class=" me-2" type="search" placeholder="Search by Category" size={25} aria-label="Search"/>
              <button class="btn btn-light search" type="submit">Search</button>
            </div> 
            <DisplayBlogdata/>
            
          </div>
        </div>
    </div>
  )
}
