import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios';
export default function Sidebar() {
  const [category,setCategory] = useState("");
  useEffect(()=>{
    console.log(category)
    axios.get('https://lite-blog-backend.vercel.app/getCategory', { params:{key:category} }).then((res)=>{ 
        
    })
  },[category])
  return (
   
    <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1'>
      <button className="btn mt-4 categoryHead"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> Categories </button>
      <div className="offcanvas offcanvas-start sidebar show " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">
      
      <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
          
      </div>
      <button type="button" className='btn mt-5' data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <div className="offcanvas-body mt-4">
          <button className='row categoryRow btn'><p onClick={()=>setCategory("Art")}  className='category'>Art</p></button>
          <button className='row categoryRow btn'><p onClick={()=>setCategory("Business")}  className='category'>Business</p></button>
          <button className='row categoryRow btn'><p onClick={()=>setCategory("Education")}  className='category'>Education</p></button>
          <button className='row categoryRow btn'><p onClick={()=>setCategory("Music")}  className='category'>Music</p></button>
          <button className='row categoryRow btn'><p onClick={()=>setCategory("Sports")}  className='category'>Sports</p></button>
         
      </div>
      </div>
    </div>
  )
}
