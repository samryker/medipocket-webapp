import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSympthomGender } from "../../../redux/User/user.actions";
import "./styles.css";

const mapState = ({ user }) => ({
  age: user.age,
});

export default function Gender() {
  const navigate = useNavigate();
  const { age } = useSelector(mapState);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");
  const handleMale = () => {
    setMale(true);
    setFemale(false);
    setCheck(true);
    setSelected("m");
  };
  const handleFemale = () => {
    setMale(false);
    setFemale(true);
    setCheck(true);
    setSelected("f");
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      if (
        age === "4" ||
        age === "7" ||
        age === "5" ||
        age === "8" ||
        age === "9"
      ) {
        dispatch(updateSympthomGender(selected));
        if (selected === "f") {
          navigate("/pregnant");
        } else {
          navigate("/country");
        }
      }
    } else {
      setSelectError("* Select a gender is Required");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          src={process.env.PUBLIC_URL + "/icons/sympthoms/equality.png"}
          alt="gender"
          className="gender-img"
        />
        <div style={{ alignItems: "center", width: "100%", marginBottom: 50 }}>
          <div>
            <p className="age-title1">Select Gender</p>
            <p className="age-title2">Please select your gender</p>
          </div>
        </div>
        <div className="gender-content">
          <div
            className={`shadow1 ${male ? "gender-card2" : "gender-card"}`}
            onClick={handleMale}
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/sympthoms/male.png"}
              alt="male"
              className="gender-icon-style"
            />
            <p className={male ? "age-title22" : "age-title2"}>Male</p>
          </div>
          <div
            className={`shadow1 ${female ? "gender-card2" : "gender-card"}`}
            onClick={handleFemale}
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/sympthoms/female.png"}
              alt="female"
              className="gender-icon-style"
            />
            <p className={female ? "age-title22" : "age-title2"}>Female</p>
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
