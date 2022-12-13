import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSympthomPregnant } from "../../../redux/User/user.actions";
import "./styles.css";

export default function Pregnant() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [pregnantState, setPregnantState] = useState(false);
  const [notPregnant, setNotPregnant] = useState(false);
  const [dontKnowPregnant, setDontKnowPregnant] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");
  const handlePregnant = () => {
    setPregnantState(true);
    setDontKnowPregnant(false);
    setNotPregnant(false);
    setSelected("y");
    setCheck(true);
  };
  const handleDontKnowPregnant = () => {
    setPregnantState(false);
    setDontKnowPregnant(true);
    setNotPregnant(false);
    setSelected("_");
    setCheck(true);
  };
  const handleNotPregnant = () => {
    setPregnantState(false);
    setDontKnowPregnant(false);
    setNotPregnant(true);
    setSelected("n");
    setCheck(true);
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      dispatch(updateSympthomPregnant(selected))
      navigate("/country")
    } else {
      setSelectError("* Select a gender is Required");
    }
  };
  return (
    <div className="age-container" style={{ height: "100vh" }}>
      {/* subContainer */}
      <div className="age-subContainer">
        <div className="age-header">
          <div className="age-headerSub" onClick={() => navigate(-1)}>
            <FaArrowLeft className="age-backIcon" />
          </div>
          <div className="age-titleContainer">
            <p className="age-title1">DR. AI</p>
          </div>
          <div className="age_emptySpace"></div>
        </div>
      </div>
      {/* scroll */}
      <div className="age-scrollContainer">
        <p className="age-cardTitle2">Welcome to the DR. AI</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fequality.png?alt=media&token=47681ef1-3f78-499e-a60c-0a0bd41773db"
          alt="gender"
          className="gender-img"
        />
        <div style={{ alignItems: "center", width: "100%", marginBottom: 50 }}>
          <div>
            <p className="age-title1">Are You Pregnant?</p>
            <p className="age-title2">Please select an option</p>
          </div>
        </div>
        <div className="gender-content">
          <div
            className={`shadow1 ${pregnantState ? "gender-card2" : "gender-card"}`}
            onClick={handlePregnant}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fwoman.png?alt=media&token=47c838d9-52fe-4d81-951b-fc521303ab32"
              alt="male"
              className="gender-icon-style"
            />
            <p className={pregnantState ? "age-title22" : "age-title2"}>Yes</p>
            <p className={pregnantState ? "age-title22" : "age-title2"}>Pregnant</p>
          </div>
          <div
            className={`shadow1 ${
              dontKnowPregnant ? "gender-card2" : "gender-card"
            }`}
            onClick={handleDontKnowPregnant}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Ffemale.png?alt=media&token=83529e04-433a-4b5c-b9a9-f7156aea7b0d"
              alt="female"
              className="gender-icon-style"
            />
            <p className={dontKnowPregnant ? "age-title22" : "age-title2"}>
              Don't
            </p>
            <p className={dontKnowPregnant ? "age-title22" : "age-title2"}>
              Know
            </p>
          </div>
          <div
            className={`shadow1 ${
              notPregnant ? "gender-card2" : "gender-card"
            }`}
            onClick={handleNotPregnant}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fpregnant.png?alt=media&token=2b024101-ae05-4356-810a-e232ff4fd6a5"
              alt="female"
              className="gender-icon-style"
            />
            <p className={notPregnant ? "age-title22" : "age-title2"}>Not</p>
            <p className={notPregnant ? "age-title22" : "age-title2"}>
              Pregnant
            </p>
          </div>
        </div>
        {selectError.length !== 0 ? (
          <p className="error1">{selectError}</p>
        ) : null}
        {/* Submit */}
        <div
          className={`submit-container ${check ? "submit1" : "submit2"}`}
          onClick={handleSubmit}
        >
          <p className="submit-text">Submit</p>
        </div>
      </div>
    </div>
  );
}
