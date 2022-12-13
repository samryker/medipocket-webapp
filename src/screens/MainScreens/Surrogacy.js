import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./../Components/Header";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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

export default function Surrogacy() {
  const navigate = useNavigate();
  return (
    <div className="age-container">
      <div className="home-subContainer">
        <Header
          navigate={navigate}
          bg="#f0f4f7"
          isHome={false}
          isDoctorList={false}
          isProfile={false}
          isSurrogacy={true}
        />
        {/* section 1 */}
        <div className="surrogacy-section1-container">
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadow1">
              <img
                src={icons[0].img}
                alt={icons[0].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div className="surrogacy-section1-container-desc shadow1">
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
            <div className="surrogacy-section1-container-img-container shadow1">
              <img
                src={icons[1].img}
                alt={icons[1].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadow1"
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
            <div className="green-underline" />
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
        <div>{/* btn goes here */}</div>
        {/* Section 4 */}
        <div
          className="surrogacy-section2-container"
          style={{ marginTop: "0px", marginBottom: "20px" }}
        >
          <div className="surrogacy-section2-container-content">
            <p
              className="surrogacy-section2-container-title1"
              style={{ marginBottom: "10px" }}
            >
              USA Surrogacy
            </p>
            <p
              className="surrogacy-section2-container-title1"
              style={{ marginBottom: "40px" }}
            >
              for International Intended Parents
            </p>
            <div className="surrogacy-section1-container-content">
              <div className="surrogacy-section4-container-img-container shadow1">
                <img
                  src={icons[2].img}
                  alt={icons[2].name}
                  className="surrogacy-section4-container-img"
                />
              </div>
              <div className="surrogacy-section4-container-desc shadow1">
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
        <div>{/* btn goes here */}</div>
        {/* Section 6 */}
        <div
          className="surrogacy-section2-container"
          style={{ marginTop: "0px", marginBottom: "100px" }}
        >
          <div className="surrogacy-section2-container-content">
            <p
              className="surrogacy-section2-container-title1"
              style={{ marginBottom: "40px" }}
            >
              Parenthood is for Everyone
            </p>
          </div>
          <div className="surrogacy-section6-container-row">
            <div
              className="surrogacy-section6-container-row-item shadow1"
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
              className="surrogacy-section6-container-row-item shadow1"
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
              className="surrogacy-section6-container-row-item shadow1"
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
