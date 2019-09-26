const Group = require('../models/group')

module.exports.create = (req,res)=>{
     const body = req.body
     const group = new Group(body)
     group.save()
          .then((group)=>{
               console.log('saved')
               res.send(group)
          })
          .catch((err)=>{
               console.log('error')
               res.send(err)
          })
}

module.exports.view = (req,res)=>{
     const {id} = req.params
     Group.findById(id)
          .then((group)=>{
               res.json(group)
          })
          .catch((err)=>{
               res.json(err)
          })
     
}

module.exports.update = (req,res)=>{
     const body = req.body
     const {id} = req.params
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
