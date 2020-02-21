const mongoose = require('mongoose')

const schema = mongoose.Schema;
const blogPostSchema = new schema({
    title:String,
    body:String,
    author:String,
    date:{
        type:String,
        default: Date.now()
    }
});

// defining model
const BlogPost = mongoose.model('BlogPost', blogPostSchema)

module.exports = BlogPost;