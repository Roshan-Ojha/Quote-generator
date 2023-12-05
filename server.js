const express = require('express')
const schedule = require('node-schedule');
const dotenv = require('dotenv').config()

const registerRouter = require('./Routes/register.rout')
const verifyoutRouter = require('./Routes/otp.route')
const quoteRouter = require('./Routes/storequotes.route')

const retrieve = require ('./Controller/RetriveQuote.controller')

const send = require('./Miscellaneous/sendQuotes')

const PORT = process.env.PORT

const app = express()

app.use(express.json())


const job = schedule.scheduleJob({hour: 5, minute: 45},()=>{
    
    send.sendQuotes();
})



app.get('/',retrieve.getQuote)

app.use('/register',registerRouter)
app.use('/verify',verifyoutRouter)
app.use('/store',quoteRouter)



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})