const Controller = require("../controllers")

async function getAccessToken(req,res){
    try{
        const {data} = req.body
        console.log(data)
        const accessTokenResponse = await Controller.getAccessToken(data.authId)
        console.log(accessTokenResponse)
        if(!accessTokenResponse.error){
            const userInfo = await Controller.getUserInfo(accessTokenResponse.access_token)
            console.log(userInfo)
            res.json(userInfo)
        }
    }catch(error){
        res.json(error)
    }
}

module.exports = getAccessToken