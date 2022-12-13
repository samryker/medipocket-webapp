import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSympthomDescribe } from "../../../redux/User/user.actions";
import "./styles.css";

export default function Describe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");
  const [predictive, setPredictive] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectError, setSelectError] = useState("");
  const getPredictive = async () => {
    await fetch("https://apiscsandbox.isabelhealthcare.com/predictive-p", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
        // Authorization: `${ISABELL_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("response => ", res);
        setPredictive(res.predictive_text);
      })
      .catch((error) => {
        console.log("error line 38 describe");
        console.error(error);
      });
  };
  useEffect(() => {
    fetch("https://apiscsandbox.isabelhealthcare.com/predictive-p", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `U7IdoNJWWzV75NZGxVGJ8KE7p0W5A1m2`,
        // Authorization: `${ISABELL_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("response => ", res);
        if (res?.predictive_text) setPredictive(res.predictive_text);
      })
      .catch((error) => {
        console.log("error line 38 describe");
        console.error(error);
      });
  }, []);
  useEffect(() => {
    // test
    setCheck(true);
    // test
    if (search.length > 0 && predictive.length !== 0) {
      let after = predictive.filter(checkWord);
      let array2 = [];
      console.log("after => ", after);
      if (after.length > 0) {
        for (let i = 0; i < 10; i++) {
          if (after[i]) {
            array2.push(after[i]);
          }
        }
        setSearchArray(array2);
        setCheck(true);
      } else {
        setSearchArray([]);
      }
    }
    if (search.length === 0) {
      setSearchArray([]);
    }
  }, [search]);

  const checkWord = (item) => {
    let ch = item.substr(0, search.length).toUpperCase();
    let ch2 = search.toUpperCase();
    if (ch == ch2) return true;
    return false;
  };
  const handleAddItem = (e, item) => {
    console.log("Item Added => ", item);
    let array = [];
    array = selected;
    array.push(item);
    setSelected(array);
    setSearch("");
    setSearchArray([]);
  };
  const handleRemoveItem = (e, item) => {
    console.log("Item Removed => ", item);
    let array = [];
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] !== item) {
        array.push(selected[i]);
      }
    }
    setSelected(array);
  };
  const handleAddCustom = (item) => {
    console.log("item=>", item);
    console.log("selected=>", selected);
    let array = [];
    if (selected.length < 5) {
      array = selected;
      array.push(item);
    }
    setSelected(array);
    setSearch("");
    setSearchArray([]);
  };

  const handleSubmit = () => {
    let testSelected = ["headache", "hot and cold"];
    if (testSelected.length !== 0) {
      // if (selected.length !== 0) {
      // let ch = selected.join(",");
      let ch = testSelected.join(",");
      console.log("Success !!!");
      dispatch(updateSympthomDescribe(ch));
      navigate("/result");
    } else {
      setSelectError("* Please enter atleast one word");
    }
  };
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
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
          src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fnotes.png?alt=media&token=3ded13d5-a1bd-4dbc-80d4-1ebd758fdb4b"
          alt="describe"
          className="gender-img"
        />
        <div style={{ alignItems: "center", width: "100%", marginBottom: 50 }}>
          <div>
            <p className="age-title1">Select symptoms</p>
            <p className="age-title2">
              Please describe in your own words or select symptoms from list
            </p>
          </div>
        </div>
        {/* describe */}
        {selected.length !== 0 ? (
          <div>
            <p className="describe-title1">Your Selected Key Words</p>
            <div className="describe-word-container">
              {selected.map((item, index) => (
                <div
                  key={index}
                  className="descibe-wordStyle2 shadow1"
                  onClick={(e) => handleRemoveItem(e, item)}
                >
                  <p className="describe-word-style2">{item}</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fclose.png?alt=media&token=7179b5d1-2b8b-46ff-89b5-b6b5a474c46c"
                    className="describe-plus-icon"
                    alt="img"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="describe-search-main-container">
          <div className="describe-search-main shadow1">
            <img
              className="describe-search-icon"
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsearch.png?alt=media&token=102ca289-8daa-42a8-bc21-02903cd95d68"
              alt="img"
            />
            <input
              className="describe-search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              styles={style}
              disabled={predictive.length > 0 ? false : true}
            />
            <div
              className="describe-add-btn-container"
              onClick={(e) => handleAddItem(e, search)}
              disabled={search.length > 0 ? false : true}
            >
              <img
                className="describe-add-btn-icon"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fplus.png?alt=media&token=f9ee0e65-92a1-4f4e-84df-a50cb981af74"
                alt="img"
              />
            </div>
          </div>
        </div>
        {searchArray && (
          <div className="describe-word-container">
            {searchArray.map((item, index) => (
              <div
                key={index}
                className="descibe-wordStyle shadow1"
                onClick={(e) => handleAddItem(e, item)}
              >
                <p className="describe-word-style">{item}</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fplus.png?alt=media&token=f9ee0e65-92a1-4f4e-84df-a50cb981af74"
                  className="describe-add-btn-icon"
                  alt="img"
                />
              </div>
            ))}
          </div>
        )}
        {/* describe */}
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
