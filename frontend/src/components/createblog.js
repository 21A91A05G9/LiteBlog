import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Createblog() {
    // const nav = useNavigate()
    const [blogdata,setBlogdata] = useState(
        {
            title:'',
            category:'',
            des:''
            
        }
    )
    const  handleNewBlog = (e) => {
        console.log(blogdata)
        e.preventDefault();
        axios.post('http://localhost:5001/newblog',blogdata).then((res)=>{
                alert(res.data.msg)
                
                if(res.data.msg==='successfully created'){
                    // nav('/login/')
                }
            
        }) 
    }
  return (
    <div className='container'>
        <form onSubmit={handleNewBlog}>
        <h1 className='text-center'>New Blog</h1>
        <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        <input type="text titletxt" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={blogdata.title}
    onChange={(e) => setBlogdata({ ...blogdata, title: e.target.value })}/>
        <span class="input-group-text" id="inputGroup-sizing-lg">Category</span>
        <select  value={blogdata.category} onChange={(e) => setBlogdata({ ...blogdata, category: e.target.value })}>
            <option>Art</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Education</option>
            <option>Business</option>
        </select>
        </div>
        <textarea  value={blogdata.des} onChange={(e) => setBlogdata({ ...blogdata, des: e.target.value })}  style={{height:'400px', width:'100%'}}></textarea>
        <button type='submit'>published</button>
        </form>
    </div>
  )
}
