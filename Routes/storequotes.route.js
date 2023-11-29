const express = require('express')
const quotController = require('../Controller/quotes.controller')

const quoterouter = express.Router()

const valiDateAPI = require('../Controller/ValidateKey.controller')

quoterouter.post('/',valiDateAPI,quotController.postQuotes)

module.exports = quoterouter