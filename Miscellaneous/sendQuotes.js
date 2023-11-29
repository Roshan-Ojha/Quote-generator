const registerDB = require('../Model/otp.module');
const quoteDB = require('../Model/quote.model')
const nodemailer = require('nodemailer')
const todaysQuote = require('./retrieveQuotes')
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

async function Send(email){

    const quote = await todaysQuote.RetriveQuote()

    // const quotetext = `Quote: ${quote[0].quote} Author: ${quote[0].author}`

    function HTMLcode(quote,author){

        return `
        <div style="text-align: center; width: 100%; max-width: 1000px; margin: 0 auto; padding: 0 20px;">
        <div style="margin: 5%; background-color: #5C81F4; border-radius: 10px; padding: 5%;">
          <h1 style="color: #2A2836; font-size: 28px; margin-bottom: 15px;">Quote of the Day</h1>
          <div style="background-color: #ffffff; border-radius: 10px; padding: 5%;">
            <p style="font-size: 24px; color: #2A2836; margin: 0;text-align:start;">"${quote}"</p>
            <p style="font-size: 18px; color: #2A2836; text-align: right; margin-top: 10px;">- <i>${author}</i></p>
          </div>
        </div>
      </div>
      
        `
    }
console.log("hello again")


    let mailOptions={
        from:process.env.EMAIL,
        to:email,
        subject:"Quote for the day",
        html: HTMLcode(quote[0].quote,quote[0].author)
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

async function sendQuotes(){
    const quote = await registerDB.find({verified:true},{"_id":0,"__v":0})

    
    // quote.map((email)=>{
    //    setTimeout(async()=>{
    //     console.log("THis is will be printed after 5 second")
    //        await Send(email.email)
         
    //    },5000)


    // console.log("This will be printed first")

    // })

    for (const email of quote){
        // console.log(email)

        // console.log("This will be printed first");

        await new Promise((resolve) => {
          setTimeout(async() => {
            await Send(email.email)
            // console.log("This will be printed after 5 seconds");
            resolve();
          }, 500);
        });

        
    }
 

}
module.exports={
    sendQuotes
}