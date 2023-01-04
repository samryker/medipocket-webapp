function getUserInfo(accessToken,clientId){
    return new Promise(async (resolve,reject)=>{
        try{
            const url = "https://accounts.paytm.com/v2/user?fetch_strategy=profile_info,phone_number,email"
            const otherParams = {
                headers: {
                    "verification_type": "oauth_token",
                    "data": accessToken,    
                    "Authorization": `Basic ${clientId}` 
                },
                method: "GET"
            };

            const response = await fetch(url, otherParams)
            const result = await response.json()
            resolve(result)
        }catch(error){
            reject(error)
        }
    })
}

module.exports = getUserInfo