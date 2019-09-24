const express = require('express')
const app = express()
const routes = require('./config/routes')
const port = 3010

app.use(express.json())

app.get('/', (res,req)=>{
     res.send('Welcome to Expense Split app built by Sushreeta Sahoo')
})

app.use('/user',routes)

app.listen(port, ()=>{
     console.log('Listening to port', port)
})