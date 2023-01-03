export const getAuth = (e)=>{
    if(e.target.alt !== "drAI"){
        // console.log(e)
        e.preventDefault()
        console.log("clicked")
        ready(function () {
            window.JSBridge.call('paytmFetchAuthCode', {
                clientId: "/*your reqClient ID*/"
            }, function (result) {
                console.log(JSON.stringify(result))
            });
        });
        // console.log("clicked")
    }
    // console.log(e)
}

function ready(callback) {
    if (window.JSBridge) {
        callback && callback();
    } else {
        document.addEventListener('JSBridgeReady', callback, false);
    }
}

