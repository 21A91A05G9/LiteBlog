import React , {useEffect,useState} from 'react'
import axios from 'axios'
import Card from './card'
export default function DisplayBlogdata() {
    function Text(text, limit) {
      if (text.length <= limit) {
        return text;
      } 
      else {
        return text.slice(0, limit) + "...";
      }
    }
    let [blogdata,setBlogdata] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5001/getBlogData').then((res)=>{ 
          setBlogdata(res.data.blogdata) 
          
      })
    },[])
  return (
    <div className='row'>
    <div ><h2 className='mx-4'>Trending Blogs...!</h2></div>
    {
         blogdata.slice(0,4).map((e,i)=>{
            return(
                <Card title={e.title} des={Text(e.des, 50)}  category={e.category} />
            )
         })
    }
  </div>
  )
}
