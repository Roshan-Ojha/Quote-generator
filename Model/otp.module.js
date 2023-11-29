const mongoose = require("mongoose");
const dotenv = require('dotenv').config()

const MONGO_URL = process.env.DB_URL;

mongoose
  .connect(MONGO_URL)
  .then((ans) => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  otp: String,
  expiresAT: Date,
  verified: { type: Boolean, default: false},
});

module.exports = mongoose.model("RegisterDetail",userSchema)
