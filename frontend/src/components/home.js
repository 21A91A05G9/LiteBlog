import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'//
import SingleBlog from './singleBlog'
import Navbar from './navbar'
import UserNavbar from './userNavbar'
import Card from './card'
import DisplayBlogdata from './displayBlogdata'
import Sidebar from './sidebar'


export default function Home() {
  const [searchResult,setSearchResult] = useState([]);
  const [key,setKey] = useState("");
  const [txt,settxt] = useState("")
  const [usr,setUsr] = useState(undefined)
  const {id} = useParams();
  const [category,setCategory] = useState("")
  let [blogdata,setBlogdata] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5002/getBlogData').then((res)=>{ 
          setBlogdata(res.data.blogdata) 
          
      })
    },[])
  useEffect(()=>{
    if(id!=undefined){
      axios.get('http://localhost:5002/getuser/'+id).then((res) => {
        setUsr(res.data.userName)
      })}
    console.log("user",usr)  
  },[id])
  
 
  useEffect(()=>{
    axios.get('http://localhost:5002/getSearchData', { params:{key:key} }).then((res)=>{ 
        setSearchResult(res.data.searchdata) 
        console.log(searchResult)
        settxt(`Looking result for "${key}"`)
    })
  },[key])

  useEffect(()=>{
    console.log(category)
    axios.get('http://localhost:5002/getCategory', { params:{key:category} }).then((res)=>{ 
        setSearchResult(res.data.categoryData)
        settxt(`${category}  Blogs`)
    })
  },[category])

  return (
    <div>          
       
        {
          usr? <UserNavbar name={usr} id={id}/> : <Navbar/>
        }
        
        <div className='' style={{backgroundColor:'#d6cfbf'}}>
              <SingleBlog/>
          
             {/* <div class="offcanvas offcanvas-start sidebar show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">      
            <div class="offcanvas-body">
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Art")}  className='category'>Art</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Business")}  className='category'>Business</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Education")}  className='category'>Education</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Music")}  className='category'>Music</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Sports")}  className='category'>Sports</p></button>
              
            </div>
            </div>
            <button class="btn categoryHead col-md-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> Categories</button> */}
           {
           blogdata.slice(0,1).map((e,i)=>{
            return(
                <div className='container-fluid py-5'>
                     {/* <div className='title-search text-center row pb-3'>
                      <h2 className='col-md-6 '>{e.title}</h2>
                     <div className=' col-md-4'>
                        <input class=" search col-11 " type="search bg-secondary" placeholder="Search by name or title" value={key} onChange={(e)=>{setKey(e.target.value)}} aria-label="Search"/>
                      </div> 
                      </div> */}

                      <div className='row'>
                      <div className='sigleimg text-center col-md-5'> <img src={`http://localhost:5002/${e.image}`} alt="Photo" width="auto" height="303"/></div>
                      <div className='col-md-6'>
                          <h2 className=' '>{e.title}</h2>
                          <div className='single-des'>{e.des}</div>
                      </div>
                      </div>
                </div>
            )
         })
          } 
        </div>
        <div className='container-fluid' style={{backgroundColor:'#c4b3a9'}}>
            <div className='row py-5 '>
             
              <div className=' col-md-6 categoryHead'>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("All")}  className='category'>All</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Art")}  className='category'>Art</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Business")}  className='category'>Business</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Education")}  className='category'>Education</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Music")}  className='category'>Music</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("Sports")}  className='category'>Sports</p></button>
                <button className='categoryBtn btn'><p onClick={()=>setCategory("")}  className='category'>x</p></button>
              </div>
              <div className=' text-center col-md-4'>
                <input class=" search col-12 my-2" type="search bg-secondary" placeholder="Search by name or title" value={key} onChange={(e)=>{setKey(e.target.value)}} aria-label="Search"/>
              </div>

            </div>
            
            <div className='container'>
            {
              searchResult ?
              (<div className='row'>
              <div ><h2 className='mx-4'>{txt}</h2></div>
              <hr></hr>
              { 
                searchResult.length === 0 ? <div className='NoBlog'>No Available Blogs</div> :
                searchResult.slice(0,4).map((e,i)=>{
                      return(
                          <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                      )
                  })
              }
              </div>)
              : <></>
            }
            <DisplayBlogdata id={id}/>
            </div>
            </div>
         
        
    </div>
  )
}
