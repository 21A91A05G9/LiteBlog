import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
export default function Createblog() {
    // const nav = useNavigate()
    const [name, setName] = useState("");
    const { id } = useParams();
    console.log("id", id);
    const [blogId,setBlogId]= useState(undefined);
    const [imageurl,setImageurl] = useState("")
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
          .post('http://localhost:5002/newblog', formData).then((res) => {
            alert(res.data.msg);
            if (res.data.msg === 'Blog created successfully') {
              
              setImageurl(res.data.imagePath)
              setBlogId(res.data.newBlogData._id);
            }
          })
          .catch((err) => {
            console.log(err);
          });
    };
      
  return (
    <div className='container-fluid create'>
        <div className='container'>
        <h2 className='text-center pt-3 pb-5 blogHead'>Create Your Own Blog</h2>
        <form onSubmit={handleNewBlog}>
         <div className='row'>

            <div className='col-md-6 image-div '><input type='file'  accept='image/*' onChange={(e) => setBlogdata({ ...blogdata, image: e.target.files[0] })} /></div>
            
            <div className=' offset-1 col-md-6'>

            <div class="input-group mb-3 mt-2">
              <input type="text"  className=' blog-text' aria-label="Sizing example input" placeholder='Title Of The Blog' size='35' aria-describedby="inputGroup-sizing-lg" value={blogdata.title}onChange={(e) => setBlogdata({ ...blogdata, title: e.target.value })}/>  
              &nbsp; &nbsp;
              <select class="form-control select"  value={blogdata.category} onChange={(e) => setBlogdata({ ...blogdata, category: e.target.value })}>
                  <option>Select Category</option>
                  <option>Art</option>
                  <option>Music</option>
                  <option>Sports</option>
                  <option>Education</option>
                  <option>Business</option>
              </select>
              
            </div>
            <textarea className='p-3' value={blogdata.des} onChange={(e) => setBlogdata({ ...blogdata, des: e.target.value })}  style={{height:'250px', width:'100%'}} placeholder='Text Your Toughts...:)'></textarea>
            <div className='row mt-4 text-center'>
             <button type='submit' className='offset-2 col-2 btn btn-light'>published</button>
            </div>
            </div>
          </div>
          
          
        </form>
        </div>
    </div>
  )
}

      
             
              
        {/* {imageurl && (
        <div>
          <p>Preview Image:</p>
          <img
            src={'http://localhost:5002/'+imageurl}
            alt="Blog Preview"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )} */}
       
          