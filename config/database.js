const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/expense_split', {
     useNewUrlParser: true
})
     .then(()=>{
          console.log('connected to DB')
     })
     .catch((err)=>{
          console.log('cannot connectto DB',err)
     })
module.exports = mongoose