const express = require('express')
const router = express.Router()
const Expense = require('../models/expense')

module.exports.createExpense = function(req,res){
     const body = req.body
     const expense = new Expense(body)
     expense.save()
          .then((expense)=>{
               res.json(expense)
          })
          .catch((err)=>{
               res.send(err)
          })
}

module.exports.editExpense = function(req,res){
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

module.exports.removeExpense = function(req,res){
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

module.exports.settleExpense = function(req, res){

}