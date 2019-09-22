const express = require('express')
const router = express.Router()

const addExpense = require('../controllers/addExpense')
const editExpense = require('../controllers/editExpense')
const settleExpense = require('../controllers/settleExpense')
const removeExpense = require('../controllers/removeExpense')

router.post('/createExpense', addExpense.createExpense)
router.post('/uploadExpense', addExpense.uploadExpense)

router.put('/EditExpense', editExpense.editExpense)
router.delete('/removeExpense', removeExpense.remove)
router.put('/settleExpense', settleExpense.settle)

module.exports = { router }