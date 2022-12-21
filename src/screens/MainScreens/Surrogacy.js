import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { IoMdArrowBack } from "react-icons/io";
import PrimaryButton from "../Components/PrimaryButton";

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

export default function Surrogacy() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="age-container">
      <div className="home-subContainer">
        {/* Header */}
        <div className="header-surrogacy">
          <div className="header-surrogacy-left" onClick={() => navigate(-1)}>
            <IoMdArrowBack className="header-surrogacy-iconStyle" />
          </div>
          <p className="header-surrogacy-text">Bring your baby home</p>
          <div style={{ width: "20px" }} />
        </div>
        {/* section 1 */}
        <div
          className="surrogacy-section1-container"
          style={{ marginTop: "40px" }}
        >
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadowHome">
              <img
                src={icons[0].img}
                alt={icons[0].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div className="surrogacy-section1-container-desc shadowHome">
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Infertility
                </p>
                <p className="surrogacy-section1-container-desc-title3">
                  Not getting pregnant despite having carefully timed,
                  unprotected sex for one year?
                </p>
                <p className="surrogacy-section1-container-desc-title2">
                  Treatment
                </p>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    IVF
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    ICSI
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    PGD
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Egg & Sperm
                  </p>
                </div>
                <p className="surrogacy-section1-container-desc-title4">
                  donation
                </p>
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
              style={{ marginTop: "-18px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Surrogacy
                </p>
                <p className="surrogacy-section1-container-desc-title3">
                  A process in which a woman carries and delivers a child for a
                  couple or individual
                </p>
                <div className="surrogacy-section1-container-desc-content-special">
                  <p className="surrogacy-section1-container-desc-title5">
                    99.3%
                  </p>
                  <p className="surrogacy-section1-container-desc-title2">
                    surrogacy
                  </p>
                </div>

                <p className="surrogacy-section1-container-desc-title2">
                  success rate
                </p>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Gender Selection
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Genetic Screening
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    USA Citizenship
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
        {/* Section 2 */}
        <div className="surrogacy-section2-container">
          <div className="surrogacy-section2-container-content">
            <p className="surrogacy-section2-container-title1">
              8 Steps of the Surrogacy Process in USA
            </p>
            <div className="green-underline" style={{ marginBottom: "30px" }} />
            {/* 1 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">1</p>
              <img
                src={icons[7].img}
                alt={icons[7].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Consultation with USA Surrogacy Expert
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 2 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">2</p>
              <img
                src={icons[8].img}
                alt={icons[8].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Match With a Surrogate
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 3 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">3</p>
              <img
                src={icons[9].img}
                alt={icons[9].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Sign Your Surrogacy Contract
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 4 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">4</p>
              <img
                src={icons[10].img}
                alt={icons[10].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Begin the Fertilization and Embryo Transfer Schedule
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 5 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">5</p>
              <img
                src={icons[11].img}
                alt={icons[11].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Gender Selection and Genetic Screening
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 6 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">6</p>
              <img
                src={icons[12].img}
                alt={icons[12].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Your Surrogate is Pregnant
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 7 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">7</p>
              <img
                src={icons[13].img}
                alt={icons[13].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                Meet Your Baby in USA
              </p>
            </div>
            <div className="surrogacy-section2-separator" />
            {/* 8 */}
            <div className="surrogacy-section2-container-row">
              <p className="surrogacy-section2-container-title2">8</p>
              <img
                src={icons[14].img}
                alt={icons[14].name}
                className="surrogacy-section2-container-icon"
              />
              <p className="surrogacy-section2-container-title2">
                USA Passport of Your Baby
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <PrimaryButton
          icon={process.env.PUBLIC_URL + "/icons/bti1.png"}
          name="Free USA Surrogacy Consultation"
        />
        {/* Section 4 */}
        <div
          className="surrogacy-section2-container"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div
            className="surrogacy-section2-container-content"
            style={{ padding: "0px" }}
          >
            <p
              className="surrogacy-section2-container-title1"
              style={{ marginBottom: "10px" }}
            >
              USA Surrogacy
            </p>
            <p className="surrogacy-section2-container-title1">
              for International Intended Parents
            </p>
            <div className="surrogacy-section4-container-content">
              <div className="surrogacy-section4-container-img-container shadowHome">
                <img
                  src={icons[2].img}
                  alt={icons[2].name}
                  className="surrogacy-section4-container-img"
                />
              </div>
              <div className="surrogacy-section4-container-desc shadowHome">
                <div className="surrogacy-section4-container-desc-content">
                  <p className="surrogacy-section4-container-desc-title1">
                    The United States is a well-known destination
                    for international surrogacy. California, and a handful of
                    other states, have settled legal processes in place that may
                    make these surrogacy agencies in the USA more desirable. And
                    with a decision as important as bringing a child into the
                    world, many intended parents are willing to travel around
                    the globe to ensure the best for their child and their
                    family. At MediPocket Smart Surrogacy, we understand your
                    situation, and our services cover everything you need to
                    have your well-deserved baby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <PrimaryButton
          icon={process.env.PUBLIC_URL + "/icons/bti2.png"}
          name="Let Us Bring Your Baby Home"
        />
        {/* Section 6 */}
        <div
          className="surrogacy-section2-container"
          style={{ marginTop: "20px", paddingBottom: "150px" }}
        >
          <div
            className="surrogacy-section2-container-content"
            style={{ padding: "0px" }}
          >
            <p
              className="surrogacy-section2-container-title1"
              style={{ marginBottom: "20px" }}
            >
              Parenthood is for Everyone
            </p>
          </div>
          <div className="surrogacy-section6-container-row">
            <div
              className="surrogacy-section6-container-row-item shadowHome"
              onClick={() => navigate("/intakeForm")}
            >
              <img
                src={icons[3].img}
                alt={icons[3].name}
                className="surrogacy-section6-container-row-item-icon"
              />
              <p className="surrogacy-section6-container-row-item-text">
                Married Couple
              </p>
            </div>
            <div
              className="surrogacy-section6-container-row-item shadowHome"
              onClick={() => navigate("/intakeForm")}
            >
              <img
                src={icons[4].img}
                alt={icons[4].name}
                className="surrogacy-section6-container-row-item-icon"
              />
              <p className="surrogacy-section6-container-row-item-text">
                Single Parent
              </p>
            </div>
            <div
              className="surrogacy-section6-container-row-item shadowHome"
              onClick={() => navigate("/intakeForm")}
            >
              <img
                src={icons[5].img}
                alt={icons[5].name}
                className="surrogacy-section6-container-row-item-icon"
              />
              <p className="surrogacy-section6-container-row-item-text">
                Same-Sex Couple
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
