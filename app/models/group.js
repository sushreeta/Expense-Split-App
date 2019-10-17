const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const validator = require('validator')

const groupSchema = new Schema({
     groupName:{
          type:String,
          required:true,
          minlength:3,
          maxlength:20,
          unique:true,
          validate:{
               validator: (groupName)=>{
                    return groupName.length >= 3 && groupName.length <= 20
               },
               msg: ()=>{
                    return 'Group name should be between 3-20 characters'
               }
          }
     },
     description:{
          type:String,
          require:true,
          members:[{
               user:{
                    type:Schema.Types.ObjectId,
                    ref:'User'
               }
          }]
     }
})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group