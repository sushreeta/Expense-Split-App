const mongoose = require('mongoose')
const schema = mongoose.Schema
const Group = require('./group')

const expenseSchema = new schema({
     description:{
          type:String,
          required:true,
          minlength:5,
          maxlength:30,
          validate:{
               validator: (description)=>{
                    return description.length>=5
               },
               msg: ()=>{
                    return 'Please enter description of length between 5-30 characters'
               }
          }
     },
     amount:{
          type:Number,
          required:true,
          min:0.1,
          validate:{
               validator: (amount)=>{
                    return amount >= 0.1
               },
               msg: ()=>{
                    return 'Please enter an amount greater than 0'
               }
          }
     },
     PaidBy:{
          //id of created user assign before saving
          type:schema.Types.ObjectId,
          ref:'User',
          required:true
     },
     expenseGroup:{
          type:schema.Types.ObjectId,
          ref:'Group',
          required:true
     },
     createdAt:{
          type:Date,
          default:Date.now()
     },
     // userExpense:[
     //           {    
     //                userId:{
     //                     type:schema.Types.ObjectId,
     //                     ref:'User'
     //                },
     //                lend:{
     //                     type:Boolean
     //                },    
     //                lendAmount:{
     //                     type:Number
     //                }
     //           }
     // ]
})

// expenseSchema.pre('save', function(next){
//      const expense = this
//      Group.find({_id:expenseGroup})
//           .then((group)=>{
//                expense.userExpense = group.members
//                for(member in expense.userExpense){
//                     if(member.userId == paidBy){
//                          member.lend = true
//                     } else {
//                          member.lend = false 
//                     }
//                     member.lendAmount = (amount/Group.members.length)
//                }
//                next()
//           }
//                )
//           .catch((err)=>{
//                return err
//           })

     
// })

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense