const dotenv = require('dotenv').config()

function valiDateAPI(req,res,next){
    const api_key = req.headers['api-key'];

    try{
        if(api_key === process.env.API_KEY){
            console.log("API key is valid",process.env.API_KEY)
            next();
        }
        else{
            throw Error("API key is invalid")
        }
    }
    catch(err){
        res.json({
            "error":err.message
        })
    }

}

module.exports = valiDateAPI