const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const {authenticateUser} = require('../middlewares/authentication')


//localhost:3010/users/register
module.exports.register = (req,res)=>{
     const body = req.body
     const user = new User(body)
     user.save()
          .then((user)=>{
               res.json(user)
          })
          .catch((err)=>{
               res.send(err)
          })
}


//localhost:3010/users/login
module.exports.login = (req,res)=>{
     const body = req.body
     User.findByCredentials(body.email, body.password)
          .then(function(user){
               return user.generateToken()
          })
          .then(function(token){
               res.setHeader('x-auth',token).send({})
          })
          .catch((err)=>{
               res.send(err)
          })
}

//localhost:3010/users/profile
//need to work on it
module.exports.profile = (req,res)=>{
     const username = req.user.username
     User.find({username})
		.then((user) => {
			res.send(user)
		})
		.catch(err => res.send({ err }))
}


//localhost:3010/users/logout
module.exports.logout = (req,res)=>{
     const { user, token } = req
     User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
          .then(()=>{
               res.send('Successfully logged out')
          })
          .catch((err)=>{
               res.send(err)
          })
}

//localhost:3010/users/deleteProfile
module.exports.deleteProfile = (req,res)=>{
     const { user, token } = req
     User.findByIdAndDelete(user._id)
          .then(()=>{
               res.send('Successfully Deleted Account')
          })
          .catch((err)=>{
               res.send(err)
          })
}
