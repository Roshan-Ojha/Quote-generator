const express = require('express')
const registerController = require('../Controller/register.controller')


const registerRouter = express.Router();

registerRouter.post('/',registerController.postData)


module.exports = registerRouter