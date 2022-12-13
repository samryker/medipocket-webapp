import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

const bg_url =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon2.png?alt=media&token=0ec24e08-36c0-4ce9-b3a1-2a8b97b81436";

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
