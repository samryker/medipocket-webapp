import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const bg_url = process.env.PUBLIC_URL + "/icons/onBoarding/on4.png";
const bg_url2 = process.env.PUBLIC_URL + "/icons/onBoarding/on4_2.png";

export default function OnBoarding4() {
  const navigate = useNavigate();
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${size[0] > 580 ? bg_url : bg_url2})`,
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
