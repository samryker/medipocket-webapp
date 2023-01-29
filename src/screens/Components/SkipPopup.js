import React from "react";

export const SkipPopup = ({ setDisplayPopup, loginFlow, logFromPopup }) => {
  const message = "Granting consent is necessary for proceeding with the flow.";
  function handleExit() {
    if (window.JSBridge) {
      window.JSBridge.call("popWindow");
    }
  }
  function handleRetry() {
    setDisplayPopup(false);
    if (window.JSBridge) {
      loginFlow();
    }
  }
  return (
    <div className="popupContainer">
      <div className="popup">
        <div className="popupMessage">
          <p>{message}</p>
          <div>
            <p>{logFromPopup}</p>
          </div>
          <div className="actions">
            <button onClick={handleExit} className="exit">
              EXIT
            </button>
            <button onClick={handleRetry} className="retry">
              RETRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
