const express = require('express')
const app = express()
const router = require('./config/routes')
const port = 3000

app.use(express.json())

app.get('/', (req, res)=>{
     console.log('homepage')
     res.send('welcome to Expense Split app')
})
app.use('/user',router)

app.listen(port, ()=>{
     console.log('Listening to port', port)
})   