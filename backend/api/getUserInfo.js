const Controller = require("../controllers")

async function getAccessToken(req,res){
    try{
        const {data} = req.body
        const accessTokenResponse = await Controller.getAccessToken(data.authId)
        console.log(accessTokenResponse)
        if(!accessTokenResponse.error){
            const userInfo = await Controller.getUserInfo(accessTokenResponse.access_token)
            res.json(userInfo)
        }
    }catch(error){
        res.json(error)
    }
}

module.exports = getAccessToken