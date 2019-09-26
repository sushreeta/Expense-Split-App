const express = require('express')
const router = express.Router()
const authenticate = require('../app/middlewares/authentication')

const expense = require('../app/controllers/expenseController')
const user = require('../app/controllers/usersController')
const group = require('../app/controllers/groupController')

// router.post('/register', user.register)
// router.post('/login', user.login)
// router.get('/profile', user.profile)
// //router.put('/updateProfile', authenticate, user.updateProfile)
// router.delete('/deleteProfile', user.deleteProfile)

router.post('/groupCreate', group.create)
router.get('/groupView', group.view)
router.put('/groupUpdate/:id', group.update)
router.delete('/groupDelete/:id', group.delete)

// router.post('/createExpense',expense.create)
// //router.post('/uploadExpenses', authenticate, expense.upload)
// router.put('/editExpense',expense.edit)
// router.delete('/removeExpense',expense.remove)
// router.put('/settleExpense',expense.settle)

module.exports = router