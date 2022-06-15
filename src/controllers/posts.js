import PostMessage from '../models/postMessage.js'

export const getPost = async (req,res)=>{
   
   try{
     const getPost = await PostMessage.find() 
     console.log(getPost) 
     res.status(201).json(getPost)
   }catch(err)
   {
    res.status(401).json({message : "error in getPost"})
   } 
}


export const createPost= async(res, req)=>{
    const post = req.body
    const newPost = new PostMessage(post)
    try{
       await newPost.save()
       res.status(201).json({sucess : "New Post is created"})
    }catch(err){
        res.status(401).json({err :  "Error in Created Data"})
    }
}