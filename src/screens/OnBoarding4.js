import React from "react";
import { useNavigate } from "react-router-dom";

const bg_url =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fbg1.png?alt=media&token=6491998f-fdb1-4db2-965b-3e6a2e5c4ced";

export default function OnBoarding4() {
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
        <h1 className="onBoarding-title1">DR. AI</h1>
        <p className="onBoarding-title2">
          Check your symptoms 24x7 for FREE with personalized AI powered
          medically designed symptom checker
        </p>
      </div>
      <div className="onBoarding-next-btn" onClick={() => navigate("/home")}>
        Let's Start
      </div>
    </div>
  );
}
