import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

const bg_url = process.env.PUBLIC_URL + "/icons/onBoarding/on2.png";

export default function OnBoarding2() {
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
        <h1 className="onBoarding-title1">Treatment In USA</h1>
        <p className="onBoarding-title2">
          At best USA hospitals, MayoClinic, MD Anderson, John Hopkins, Boston
          Children Hospital
        </p>
      </div>
      <div
        className="onBoarding-next-btn"
        onClick={() => navigate("/onBoarding3")}
      >
        Next
      </div>
    </div>
  );
}
