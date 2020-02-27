const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()


const User = require('../models/user')
router.use(cors())

process.env.SECRET_KEY = 'secret'


router.post('/register',(req,res)=>{
   const today = new Date()
   const userData = {
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       email:req.body.email,
       password:req.body.password,
       created:today
   }
   User.findOne({
       email:req.body.email
   }).then(user=>{
       if(!user){
           bcrypt.hash(req.body.password, 10,(err,hash)=>{
               userData.password = hash
               User.create(userData)
               .then(user=>{
                   res.json({status: `${user.email} is registered`})
               })
               .catch(err=>{
                   res.send(`error: ${err}`)
               })
            
           })
       }else{
           res.json({error:'user exist'})
       }
   })
   .catch(err=>{
       res.send(`error : ${err}`)
   })

})

router.post('/login', (req,res)=>{
    User.findOne({
        email:req.body.email
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id:user._id,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    email:req.body.email
                }
                let token  = jwt.sign(payload,process.env.SECRET_KEY, {
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"Auth failed "})
                
            }

        }else{
            res.json({error:"Auth failed "})
            
        }

    })
    .catch(err =>{
        res.send(`error: ${err}`)
        console.log(err)
    })
})


router.get('/profile',(req,res)=>{
    const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id:decoded._id
    })
    .then(user=>{
        if(user){
            res.json(user)
        }
        else{
            res.send('Auth failed')
        }
    })
    .catch(err=>{
        res.send(`error: ${err}`)
    })

})





module.exports = router;