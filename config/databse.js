const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/Expense-split', {
     useNewUrlParser:true })
     .then(()=>{
          console.log('Successfully connected to mongoDB')
     })
     .catch((err)=>{
          console.log('Error connecting to mongoDB', err)
     })

     module.exports = mongoose