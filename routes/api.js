const express = require('express')
const router = express.Router();

const BlogPost = require('../models/blogPost')

router.get('/',(req,res)=>{
   
    BlogPost.find({})
    .then((data)=>{
        console.log('Data: ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.post('/save',(req,res)=>{
    console.log('Body',req.body)
    const data = req.body;
    const newBlog = new BlogPost(data) 
    newBlog.save((error)=>{
        if(error){
            res.status(500).json({
             message:'sorry an internal error just occured'})
            return 
    }
        return res.json({
                message:"we have received your data"
            })
        
    })
    
})





module.exports = router;