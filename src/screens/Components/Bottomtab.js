import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const icons = [
  {
    img: process.env.PUBLIC_URL + "/icons/bottomTab/b1.png",
    name: "bottom_icon_1",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/bottomTab/b2.png",
    name: "bottom_icon_2",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/bottomTab/b3.png",
    name: "bottom_icon_3",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/bottomTab/b4.png",
    name: "bottom_icon_4",
  },
];
export default function Bottomtab() {
  const navigate = useNavigate();
  let location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (
      location.pathname === "/onBoarding1" ||
      location.pathname === "/onBoarding2" ||
      location.pathname === "/onBoarding3" ||
      location.pathname === "/onBoarding4" ||
      location.pathname === "/" ||
      location.pathname === "/age" ||
      location.pathname === "/gender" ||
      location.pathname === "/pregnant" ||
      location.pathname === "/country" ||
      location.pathname === "/describe" ||
      location.pathname === "/result" ||
      location.pathname === "/intakeForm" ||
      location.pathname === "/appointment"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);
  if (show) return null;
  return (
    <div className="bottom-tab">
      <div className="bottom-tab-item" onClick={() => navigate("/home")}>
        <img
          src={icons[0].img}
          alt={icons[0].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">Home</p>
      </div>
      <div className="bottom-tab-item" onClick={() => navigate("/doctors")}>
        <img
          src={icons[1].img}
          alt={icons[1].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">USA Experts</p>
      </div>
      {/* <div className="bottom-tab-item">
        <img
          src={icons[2].img}
          alt={icons[2].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">Share</p>
      </div> */}

      <div onClick={() => navigate("/userProfile")} className="bottom-tab-item">
        <img
          src={icons[3].img}
          alt={icons[3].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">Profile</p>
      </div>
    </div>
  );
}
