import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
export default function Createblog() {
    // const nav = useNavigate()
    const [name, setName] = useState("");
    const { id } = useParams();
    console.log("id", id);
    const [blogId,setBlogId]= useState(undefined);

    useEffect(() => {
        if (id !== undefined) {
            axios.get('http://localhost:5002/getuser/' + id)
            .then((res) => {
                setName(res.data.userName);
                console.log("setting name", name);
            });
        }
    }, [id]); 

    const [blogdata, setBlogdata] = useState({
        title: '',
        category: '',
        des: '',
        state: 'Unliked',
        by: "",
        image:null
    });
    console.log("image name is",blogdata)
    useEffect(() => {
    
        setBlogdata(prevData => ({...prevData,by: name}) );
    }, [name]);
    const handleNewBlog = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('image', blogdata.image); // assuming 'avatar' is the key expected by your backend
      
        // Append other form data
        formData.append('title', blogdata.title);
        formData.append('category', blogdata.category);
        formData.append('des', blogdata.des);
        formData.append('state', blogdata.state);
        formData.append('by', blogdata.by);
      
        axios
          .post('http://localhost:5002/newblog', formData)
          .then((res) => {
            alert(res.data.msg);
            if (res.data.msg === 'successfully created') {
              console.log("image path is",res.data.imagePath)
              setBlogId(res.data.newBlogData._id);
            }
          })
          .catch((err) => {
            console.log(err);
          });
    };
      
    // const  handleNewBlog = (e) => {
        
    //     console.log(blogdata.image)
    //     e.preventDefault();
    //     axios.post('http://localhost:5001/newblog',blogdata).then((res)=>{
    //             alert(res.data.msg)
                
    //             if(res.data.msg==='successfully created'){
    //                 // nav('/login/')
    //                 setBlogId(res.data.BlogId)
    //             }
            
    //     }) 
    // }
  return (
    <div className='container create'>
        <form onSubmit={handleNewBlog}>
        <input type='file' accept='image/*' onChange={(e) => setBlogdata({ ...blogdata, image: e.target.files[0] })} />
        <h2 className='text-center pt-3'>Create New Blog {name}</h2>
        <div class="input-group input-group-lg my-2">
        <span class="input-group-text" id="inputGroup-sizing-lg">Category</span>
        <select  value={blogdata.category} onChange={(e) => setBlogdata({ ...blogdata, category: e.target.value })}>

            <option>Art</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Education</option>
            <option>Business</option>
        </select>
        </div>

        <div class="input-group input-group-lg my-2">
        <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        <input type="text titletxt" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={blogdata.title}
        onChange={(e) => setBlogdata({ ...blogdata, title: e.target.value })}/>  
        </div>
       
        <div>
        <textarea className='p-3' value={blogdata.des} onChange={(e) => setBlogdata({ ...blogdata, des: e.target.value })}  style={{height:'370px', width:'100%'}} placeholder='Description'></textarea>
        </div>
        <button type='submit' className='btn btn-light'>published</button>
        </form>
    </div>
  )
}
