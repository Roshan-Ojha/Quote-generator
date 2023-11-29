// const quoteDB = require('../Model/quote.model')
const getquote = require('../Miscellaneous/retrieveQuotes')

 async function getQuote(req,res){

    const quotes =await getquote.RetriveQuote();

    res.json({
        "quote":quotes[0].quote,
        "author":quotes[0].author
    })
}

module.exports={
    getQuote
}