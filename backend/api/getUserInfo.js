const Controller = require("../controllers")

async function getAccessToken(req,res){
    try{
        const {data,clientId} = req.body
        const accessTokenResponse = await Controller.getAccessToken(data.authId,clientId)
        if(!accessTokenResponse.error){
            const userInfo = await Controller.getUserInfo(accessTokenResponse.access_token,clientId)
            res.json(userInfo)
        }
    }catch(error){
        res.json(error)
    }
}

module.exports = getAccessToken