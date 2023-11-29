const { error } = require('console');
const otpGenerator = require('../Miscellaneous/otp')
const db = require('../Model/otp.module')
const sendmail = require('../Miscellaneous/SendOTP')

function postData (req,res){
    const email = req.body.email;
    const otp = otpGenerator.GenerateOTP();

    const sendSuccess =  sendmail.SendOTP(otp,email)

   
        db.create({
            email:email,
            otp:otp,
            expiresAT: Date.now()+300000,
        }).catch((error)=>{
            console.log("Error",error.message)
        })
 

    

    res.json({
        "email":email,

        "otp":otp

    })
}

module.exports={
    postData
}