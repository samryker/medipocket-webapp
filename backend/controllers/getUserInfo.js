const { default: axios } = require("axios");
const {clientId,clientSecret} = require("../config/client.json")

function getUserInfo(accessToken){
    return new Promise(async (resolve,reject)=>{
        try{
            const url = "https://accounts.paytm.com/v2/user?fetch_strategy=profile_info,phone_number,email"
            const config = {
                headers: {
                    "verification_type": "oauth_token",
                    "data": accessToken,    
                    "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}` 
                }
            };

            const response = await axios.get(url, config)
            const result = await response.data
            resolve(result)
        }catch(error){
            reject(error)
        }
    })
}

module.exports = getUserInfo