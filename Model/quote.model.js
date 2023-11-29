const mongoose = require('mongoose')

const dotenv = require('dotenv').config()

const MONGO_URL = process.env.DB_URL;

mongoose.connect(MONGO_URL).then((ans)=>{
    console.log("Connected")
}).catch((err)=>{
    console.log("Connection Error",err)
})

const QuoteSchema = new mongoose.Schema({
    quote:{
        type:String,
        unique:true
    },
    author:{
        type:String
    }
})

module.exports = mongoose.model("Quotes",QuoteSchema);