var nodemailer = require ('nodemailer')
const dotenv = require('dotenv').config()

let transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,  
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})

function SendOTP(otp,receiverEmail){
    let mailOptions={
        from:process.env.EMAIL,
        to:receiverEmail,
        subject:"OTP for Quote Generator",
        text:otp
    }

    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error)
         
            
        }
        else{
            console.log(info)
          
        }
    })

}

module.exports={
    SendOTP
}