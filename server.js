const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const route = require('./routes/api.js')
const userRouter = require('./routes/userRoute')




const USERDATA = `mongodb+srv://ignatius:ignatius22@cluster0-jv3ir.mongodb.net/UserList?retryWrites=true&w=majority`

mongoose.connect(process.env.USERDATA || /*'mongodb://localhost/mern_post'*/ USERDATA,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 })
 .then(()=>{console.log('Users database connected')})
 .catch(err=>{console.log(err)})




const MONGODB_URI = "mongodb+srv://ignatius:ignatius22@cluster0-jv3ir.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || /*'mongodb://localhost/mern_post'*/ MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected',() => {
    console.log('database is connected successfully')
});

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/posts',route)
app.use('/user', userRouter)

const port = process.env.PORT || 8080
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}



app.listen(port, console.log(`server is listening on port ${port}`))