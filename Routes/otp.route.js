const express = require('express')
const otpverifycontroller = require('../Controller/verifyotp.controller')

const otpVerifyRrouter = express.Router()

otpVerifyRrouter.post('/',otpverifycontroller.postOTP)

module.exports = otpVerifyRrouter