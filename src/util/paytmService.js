export const getAuth = (e)=>{
    if(e.target.alt !== "drAI"){
        e.preventDefault()
        ready(function () {
            window.JSBridge.call('paytmFetchAuthCode', {
                clientId: ""
            }, function (result) {
                console.log(JSON.stringify(result))
                
            });
        });
    }
}

function ready(callback) {
    if (window.JSBridge) {
        callback && callback();
    } else {
        document.addEventListener('JSBridgeReady', callback, false);
    }
}

