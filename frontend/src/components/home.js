import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Card from './card'
import DisplayBlogdata from './displayBlogdata'
import axios from 'axios'
export default function Home() {
  const [searchResult,setSearchResult] = useState([]);
  const [key,setKey] = useState("");
  useEffect(()=>{
    axios.get('http://localhost:5001/getSearchData', { params:{key:key} }).then((res)=>{ 
        setSearchResult(res.data.searchdata) 
        console.log(searchResult)
    })
  },[key])
  const search = () => {
      console.log(key)
  }
  return (
    <div>
        <div >
          
          <Navbar/>
          <div className='container-fluid'>
            <div className='text-center my-4'>
              <input class=" me-2" type="search" placeholder="Search by Category" value={key} onChange={(e)=>{setKey(e.target.value)}} size={25} aria-label="Search"/>
              <button class="btn btn-light search" onClick={search} type="submit">Search</button>
            </div> 
            
            {searchResult && searchResult != "" ?
              (<div className='row'>
              <div ><h2 className='mx-4'>Looking Result for "{key}"</h2></div>
              {
                  searchResult.map((e,i)=>{
                      return(
                          <Card title={e.title} des={e.des}  category={e.category}/>
                      )
                  })
              }
              </div>)
              : <DisplayBlogdata />}

          </div>
        </div>
    </div>
  )
}
