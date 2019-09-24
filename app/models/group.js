const mongoose = require('mongoose')
const schema = mongoose.Schema
const validator = require('validator')

const groupSchema = new schema({
     groupName:{
          type:String,
          required:true,
          minlength:3,
          maxlength:20,
          validate:{
               validator: (groupName)=>{
                    return name.length >= 3 && name.length <= 20
               },
               msg: ()=>{
                    return 'Group name should be between 3-20 characters'
               }
          }
     },
     description:{
          type:String,
          require:true
     },
     members:[{
          user:{
               type:schema.Types.ObjectId,
               ref:'User',
               require:true
          }
     }]
})

const Group = mongoose.model('Group', groupSchema)

module.exports = { Group }
