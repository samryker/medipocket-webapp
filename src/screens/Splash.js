import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/onBoarding1");
    }, 1500);
  }, [navigate]);
  return (
    <div className="splash-container">
      <img
        className="splash-logo"
        src={process.env.PUBLIC_URL + "/images/logo_white.png"}
        alt="logo"
      />
    </div>
  );
}
