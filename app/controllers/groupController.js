const Group = require('../models/group')

//localhost:3010/groupCreate
module.exports.create = (req,res)=>{
     const {groupName, description} = req.body
     const id = req.user._id
     const group = new Group({groupName: groupName, description:description, createdBy:id})
     //group.markModified('groupName')
     group.save()
          .then((group)=>{
               console.log('saved')
               res.json(group)
          })
          .catch((err)=>{
               console.log('error')
               res.json(err)
          })
}

//localhost:3010/groupView
module.exports.view = (req,res)=>{
     const id = req.user._id
     Group.find({createdBy:id})
          .then((groups) => {
               res.json(groups)
          })
          .catch(err => res.send({ err }))
}

//localhost:3010/groupUpdate/:id
module.exports.update = (req,res)=>{
     const id = req.params.id
     const body = req.body
     console.log(req.params)
     Group.findByIdAndUpdate(id, body, {new:true, runValidators:true})
          .then((group)=>{
               if(group){
                    res.json(group)
               } else {
                    res.json({})
               }
          })
          .catch((err)=>{
               res.json(err)
          })
}

//localhost:3010/groupDelete/:id
module.exports.delete = (req,res)=>{
     const {id} = req.params
     Group.findByIdAndDelete(id)
          .then((group)=>{
               if(group){
                    res.json(group)
               } else {
                    res.json({})
               }
          })
          .then((err)=>{
               res.json(err)
          })
}