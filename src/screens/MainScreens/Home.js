import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const handleSymthoms = () => {
    navigate("/age");
  };
  const handleDoctors = () => {
    navigate("/doctors");
  };
  const handleLungs = () => {
    navigate("/doctorList", { filter: "Oncology" });
  };
  const handleTooth = () => {
    navigate("/doctorList", { filter: "Endocrinology" });
  };
  const handleDermatologist = () => {
    navigate("/doctorList", { filter: "Cardiology" });
  };
  const handleHeart = () => {
    navigate("/doctorList", { filter: "Rheumatology" });
  };
  const handleBrain = () => {
    navigate("/doctorList", { filter: "Fertility" });
  };
  const handlePsychology = () => {
    navigate("/doctorList", { filter: "Surgery" });
  };
  const handleUrology = () => {
    navigate("/doctorList", { filter: "Mental" });
  };
  const handleConsult = () => {
    navigate("/doctors");
  };
  const handleOthers = () => {
    navigate("/doctorList", { filter: "*" });
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{backgroundColor:"red"}} className="home-container">
      <div className="home-subContainer">
        <Header
          navigate={navigate}
          bg=""
          isHome={true}
          isDoctorList={false}
          isProfile={false}
          isSurrogacy={false}
        />
        <div className="home-headerCards">
          <div className="home-headerCard" onClick={handleSymthoms}>
            <img
              alt="img"
              className="home-cardImg"
              src={process.env.PUBLIC_URL + "/icons/right_img.png"}
            />
            <div className="home-headerCardContent shadow">
              <p className="home-headerCardTitle">Dr. AI</p>
              <p className="home-headerCardDescription">
                Free Symptoms{"\n"} checker
              </p>
            </div>
          </div>
          <div className="home-headerCard" onClick={handleDoctors}>
            <img
              alt="img"
              className="home-cardImg"
              src={process.env.PUBLIC_URL + "/icons/left_img.png"}
            />
            <div className="home-headerCardContent shadow">
              <p className="home-headerCardTitle">Top USA Specialists</p>
              <p className="home-headerCardDescription">
                Video consult top USA doctors
              </p>
            </div>
          </div>
        </div>
        {/* specialities */}
        <div className="home-specialitiesContainer">
          <p className="home-specialitiesText">Specialities</p>
        </div>
        {/* spec */}
        <div className="home-menuContent">
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/lungs.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Oncology</p>
            <p className="home-menuCardTitle1">Cancer</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/thyroid.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Endocrinology</p>
            <p className="home-menuCardTitle1">Diabetes, Thyroid</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/heart.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Cardiology</p>
            <p className="home-menuCardTitle1">Heart Problems</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/joints.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Rheumatology</p>
            <p className="home-menuCardTitle1">Arthritis, Joints</p>
          </div>
        </div>
        <div className="home-menuContent">
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={
                  process.env.PUBLIC_URL +
                  "/icons/specialities/reproductive.png"
                }
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Fertility</p>
            <p className="home-menuCardTitle1">IVF, Treatments</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/anatomy.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Plastic Surgery</p>
            <p className="home-menuCardTitle1">Nose, Body</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={
                  process.env.PUBLIC_URL + "/icons/specialities/psychology.png"
                }
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">Mental Health</p>
            <p className="home-menuCardTitle1">Anxiety, Depression</p>
          </div>
          {/* oncology */}
          <div className="home-cardContainer99" onClick={handleLungs}>
            <div className="home-menuCard shadow">
              <img
                className="home-cardContainer99Img"
                src={process.env.PUBLIC_URL + "/icons/specialities/dermis.png"}
                alt="img"
              />
            </div>
            <p className="home-menuCardTitle">More</p>
            <p className="home-menuCardTitle1">Skin, Neuro</p>
          </div>
        </div>
        {/* video Consultation */}
        <div className="home-videoConsult" onClick={handleConsult}>
          <p className="home-videoConsultText">
            Video Consult Our Top USA Specialists{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
