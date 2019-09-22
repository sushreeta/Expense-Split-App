const mongoose = require('../config/databse')
const Expense = require('../app/models/expense')

module.exports.createExpense = function(req, res){
     const body = req.body
     const expense = new Expense(body)
     expense.save()
          .then((expense)=>{
               res.json(expense)
          })
          .catch((err)=>{
               res.send('Error occured while saving the new expense: ',err)
          })

}

module.exports.uploadExpense = function(req,res){
     const body = req.body
     const expense = new Expense(body)
     expense.save()
          .then((expense)=>{
               res.json(expense)
          })
          .catch((err)=>{
               res.send('Error occured while saving the new expense by uploading xls: ',err)
          })

} 

