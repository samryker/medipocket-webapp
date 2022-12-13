import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./styles.css";

const icons = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh1.png?alt=media&token=aad33af5-a0d1-4d9a-b304-1153e6f7d284",
    name: "hospital1"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh2.png?alt=media&token=425ea13a-deb7-406d-ba00-d8b7c7371fa3",
    name: "hospital2"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh3.png?alt=media&token=6e552803-ea2f-4ea1-874a-829283a6f585",
    name: "hospital3"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh4.png?alt=media&token=67f98059-0d40-4598-ac5e-ddf6d33c9d96",
    name: "hospital4"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh5.png?alt=media&token=a1fcb186-f2bd-487c-b6c6-874315683248",
    name: "hospital5"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh6.png?alt=media&token=ec9a3863-67fe-4499-b961-d832a0a489b6",
    name: "hospital6"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh7.png?alt=media&token=3fb78455-b51e-46d8-a54d-5a68ffd56d2c",
    name: "hospital7"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh8.png?alt=media&token=5070d9c5-9b3c-4df2-acdd-1fb50aaa4d17",
    name: "hospital8"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh9.png?alt=media&token=766cf45f-e260-410f-af66-6413099f8de4",
    name: "hospital9"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh10.png?alt=media&token=43b84f5c-78b7-4382-add6-209246e742f8",
    name: "hospital10"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh11.png?alt=media&token=573a2b2e-ad60-4e28-b2d5-6501d7c399df",
    name: "hospital11"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh12.png?alt=media&token=1720acb6-8b40-4b43-b1e9-8a7db76abc84",
    name: "hospital12"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh14.png?alt=media&token=ad082ab6-dfd9-4652-8bf9-a58c7a6f8138",
    name: "hospital13"
  },
]

const bg_img =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2FhomeBg.png?alt=media&token=3cbc2277-915d-4ad6-85df-dcc98f84e7f7";
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
  return (
    <div className="home-container">
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
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fright_img.png?alt=media&token=f4c52de7-4981-4bed-8877-2562c3f42881"
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
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fleft_img.png?alt=media&token=3b1e05b7-1b30-4209-a6c2-df19582872d5"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Flungs.png?alt=media&token=51b706ef-dafc-484f-954b-ab8ceba22a67"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fthyroid.png?alt=media&token=5ea0ce92-b936-4797-8f5c-e388bf252419"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fheart.png?alt=media&token=8d5d1ab2-5ec6-480d-b09b-105a54dd0eb1"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fjoints.png?alt=media&token=0a758366-8ee0-4b67-99c0-ea8ec030c0f6"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Freproductive.png?alt=media&token=c142449d-0f72-470b-9c36-a164f0133e99"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fanatomy.png?alt=media&token=ddd77593-c445-4112-b7e6-f87ab1ad1258"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fpsychology.png?alt=media&token=002d3ca4-dcf2-4180-92e0-34485613e844"
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
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fdermis.png?alt=media&token=e7169f17-ca33-49bc-a361-9bc2019de915"
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
