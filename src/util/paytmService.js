export const getAuth = (e)=>{
    if(e.target.alt !== "drAI"){
        console.log("clicked something other than dr ai")
        e.preventDefault()
        ready(function () {
            window.JSBridge.call('paytmFetchAuthCode', {
                clientId: ""
            }, async function (result) {
                console.log(JSON.stringify(result))
                const url = 'http://localhost:4000/api/getUserInfo'
                const body = {
                    data : result.data,
                    clientId : ''
                }
                const response  = await fetch(url,{
                    body
                })
            });
        });
    }
    else{
        console.log("clicked on dr ai")
    }
}

function ready(callback) {
    if (window.JSBridge) {
        console.log("js bridge present")
        callback && callback();
    } else {
        console.log("no js bridge")
        document.addEventListener('JSBridgeReady', callback, false);
    }
}

