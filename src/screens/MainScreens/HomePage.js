import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./styles.css";
import Surrogacy from "./Surrogacy";
import { IoMdArrowBack } from "react-icons/io";
import PrimaryButton from "../Components/PrimaryButton";

const icons = [
  {
    name: "surrogacy 1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy1.png?alt=media&token=40042125-f551-47c6-82b2-77c35ec33921",
  },
  {
    name: "surrogacy 2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy2.png?alt=media&token=c1f08820-3800-471d-9478-f6a704dafcd6",
  },
  {
    name: "surrogacy 3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy3.png?alt=media&token=ebc733e4-e5ea-4f70-94bf-ad2a51485de2",
  },
  {
    name: "surrogacy 4",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy4.PNG?alt=media&token=17cbec1f-19f9-4cc5-b939-6112c0529969",
  },
  {
    name: "surrogacy 5",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy5.PNG?alt=media&token=8c125d34-6ab1-4515-ade6-07222d0c1891",
  },
  {
    name: "surrogacy 6",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy6.PNG?alt=media&token=3ce6ffdf-52c3-411c-bcc7-89041863ff1f",
  },
  {
    name: "surrogacy 7",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy7.png?alt=media&token=d985f7bc-545e-411a-bdeb-09c4e421bd16",
  },
  {
    name: "surrogacy 8",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy8.PNG?alt=media&token=9e197333-eb39-40ad-a15a-2710a238daef",
  },
  {
    name: "surrogacy 9",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy9.PNG?alt=media&token=a953a080-36c9-47cb-817c-f1dfb5928f9b",
  },
  {
    name: "surrogacy 10",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy10.PNG?alt=media&token=d302633a-8dab-4033-b0a1-2f802b128cdc",
  },
  {
    name: "surrogacy 11",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy11.PNG?alt=media&token=7ac419de-c3c8-429f-9c05-1a4343566928",
  },
  {
    name: "surrogacy 12",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy12.PNG?alt=media&token=6104155a-d12e-49a2-8524-e1b0f5c1b40c",
  },
  {
    name: "surrogacy 13",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy13.PNG?alt=media&token=67c9981e-d228-428e-8e46-87743119fbfa",
  },
  {
    name: "surrogacy 14",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy14.PNG?alt=media&token=6a2a9bb6-0ba2-4747-9300-a45258eea58c",
  },
  {
    name: "surrogacy 15",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy15.PNG?alt=media&token=f80062a1-27ea-47d5-abdf-6e6b83c4bc58",
  },
];
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="age-container">
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
          onClick={() => navigate("/doctors")}
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
          onClick={() => navigate("/hospitals")}
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
          onClick={() => navigate("/surrogacy")}
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
            alt="img"
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
        <h2>Top USA Hospitals</h2>
        <div className="secondBlocSubWrapper">
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887.png?alt=media&token=15230067-798e-4955-8fa2-94a3f7aef135"
              className="secImg"
            />
          </div>
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887%20(1).png?alt=media&token=e8238509-42d5-4705-84e5-d2f25946de49"
              className="secImg"
            />
          </div>
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887%20(2).png?alt=media&token=5039cd04-f9b8-4b8b-83b2-70711264b796"
              className="secImg"
            />
          </div>
        </div>
        <div className="secondBlocSubWrapper">
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
          <div className="secBlocElement shadowHome">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
        </div>
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FplusIcon.png?alt=media&token=c711231f-3471-42f3-9fa8-9b5b0f1a78ee"
          name="View USA Hospitals"
        />
      </div>
      <div className="thirdBlocWrapper">
        <h2>Specialities</h2>
        <div className="thirdBlocSubWrapper">
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i1.png"}
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i2.png"}
                className="thirdImg"
              />
              <h4>Cardiology</h4>
            </div>
          </div>
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i3.png"}
                className="thirdImg"
              />
              <h4>Neurology</h4>
            </div>
          </div>
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i4.png"}
                className="thirdImg"
              />
              <h4>Rare Diseases</h4>
            </div>
          </div>
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i5.png"}
                className="thirdImg"
              />
              <h4>Mental Health</h4>
            </div>
          </div>
          <div className="thirdBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/icons/i6.png"}
                className="thirdImg"
              />
              <h4>Infertility</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="fourthBlocWrapper">
        <h2>Top USA Specialities</h2>
        <div className="fourthBlocSubWrapper">
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement shadowHome">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
        </div>
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FheartAnalIcon.png?alt=media&token=5e75f4b0-f093-4e7a-a9d1-12d6b6240232"
          name="More USA Doctors"
        />
      </div>
      {/* section 1 */}
      <div>
        <h2>Top USA Specialities</h2>
        <div className="surrogacy-section1-container">
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadowHome">
              <img
                src={icons[0].img}
                alt={icons[0].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadowHome"
              style={{ height: "260px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Infertility
                </p>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    USA Infertility Experts
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Top Fertility Clinics
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Ovulation Induction
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Artificial Insemination
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    IVF
                  </p>
                </div>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => navigate("/intakeForm")}
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
                src={icons[1].img}
                alt={icons[1].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadowHome"
              style={{ marginTop: "-18px", height: "260px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Surrogacy
                </p>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Gender Selection
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Genetic Screening
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Egg / Sperm Donors
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Surrogate Mother USA
                  </p>
                </div>
                <div
                  className="surrogacy-section1-container-desc-content-special2"
                  style={{ marginBottom: "8px" }}
                >
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Baby USA Passport
                  </p>
                </div>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => navigate("/intakeForm")}
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
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FphoneIcon.png?alt=media&token=b7504a18-c636-4458-a13c-57959a105560"
          name="Book Free Call Surrogacy USA"
        />
      </div>
      <div className="lastBloc ">
        <h2>MediPocket World</h2>
        <div className="content shadowHome">
          <p>
            When facing life-changing illness, getting access to premium
            healthcare of USA experts, medical opinion, teatment, gives you
            peace of mind and confidence, when you need it the most to save the
            life
          </p>
        </div>
      </div>
    </div>
  );
}
