import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const icons = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FbottomTab1.PNG?alt=media&token=29258db2-5f33-494a-beb4-f316099e1d19",
    name: "bottom icon 1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FbottomTab2.PNG?alt=media&token=7e969c57-1f75-40a9-87dd-a32bc2f916ab",
    name: "bottom icon 2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FbottomTab3.PNG?alt=media&token=0a1f49cb-1ba4-4177-b940-f198f7744589",
    name: "bottom icon 3",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FbottomTab4.PNG?alt=media&token=b0c4add6-6203-4842-8a99-032cb51f0223",
    name: "bottom icon 4",
  },
];
export default function Bottomtab() {
  const navigate = useNavigate();
  let location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("location => ", location);
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
      <div className="bottom-tab-item">
        <img
          src={icons[0].img}
          alt={icons[0].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">Home</p>
      </div>
      <div className="bottom-tab-item">
        <img
          src={icons[1].img}
          alt={icons[1].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">USA Experts</p>
      </div>
      <div className="bottom-tab-item">
        <img
          src={icons[2].img}
          alt={icons[2].name}
          className="bottom-tab-icon"
        />
        <p className="bottom-tab-title">Share</p>
      </div>
      <div className="bottom-tab-item">
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
