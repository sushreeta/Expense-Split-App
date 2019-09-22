const mongoose = require('mongoose')
const schema = mongoose.Schema

const expenseSchema = new schema({
     PaidBy:{
          //id of created user
          type:String,
          required:true
     },
     description:{
          type:String
     },
     oweBy:[{
          _id:{
               type:String
          }
     }],
     totalExpense:{
          type:Number,
          require:true
     },
     divideAmong:{
          type:Number,
          default:oweBy.length
     },
     createdAt:{
          type:Date,
          default:Date.now()
     }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense