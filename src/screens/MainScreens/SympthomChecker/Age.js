import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSympthomAge } from "../../../redux/User/user.actions";
import "./styles.css";

export default function Age() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  const [option8, setOption8] = useState(false);
  const [option9, setOption9] = useState(false);
  const [option10, setOption10] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");

  const resetAll = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    setOption6(false);
    setOption7(false);
    setOption8(false);
    setOption9(false);
    setOption10(false);
  };
  const handleOp1 = () => {
    resetAll();
    setOption1(true);
    setCheck(true);
    setSelected("1");
  };
  const handleOp2 = () => {
    resetAll();
    setOption2(true);
    setCheck(true);
    setSelected("2");
  };
  const handleOp3 = () => {
    resetAll();
    setOption3(true);
    setCheck(true);
    setSelected("3");
  };
  const handleOp4 = () => {
    resetAll();
    setOption4(true);
    setCheck(true);
    setSelected("10");
  };
  const handleOp5 = () => {
    resetAll();
    setOption5(true);
    setCheck(true);
    setSelected("4");
  };
  const handleOp6 = () => {
    resetAll();
    setOption6(true);
    setCheck(true);
    setSelected("7");
  };
  const handleOp7 = () => {
    resetAll();
    setOption7(true);
    setCheck(true);
    setSelected("5");
  };
  const handleOp8 = () => {
    resetAll();
    setOption8(true);
    setCheck(true);
    setSelected("8");
  };
  const handleOp9 = () => {
    resetAll();
    setOption9(true);
    setCheck(true);
    setSelected("9");
  };
  const handleOp10 = () => {
    resetAll();
    setOption10(true);
    setCheck(true);
    setSelected("6");
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      dispatch(updateSympthomAge(selected));
      navigate("/gender");
    } else {
      setSelectError("* Selecting an age is Required");
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
        <div style={{ alignItems: "center", width: "100%", marginBottom: 50 }}>
          <div>
            <p className="age-title1">Select Age Range</p>
            <p className="age-title2">Please select your age range</p>
          </div>
        </div>
        {/* Newborn 0-28 d */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option1 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp1}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option1 ? "age-title22" : "age-title2"}>
                Newborn 0-28 d
              </p>
            </div>
          </div>
        </div>
        {/* Infant 29 d-1 yr */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option2 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp2}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option2 ? "age-title22" : "age-title2"}>
                Infant 29 d-1 yr
              </p>
            </div>
          </div>
        </div>
        {/* Younger Child 1-5 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option3 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp3}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option3 ? "age-title22" : "age-title2"}>
                Younger Child 1-5 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Older Child 6-12 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option4 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp4}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option4 ? "age-title22" : "age-title2"}>
                Older Child 6-12 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Adolescent 13-16 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option5 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp5}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option5 ? "age-title22" : "age-title2"}>
                Adolescent 13-16 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Young Adult 17-29 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option6 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp6}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option6 ? "age-title22" : "age-title2"}>
                Young Adult 17-29 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Adult 30-39 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option7 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp7}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option7 ? "age-title22" : "age-title2"}>
                Adult 30-39 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Adult 40-49 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option8 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp8}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option8 ? "age-title22" : "age-title2"}>
                Adult 40-49 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Adult 50-64 yrs */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option9 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp9}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option9 ? "age-title22" : "age-title2"}>
                Adult 40-49 yrs
              </p>
            </div>
          </div>
        </div>
        {/* Senior 65 yrs-over */}
        <div className="age-optionContent">
          <div className="age-optionContainer">
            <div
              className={option10 ? "age-card2 shadow1" : "age-card shadow1"}
              onClick={handleOp10}
            >
              <img
                className="age-icon2Style"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505"
                alt="img"
              />
              <p className={option10 ? "age-title22" : "age-title2"}>
                Senior 65 yrs-over
              </p>
            </div>
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
