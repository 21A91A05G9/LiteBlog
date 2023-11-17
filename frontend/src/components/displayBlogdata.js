import React , {useEffect,useState} from 'react'
import axios from 'axios'
import Card from './card'
export default function DisplayBlogdata() {
    let [blogdata,setBlogdata] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5001/getBlogData').then((res)=>{ 
          setBlogdata(res.data.blogdata) 
          
      })
    },[])
  return (
    <div className='row'>
    <div ></div>
    {
         blogdata.map((e)=>{
            return(
            //    <h1>kkkkkkk</h1>
                <Card title={e.title} des={e.des}  category={e.category}/>
            )
         })
    }
    {/* <Card/> <Card/> <Card/> <Card/> */}
  </div>
  )
}
