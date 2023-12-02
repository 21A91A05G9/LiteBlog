import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import UserNavbar from './userNavbar'
import { useParams } from 'react-router-dom'
import Card from './card'
import DisplayBlogdata from './displayBlogdata'
import axios from 'axios'

export default function Home() {
  const [searchResult,setSearchResult] = useState([]);
  const [key,setKey] = useState("");
  const [txt,settxt] = useState("")
  const [usr,setUsr] = useState(undefined)
  const {id} = useParams();
  console.log("id",id)
  
  if(id!=undefined){
  axios.get('http://localhost:5001/getuser/'+id).then((res) => {
    setUsr(res.data.userName)
  })}
 
  useEffect(()=>{
    axios.get('http://localhost:5001/getSearchData', { params:{key:key} }).then((res)=>{ 
        setSearchResult(res.data.searchdata) 
        console.log(searchResult)
        settxt(`Looking result for "${key}"`)
    })
  },[key])

  const [category,setCategory] = useState("");
  useEffect(()=>{
    console.log(category)
    axios.get('http://localhost:5001/getCategory', { params:{key:category} }).then((res)=>{ 
        setSearchResult(res.data.categoryData)
        settxt(`${category}  Blogs`)
    })
  },[category])

  const search = () => {
      axios.get('http://localhost:5001/getSearchData', { params:{key:key} }).then((res)=>{ 
      setSearchResult(res.data.searchdata) 
      console.log(searchResult)
      settxt(`Looking result for "${key}"`)
  })    
  }
  console.log("user",usr)

  return (
    <div>          
       
        {
          
          usr? <UserNavbar name={usr} id={id}/> : <Navbar/>
        }
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1'>
          <button class="btn categoryHead " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> Categories</button>
          <div class="offcanvas offcanvas-start sidebar show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">      
          {/* <button type="button" className='btn' data-bs-dismiss="offcanvas" aria-label="Close">close</button> */}
          <div class="offcanvas-body col">
              <button className='row categoryRow btn'><p onClick={()=>setCategory("Art")}  className='category'>Art</p></button>
              <button className='row categoryRow btn'><p onClick={()=>setCategory("Business")}  className='category'>Business</p></button>
              <button className='row categoryRow btn'><p onClick={()=>setCategory("Education")}  className='category'>Education</p></button>
              <button className='row categoryRow btn'><p onClick={()=>setCategory("Music")}  className='category'>Music</p></button>
              <button className='row categoryRow btn'><p onClick={()=>setCategory("Sports")}  className='category'>Sports</p></button>
            
          </div>
          </div>
        </div>


            <div className='col-md-11'>
              <div className='text-center my-4'>
                <input class=" me-2" type="search bg-secondary" placeholder="Search by Category" value={key} onChange={(e)=>{setKey(e.target.value)}} size={25} aria-label="Search"/>
                <button class="btn btn-secondary search" onClick={search} type="submit">Search</button>
              </div> 
              
              {
                searchResult ?
                (<div className='row'>
                
                <div ><h2 className='mx-4'>{txt}</h2></div>
                {
                    searchResult.map((e,i)=>{
                        return(
                            <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} e={e.image}/>
                        )
                    })
                }
                </div>)
                : <DisplayBlogdata id={id}/>
              }
            </div>
          </div>
        </div>
    </div>
  )
}
