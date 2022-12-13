import React from "react";
import { useNavigate } from "react-router-dom";

const bg_url =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FonBoarding1-min.png?alt=media&token=b4b8c4c3-4ffe-43d4-b14d-f3fa4cd35554";

export default function OnBoarding1() {
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
        <h1 className="onBoarding-title1">Second Opinion USA</h1>
        <p className="onBoarding-title2">
          Consult from India the world's best hospitals and specialists in USA
        </p>
      </div>
      <div
        className="onBoarding-next-btn"
        onClick={() => navigate("/onBoarding2")}
      >
        Next
      </div>
    </div>
  );
}
