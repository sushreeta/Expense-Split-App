const express = require('express')
const app = express()
const router = require('./config/routes')
const port = 3010
const mongoose = require('./config/database')

app.use(express.json())

// app.get('/', (req, res)=>{
//      console.log('homepage')
//      res.send('welcome to Expense Split app')
// })
app.use('/',router)

app.listen(port, ()=>{
     console.log('Listening to port', port)
})   