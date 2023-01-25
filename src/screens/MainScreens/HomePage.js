import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import PrimaryButton from "../Components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilterSuccess,
  updateDoctorFilter,
} from "../../redux/User/user.actions";


const icons = [
  {
    name: "surrogacy 1",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s3.png",
  },
  {
    name: "surrogacy 2",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s4.png",
  },
  {
    name: "surrogacy 3",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s5.png",
  },
  {
    name: "surrogacy 4",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s6.png",
  },
  {
    name: "surrogacy 5",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s7.png",
  },
  {
    name: "surrogacy 6",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s8.png",
  },
  {
    name: "surrogacy 7",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s9.png",
  },
  {
    name: "surrogacy 8",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s10.png",
  },
  {
    name: "surrogacy 9",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s11.png",
  },
  {
    name: "surrogacy 10",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s12.png",
  },
  {
    name: "surrogacy 11",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s13.png",
  },
  {
    name: "surrogacy 12",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s14.png",
  },
  {
    name: "surrogacy 13",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s15.png",
  },
  {
    name: "surrogacy 14",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s16.png",
  },
  {
    name: "surrogacy 15",
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s17.png",
  },
];
const surrogacy = [
  {
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s1.png",
    title: "Infertility",
    desc: [
      {
        desc: "USA Infertility Experts",
      },
      {
        desc: "Top Fertility Clinics",
      },
      {
        desc: "Ovulation Induction",
      },
      {
        desc: "Artificial Insemination",
      },
      {
        desc: "IVF",
      },
    ],
  },
  {
    img: process.env.PUBLIC_URL + "/icons/surrogacy/s2.png",
    title: "Surrogacy",
    desc: [
      {
        desc: "Gender Selection",
      },
      {
        desc: "Genetic Screening",
      },
      {
        desc: "Egg / Sperm Donors",
      },
      {
        desc: "Surrogate Mother USA",
      },
      {
        desc: "Baby USA Passport",
      },
    ],
  },
];
const hospitals1 = [
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h1.png",
    name: "h1",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h2.png",
    name: "h2",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h3.png",
    name: "h3",
  },
];
const hospitals2 = [
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h4.png",
    name: "h1",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h5.png",
    name: "h2",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/hospitals/h6.png",
    name: "h3",
  },
];
const doctors = [
  {
    img: process.env.PUBLIC_URL + "/icons/doctors/doctor1.png",
    name: "Dr. A. Eli Gabayan",
    spec: "Surgeon",
    place: "Boston, USA",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/doctors/doctor2.png",
    name: "Dr. Sam Najmabadi",
    spec: "Therapist",
    place: "San Francisco, USA",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/doctors/doctor3.png",
    name: "Dr. Raj Kanodia",
    spec: "Dentist",
    place: "New York, USA",
  },
  {
    img: process.env.PUBLIC_URL + "/icons/doctors/doctor4.png",
    name: "Dr. John Doe",
    spec: "Therapist",
    place: "Los Angeles, USA",
  },
];
const mapState = ({ user }) => ({
  filterUpdateSuccess: user.filterUpdateSuccess,
});

export default function HomePage({loggedIn}) {
  const navigate = useNavigate();
  const { filterUpdateSuccess } = useSelector(mapState);
  const dispatch = useDispatch();

 

  useEffect(() => {
    if (filterUpdateSuccess) navigate("/doctorList");
    return () => {
      dispatch(resetFilterSuccess());
    };
  }, [filterUpdateSuccess, dispatch, navigate]);

  const handleSpec1 = () => {
    dispatch(updateDoctorFilter("Oncology"));
  };
  const handleSpec2 = () => {
    dispatch(updateDoctorFilter("cardiology"));
  };
  const handleSpec3 = () => {
    dispatch(updateDoctorFilter("Neurology"));
  };
  const handleSpec4 = () => {
    dispatch(updateDoctorFilter("Diseases"));
  };
  const handleSpec5 = () => {
    dispatch(updateDoctorFilter("Mental"));
  };
  const handleSpec6 = () => {
    dispatch(updateDoctorFilter("Fertility"));
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="age-container" style={{ padding: "15px !important" }}>
      {/* Header */}
      <div className="header-surrogacy">
        <div className="home-logo-logo-container">
          <img
            src={process.env.PUBLIC_URL + "/icons/homelogo1.png"}
            alt="logo"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
              objectFit: "contain",
            }}
          />
          <div className="home-logo-logo-container2">
            <img
              src={process.env.PUBLIC_URL + "/icons/homelogo2.png"}
              alt="logo"
              style={{
                width: "150px",
                height: "30px",
                marginBottom: "3px",
                objectFit: "contain",
              }}
            />
            <img
              src={process.env.PUBLIC_URL + "/icons/homelogo3.png"}
              alt="logo"
              style={{ width: "150px", height: "10px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div style={{ width: "20px" }} />
      </div>
      <h1 className="homeTitle">
        <span>USA</span> Medical Services
      </h1>
      <div className="firstBlocWrapper">
        <div
          className="homeComponent shadowHome"
          onClick={() => {
            if(loggedIn){
              navigate("/doctors")
            }
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/p1.jpg"}
            alt="img"
            className="bgImgHome1"
          />
          <img
            src={process.env.PUBLIC_URL + "/icons/m1.png"}
            alt="img"
            className="bgImgHome2"
            style={{ width: "105%", height: "105%", objectFit: "contain" }}
          />
          <div className="homeComponentContent">
            <h3>USA Specialists</h3>
            <p>Virtual Consultation USA Doctors</p>
          </div>
        </div>
        <div
          className="homeComponent shadowHome"
          onClick={() => {
            if(loggedIn){
              navigate("/hospitals")}}
            }
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/p2.png"}
            alt="img"
            className="bgImgHome1"
          />
          <img
            src={process.env.PUBLIC_URL + "/icons/m2.png"}
            alt="img"
            className="bgImgHome2"
            style={{
              width: "105%",
              height: "125%",
              marginLeft: "-5%",
              objectFit: "contain",
            }}
          />
          <div className="homeComponentContent">
            <h3>USA Hospitals</h3>
            <p>World's Best Treatment</p>
          </div>
        </div>
        <div
          className="homeComponent shadowHome"
          onClick={() => {
            if(loggedIn){
              navigate("/surrogacy")}
            }
          }
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/p3.png"}
            alt="img"
            className="bgImgHome1"
          />
          <img
            src={process.env.PUBLIC_URL + "/icons/m3.png"}
            alt="img"
            className="bgImgHome2"
            style={{ width: "100%", height: "110%", objectFit: "contain" }}
          />
          <div className="homeComponentContent">
            <h3>Surrogacy - IVF</h3>
            <p>Gender Selection USA Passport</p>
          </div>
        </div>
        <div
          className="homeComponent shadowHome"
          onClick={() => navigate("/age")}
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/p4.png"}
            alt="img"
            className="bgImgHome1"
          />
          <img
            src={process.env.PUBLIC_URL + "/icons/m4.png"}
            alt="drAI"
            className="bgImgHome2"
            style={{ width: "110%", height: "110%", objectFit: "contain" }}
          />
          <div className="homeComponentContent">
            <h3>Dr. AI</h3>
            <p>Check Symptoms 24*7</p>
          </div>
        </div>
      </div>
      <div className="secondBlocWrapper">
        <h2 className="homeTitle">Top USA Hospitals</h2>
        <div className="secondBlocSubWrapper">
          {hospitals1.map((item, index) => (
            <div key={index} className="secBlocElement shadowHome">
              <img alt={item.name} src={item.img} className="secImg" />
            </div>
          ))}
        </div>
        <div className="secondBlocSubWrapper">
          {hospitals2.map((item, index) => (
            <div key={index} className="secBlocElement shadowHome">
              <img alt={item.name} src={item.img} className="secImg" />
            </div>
          ))}
        </div>
        <div style={{ width: "100%", height: "50px" }} />
        <PrimaryButton
          icon={process.env.PUBLIC_URL + "/icons/plusIcon.png"}
          name="View USA Hospitals"
          loggedIn = {loggedIn}
        />
      </div>
      <div className="thirdBlocWrapper">
        <h2 className="homeTitle">Specialities</h2>
        <div className="thirdBlocSubWrapper">
          {/* oncology */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec1()
            }
          } }>
            <div className="content">
              <img
                alt="Oncology"
                src={process.env.PUBLIC_URL + "/icons/i1.png"}
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          {/* Cardiology */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec2()
            }
          } }>
            <div className="content">
              <img
                alt="Cardiology"
                src={process.env.PUBLIC_URL + "/icons/i2.png"}
                className="thirdImg"
              />
              <h4>Cardiology</h4>
            </div>
          </div>
          {/* Neurology */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec3()
            }
          } }>
            <div className="content">
              <img
                alt="Neurology"
                src={process.env.PUBLIC_URL + "/icons/i3.png"}
                className="thirdImg"
              />
              <h4>Neurology</h4>
            </div>
          </div>
          {/* Rare Diseases */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec4()
            }
          } }>
            <div className="content">
              <img
                alt="Rare Diseases"
                src={process.env.PUBLIC_URL + "/icons/i4.png"}
                className="thirdImg"
              />
              <h4>Rare Diseases</h4>
            </div>
          </div>
          {/* Mental Health */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec5()
            }
          } }>
            <div className="content">
              <img
                alt="Mental Health"
                src={process.env.PUBLIC_URL + "/icons/i5.png"}
                className="thirdImg"
              />
              <h4>Mental Health</h4>
            </div>
          </div>
          {/* Infertility */}
          <div className="thirdBlocElement shadowHome" onClick={()=>{
            if(loggedIn){
              handleSpec6()
            }
          } }>
            <div className="content">
              <img
                alt="Infertility"
                src={process.env.PUBLIC_URL + "/icons/i6.png"}
                className="thirdImg"
              />
              <h4>Infertility</h4>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "20px" }} />
      </div>
      <div className="fourthBlocWrapper">
        <h2 className="homeTitle">Top USA Specialities</h2>
        <div className="fourthBlocSubWrapper">
          {doctors.map((item, index) => (
            <div key={index} className="fourthBlocElement shadowHome">
              <div className="content">
                <img alt={item.name} src={item.img} className="fourthImg" />
                <h4>{item.name}</h4>
                <p>{item.spec} </p>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: "100%", height: "20px" }} />
      </div>
      <PrimaryButton
        icon={process.env.PUBLIC_URL + "/icons/heartAnalIcon.png"}
        name="More USA Doctors"
      />
      {/* section 1 */}
      <div>
        <h2 className="homeTitle" style={{ paddingTop: "10px" }}>
          Bring Your Baby Home
        </h2>
        <div
          className="surrogacy-section1-container"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadowHome">
              <img
                src={surrogacy[0].img}
                alt={surrogacy[0].title}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadowHome"
              style={{ height: "260px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  {surrogacy[0].title}
                </p>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[0].desc[0].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[0].desc[1].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[0].desc[2].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[0].desc[3].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[0].desc[4].desc}
                  </p>
                </div>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => {
                  if(loggedIn){
                    navigate("/intakeForm")
                  }
                }}
              >
                <img
                  src={icons[6].img}
                  alt={icons[6].name}
                  className="surrogacy-section1-container-vector"
                />
              </div>
            </div>
          </div>
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadowHome">
              <img
                src={surrogacy[1].img}
                alt={surrogacy[1].title}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadowHome"
              style={{ marginTop: "-18px", height: "260px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  {surrogacy[1].title}
                </p>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[1].desc[0].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[1].desc[1].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[1].desc[2].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[1].desc[3].desc}
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    {surrogacy[1].desc[4].desc}
                  </p>
                </div>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => {
                  if(loggedIn){
                    navigate("/intakeForm")
                  }
                }}
              >
                <img
                  src={icons[6].img}
                  alt={icons[6].name}
                  className="surrogacy-section1-container-vector"
                />
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          icon={process.env.PUBLIC_URL + "/icons/phoneIcon.png"}
          name="Book Free Call Surrogacy USA"
        />
      </div>
      <div className="lastBloc " style={{ paddingBottom: "120px" }}>
        <h2 className="homeTitle">MediPocket World</h2>
        <div className="content shadowHome">
          <p>
            When facing life-changing illness, getting access to premium
            healthcare of USA experts, medical opinion, teatment, gives you
            peace of mind and confidence, when you need it the most to save the
            life
          </p>
        </div>
      </div>
      <div style={{ height: "150px !important" }} />
    </div>
  );
}
