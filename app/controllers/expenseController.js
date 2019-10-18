const express = require('express')
const router = express.Router()
const Expense = require('../models/expense')

//localhost:3010/createExpense
module.exports.createExpense = (req,res)=>{
     const {description,amount,expenseGroup} = req.body
     const id = req.user._id
     const expense = new Expense({description:description, amount:amount, PaidBy:id,expenseGroup:expenseGroup})
     expense.save()
          .then((expense)=>{
               res.json(expense)
          })
          .catch((err)=>{
               res.send(err)
          })
}

//localhost:3010/viewExpense/:id
module.exports.viewExpense = (req,res)=>{
     const id = req.params.id
     Expense.find({expenseGroup:id})
          .then((expenses) => {
               res.json(expenses)
          })
          .catch(err => res.json(err))
}

//localhost:3010/editExpense/:id
module.exports.editExpense = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Expense.findByIdAndUpdate(id, body, { new:true, runValidators:true })
     .then((expense)=>{
          if(expense){
               res.json(expense)
          } else {
               res.json({})
          }
     })
     .catch((err)=>{
          res.json(err)
     })
}

//localhost:3010/removeExpense/:id
module.exports.removeExpense = (req,res)=>{
     const id = req.params.id
     if(id){
          Expense.findByIdAndDelete({_id:id})
               .then((expense)=>{
                    res.json(expense)
               })
               .catch((err)=>{
                    res.send(err)
               })
     } else {
          res.send({ notice: "wrong id.." })
     }
}
