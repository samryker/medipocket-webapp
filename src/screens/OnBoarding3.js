import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const bg_url = process.env.PUBLIC_URL + "/icons/onBoarding/on2.png";
const bg_url2 = process.env.PUBLIC_URL + "/icons/onBoarding/on2_2.png";

export default function OnBoarding3() {
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
        <h1 className="onBoarding-title1">Treatment In USA</h1>
        <p className="onBoarding-title2">
          At best USA hospitals, MayoClinic, MD Anderson, John Hopkins, Boston
          Children Hospital
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
