import { param } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserNavbar from './userNavbar';
import axios from 'axios';

export default function Profile() {
    const { id } = useParams();
    const [name,setName] = useState("")
    const [userBlogs,setUserBlogs] = useState([])
    useEffect(()=>{
        axios.get('/getuserblogs/'+id).then((res)=>{
            setUserBlogs(res.data.userBlogs)
            setName(res.data.name)
        })
       
    },[id])
    
  return (
    <>
    <UserNavbar id={id} name={name} />
    <div className='' style={{backgroundColor:'#d6cfbf',height:'90vh'}}>
        
    </div>
    </>
  )
}
