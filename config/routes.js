const express = require('express')
const router = express.Router()
const {authenticateUser} = require('../app/middlewares/authentication')

const expense = require('../app/controllers/expenseController')
const user = require('../app/controllers/usersController')
const group = require('../app/controllers/groupController')

//
router.post('/users/register', user.register)
router.post('/users/login', user.login)
router.get('/users/profile/', authenticateUser, user.profile)
router.delete('/users/logout', authenticateUser, user.logout)
//router.put('/updateProfile', authenticate, user.updateProfile)
router.delete('/deleteProfile', authenticateUser, user.deleteProfile)



//localhost:3010/user/groupCreate
router.post('/groupCreate', group.create)
router.get('/groupView/:id', group.view)
router.put('/groupUpdate/:id', group.update)
router.delete('/groupDelete/:id', group.delete)

// router.post('/createExpense',expense.create)
// router.post('/uploadExpenses', authenticate, expense.upload)
// router.put('/editExpense',expense.edit)
// router.delete('/removeExpense',expense.remove)
// router.put('/settleExpense',expense.settle)

module.exports = router