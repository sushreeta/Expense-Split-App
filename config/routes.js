const express = require('express')
const router = express.Router()
const authenticate = require('../app/middleware/authentication')

const expense = require('../app/controllers/expenseController')
const user = require('../app/controllers/userController')
const group = require('../app/controllers/groupController')

router.post('/register', user.register)
router.post('/login', user.login)
router.get('/profile', authenticate, user.profile)
//router.put('/updateProfile', authenticate, user.updateProfile)
router.delete('/deleteProfile', authenticate, user.deleteProfile)

router.post('/createGroup', authenticate, group.create)
router.put('/updateGroup', authenticate, group.update)
router.delete('/deleteGroup', authenticate, group.delete)

router.post('/createExpense', authenticate, expense.create)
//router.post('/uploadExpenses', authenticate, expense.upload)
router.put('/editExpense', authenticate, expense.edit)
router.delete('/removeExpense', authenticate, expense.remove)
router.put('/settleExpense', authenticate, expense.settle)

module.exports = { router }