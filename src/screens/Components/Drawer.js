import React, { useEffect } from "react";
import "./styles.css";
import {
  FaHome,
  FaUserAlt,
  FaCommentAlt,
  FaFolder,
  FaClipboard,
  FaShieldAlt,
  FaAt,
  FaQuestionCircle,
  FaPowerOff,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerShown } from "../../redux/Local/local.actions";

const mapState = ({ local }) => ({
  isDrawerShown: local.isDrawerShown,
});

export default function Drawer() {
  const { isDrawerShown } = useSelector(mapState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isDrawerShown => ", isDrawerShown);
  }, [isDrawerShown]);

  const handleHome = () => {
    navigate("/home");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleDrai = () => {
    navigate("/age");
  };
  const handledoctors = () => {
    navigate("/doctors");
  };
  const handleConsults = () => {
    navigate("/consults");
  };
  const _handlePressTerms = () => {
    window.open("http://medipocket.world/privacy-policy/");
  };
  const _handlePressTerms1 = () => {
    window.open("http://medipocket.world/terms-conditions/");
  };
  const handleLogout = () => {
    // dispatch(signOutUser());
    console.log("LogOut");
  };

  return (
    <div
      className="drawer-container"
      style={{ display: isDrawerShown ? "flex" : "none" }}
    >
      <div className="drawer-closeContainer">
        <FaTimes
          className="drawer-drawerIcon3"
          style={{ right: isDrawerShown ? "25%" : 20 }}
        />
      </div>
      {/* logo */}
      <div
        className="drawer-profileStyle"
        onClick={() => dispatch(setDrawerShown())}
      >
        <img
          className="drawer-imgStyle"
          src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989"
          alt="logo"
        />
      </div>
      {/* drawer */}
      <div className="drawer-drawerContent">
        {/* Home */}
        <div className="drawer-drawerItem" onClick={handleHome}>
          <FaHome className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Home</p>
        </div>
        {/* Profile */}
        <div className="drawer-drawerItem" onClick={handleProfile}>
          <FaUserAlt className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Profile</p>
        </div>
        {/* Profile */}
        <div className="drawer-drawerItem" onClick={handleDrai}>
          <FaCommentAlt className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Dr. AI</p>
        </div>
        {/* USA Specialists */}
        <div className="drawer-drawerItem" onClick={handledoctors}>
          <FaFolder className="drawer-drawerIcon" />
          <p className="drawer-drawerText">USA Specialists</p>
        </div>
        {/* My Consults */}
        <div className="drawer-drawerItem" onClick={handleConsults}>
          <FaClipboard className="drawer-drawerIcon" />
          <p className="drawer-drawerText">My Consults</p>
        </div>
        {/* Privacy Policy */}
        <div className="drawer-drawerItem" onClick={_handlePressTerms}>
          <FaShieldAlt className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Privacy Policy</p>
        </div>
        {/* Terms of Use */}
        <div className="drawer-drawerItem" onClick={_handlePressTerms1}>
          <FaQuestionCircle className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Terms of Use</p>
        </div>
        {/* Terms of Use */}
        <div className="drawer-drawerItem" onClick={_handlePressTerms1}>
          <FaAt className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Contact Us:</p>
        </div>
        <div className="drawer-drawerItem2" onClick={_handlePressTerms1}>
          <FaAt className="drawer-drawerIcon2" />
          <p className="drawer-drawerText2">health@app.medipocket.world</p>
        </div>
        {/* Logout */}
        <div className="drawer-drawerItem" onClick={handleLogout}>
          <FaPowerOff className="drawer-drawerIcon" />
          <p className="drawer-drawerText">Logout</p>
        </div>
      </div>
    </div>
  );
}
