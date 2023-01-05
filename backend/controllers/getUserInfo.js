const { default: axios } = require("axios");

function getUserInfo(accessToken,clientId){
    return new Promise(async (resolve,reject)=>{
        try{
            const url = "https://accounts.paytm.com/v2/user?fetch_strategy=profile_info,phone_number,email"
            const config = {
                headers: {
                    "verification_type": "oauth_token",
                    "data": accessToken,    
                    "Authorization": `Basic ${clientId}` 
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