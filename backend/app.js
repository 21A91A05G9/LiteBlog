import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./models/register";
import blogData from "./models/blogdata";
const app=express();
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://vasavi_08:6H0ofPCG4sjWVhxt@cluster0.yhpakpu.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(()=> app.listen(5001))
.then(()=>console.log("Connected to Database & Listening to localhost 5001"))
.catch((err)=>console.log(err));
app.post('/register',async(req,res,next)=>{
    console.log("Data in backend:",req.body)
    const {name,username,email,password} = req.body
    if(name=='' || username=='' || email=='' || password==''){
        return  res.send({msg:'fill all details'})
    }
    const registerData = new register({
        name,
        username,
        email,
        password
    })
    try{
        registerData.save()
    }
    catch(err){
        console.log(err)
    }
    
    return  res.send({"blogData":registerData,msg:'successfully registered'})
})

app.post('/newblog',async(req,res,next)=>{
  console.log("BloData in backend:",req.body)
  const {title,category,des} = req.body
  if(title=='' || category=='' || des==''){
      return  res.send({msg:'fill all details'})
  }
  const BlogData = new blogData({
      title,
      category,
      des
  })
  try{
      BlogData.save()
  }
  catch(err){
      console.log(err)
  }
  
  return  res.send({"newBlogData":BlogData,msg:'successfully created'})
})


app.post('/login', async (req,res,next) => {
    const { username, password } = req.body;
    try {
      const user = await register.findOne({ username:username });
  
      if(user){
        if(user.password === password){
          res.send({ msg:'success', id: user._id });
        } 
        else{
          res.send({ msg:'incorrect password' });
        }
      } 
      else {
        res.send({ msg:'not registered' });
      }
    } 
    catch (error) {
      res.status(500).send({ msg: 'server error' });
    }
  });
  

app.get('/getBlogData', async (req,res,next)=>{  
    let blogdata;
    try{
        blogdata = await blogData.find();
        if(!blogdata){
          return res.status(404).json({message:"Failed to get data"})
        }
        return res.status(200).json({blogdata})
    }
    catch(err){
        console.log(err)
    }
    
})

app.get('/getSearchData', async (req,res,next)=>{  
  let searchdata;
  const key = req.query.key;
  try {
    if (key) {
      searchdata = await blogData.find({ title:{ $regex: new RegExp(key, 'i') }});
    } 
    else {
      return res.status(200).json({ message: "title parameter is required for search." });
    }

    if (!searchdata) {
      return res.status(200).json({ message: "No matching data found" });
    }

    return res.status(200).json({ searchdata });
  } 
  catch (err) {
    console.log(err);
    
  }
  
})


app.get('/getCategory', async (req,res,next)=>{  
  let categoryData;
  const key = req.query.key;
  try {
    if (key) {
      categoryData= await blogData.find({ category:{ $regex: new RegExp(key, 'i') }});
    } 
    else {
      return res.status(200).json({ message: "title parameter is required for search." });
    }

    if (!categoryData) {
      return res.status(200).json({ message: "No matching data found" });
    }

    return res.status(200).json({ categoryData});
  } 
  catch (err) {
    console.log(err);
    
  }
  
})

app.get('/getuser/:id', (req, res, next) => {
  const _id = req.params.id;
    console.log(_id)
    register.findOne({"_id": _id}).then((user) =>{
    console.log("user",user,user.name)
    res.send({userName:user.name})
  })
});

