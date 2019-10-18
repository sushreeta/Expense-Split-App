const express = require('express')
const router = express.Router()
const {authenticateUser} = require('../app/middlewares/authentication')

const expense = require('../app/controllers/expenseController')
const user = require('../app/controllers/usersController')
const group = require('../app/controllers/groupController')

//localhost:3010/<routes>
router.post('/users/register', user.register)
router.post('/users/login', user.login)
router.get('/users/profile/', authenticateUser, user.profile)
router.delete('/users/logout', authenticateUser, user.logout)
//router.put('/updateProfile', authenticate, user.updateProfile)
router.delete('/deleteProfile', authenticateUser, user.deleteProfile)

//localhost:3010/user/<routes>
router.post('/groupCreate', authenticateUser, group.create)
router.get('/groupView/', authenticateUser, group.view)
router.put('/groupUpdate/:id',authenticateUser,group.update)
router.delete('/groupDelete/:id',authenticateUser, group.delete)

////localhost:3010/<routes>
router.post('/createExpense',authenticateUser, expense.createExpense)
router.get('/viewExpense/:id',authenticateUser, expense.viewExpense)
router.put('/editExpense/:id',authenticateUser, expense.editExpense)
router.delete('/removeExpense/:id',authenticateUser, expense.removeExpense)


module.exports = router