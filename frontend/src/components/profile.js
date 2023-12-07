import { param } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserNavbar from './userNavbar';
import axios from 'axios';
import Card from './card';
export default function Profile() {
    const { id } = useParams();
    const [name,setName] = useState("user")
    const [userBlogs,setUserBlogs] = useState(undefined)
    const [artBlogs,setArtBlogs] = useState([])
    const [educationBlogs,setEducationBlogs] = useState([])
    const [musicBlogs,setMusicBlogs] = useState([])
    const [sportBlogs,setSportBlogs] = useState([])
    const [businessBlogs,setBusinessBlogs] = useState([])
    
    useEffect(()=>{
      if(id!==undefined){
        axios.get('http://localhost:5002/getuserblogs/'+id).then((res)=>{
          setName(res.data.Name)
          setUserBlogs(res.data.userblogs)
          setMusicBlogs(res.data.musicblogs)
          setArtBlogs(res.data.artblogs)
          setBusinessBlogs(res.data.businessblogs)
          setSportBlogs(res.data.sportblogs)
          setEducationBlogs(res.data.educationblogs)
          console.log(userBlogs)
        })
      }
    },[id])

  return (
    <>
    <UserNavbar id={id} name={name} />
    <div className='profileBlog' style={{backgroundColor:'#d6cfbf'}}>
       <h2></h2>
        <div className='container '>
            
            {
              userBlogs && userBlogs.length!==0?<div className='row'><h2>All Blogs</h2>
                 {
                  userBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
             
              </div>: <>No blogs are there..!</>
            }
           
            <br></br>
            {
              artBlogs && artBlogs.length!==0?<div className='row'><h2>Art Blogs</h2>
                 {
                  artBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
             
              </div>: <></>
            }
           
            <br></br>
            {
              musicBlogs && musicBlogs.length!==0?<div className='row'><h2>Music Blogs</h2>
                 {
                  musicBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
             
              </div>: <></>
            }
      
            <br></br>
            {
              sportBlogs && sportBlogs.length!==0?<div className='row'><h2>Sport Blogs</h2>
                 {
                  sportBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
           
              </div>: <></>
            }
             
            <br></br>
            {
              educationBlogs && educationBlogs.length!==0?<div className='row'><h2>Education Blogs</h2>
                 {
                  educationBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
              
             
              </div>: <></>
            }
            <br></br>
            {
              businessBlogs && businessBlogs.length!==0?<div className='row'><h2>Business Blogs</h2>
                 {
                  businessBlogs.map((e)=>{
                    return(
                      <Card title={e.title} des={e.des} state={e.state} category={e.category} by={e.by} id={id} image={e.image}/>
                    )
                  })
                 }
              </div>: <></>
            }
        </div>
    </div>
    </>
  )
}
