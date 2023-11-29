const quoteDB = require('../Model/quote.model')

async function postQuotes (req,res){

    const quote = req.body.quote;
    const author = req.body.author;

    try{
        if(!quote || !author){
            throw Error("Quote or Authro Missing")
        }

        quotepresent = await quoteDB.findOne({quote},{})


        if(quotepresent){
            throw Error("Quote already there")
        }

        await quoteDB.updateOne({quote},{quote:quote,author:author},{upsert:true,runValidators:true})

        res.json({
            "quote":quote,
            "author":author 
        })

    }
    catch(err){
        res.json({
            "error":err.message
        })

    }

}
module.exports={
    postQuotes
}