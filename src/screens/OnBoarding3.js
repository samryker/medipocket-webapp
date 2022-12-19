import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const bg_url = process.env.PUBLIC_URL + "/icons/onBoarding/on3.png";

export default function OnBoarding3() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${bg_url})`,
      }}
      className="onBoarding-container"
    >
      <img
        className="onBoarding-logo"
        src={process.env.PUBLIC_URL + "/images/logo_white.png"}
        alt="logo"
      />
      <div className="onBoarding-title-container">
        <h1 className="onBoarding-title1">Surrogacy In USA</h1>
        <p className="onBoarding-title2">
          Best Success rate, gender selection, genetic screening, USA passport
        </p>
      </div>
      <div
        className="onBoarding-next-btn shadow1"
        onClick={() => navigate("/onBoarding4")}
      >
        Next
      </div>
    </div>
  );
}
