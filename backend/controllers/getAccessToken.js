const { default: axios } = require("axios");

const {clientId,clientSecret} = require("../config/client.json")

function getAccessToken(authId){
    return new Promise(async (resolve,reject)=>{
        try{
            const url = "https://accounts.paytm.com/oauth2/v2/token"
            const header = {
                "grant_type": "authorization_code",
                "code": authId,
                "client_id": clientId,
                "scope": "basic"
            };

            let formBody = [];
            for (let property in header) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(header[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            const requestBody = formBody.join("&");
            const config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                }
            }
            const response = await axios.post(url,requestBody,config)
            const result = await response.data
            resolve(result)
        }catch(error){
            reject(error)
        }
    })
}

module.exports = getAccessToken