import React from "react";

export default function PaytmLogin() {
  function ready(callback) {
    if (window.JSBridge) {
      callback && callback();
    } else {
      document.addEventListener("JSBridgeReady", callback, false);
    }
  }

  ready(function () {
    let JSBridge = window.JSBridge;

    JSBridge.call(
      "paytmFetchAuthCode",
      {
        clientId: "IKOlSjh2L5crdTMliWlOO62doxolXxs",
      },
      function (result) {
        console.log(JSON.stringify(result));
      }
    );
  });

  const tryLoginWithPaytm = () => {
    console.log("tryLoginWithPaytm =>");
    ready();
  };
  return (
    <div>
      <button onClick={tryLoginWithPaytm}>PAYTM LOGIN</button>
    </div>
  );
}
