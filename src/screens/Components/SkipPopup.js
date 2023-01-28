import React from "react";

export const SkipPopup = ({loginFlow}) => {
  const message = "Granting consent is necessary for proceeding with the flow.";
  function handleExit(){
    if (window.JSBridge) {
        window.JSBridge.call('popWindow');
    }
    
  }
  function handleRetry(){
    loginFlow()
  }
  return (
    <div className="popupContainer">
      <div className="popup">
        <div className="popupMessage">
          <p>{message}</p>
          <div className="actions">
            <button onClick={handleExit} className="exit">EXIT</button>
            <button onClick = {handleRetry} className="retry">RETRY</button>
          </div>
        </div>
      </div>
    </div>
  );
};
