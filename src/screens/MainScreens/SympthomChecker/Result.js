import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./styles.css";

const mapState = ({ user }) => ({
  doctorD: user.doctorD,
  age: user.age,
  gender: user.gender,
  pregnant: user.pregnant,
  country_id: user.country_id,
  region_id: user.region_id,
  describe: user.describe,
});

const DOCTOR_QUERY = gql`
  query {
    allDoctors {
      firstName
      lastName
      country
      state
      profilePicture
      specialization {
        specializationName
      }
      consultationFees
      info
      consultationTime
      experience
    }
  }
`;

export default function Result() {
  const navigate = useNavigate();
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const [modalVisible, setModalVisible] = useState(true);

  const { doctorD, age, gender, pregnant, country_id, region_id, describe } =
    useSelector(mapState);
  const [result, setResult] = useState(null);
  const [showNote, setShowNote] = useState(true);
  const [showMore, setShowMore] = useState(false);
  // 1
  const [diagnose1, setDiagnose1] = useState(null);
  const [spec1, setSpec1] = useState(null);
  const [spec1Flag, setSpec1Flag] = useState(null);
  // 2
  const [diagnose2, setDiagnose2] = useState(null);
  const [spec2, setSpec2] = useState(null);
  const [spec2Flag, setSpec2Flag] = useState(null);
  // 3
  const [diagnose3, setDiagnose3] = useState(null);
  const [spec3, setSpec3] = useState(null);
  const [spec3Flag, setSpec3Flag] = useState(null);
  // 4
  const [diagnose4, setDiagnose4] = useState(null);
  const [spec4, setSpec4] = useState(null);
  const [spec4Flag, setSpec4Flag] = useState(null);
  // 5
  const [diagnose5, setDiagnose5] = useState(null);
  const [spec5, setSpec5] = useState(null);
  const [spec5Flag, setSpec5Flag] = useState(null);
  // 6
  const [diagnose6, setDiagnose6] = useState(null);
  const [spec6, setSpec6] = useState(null);
  const [spec6Flag, setSpec6Flag] = useState(null);
  // 7
  const [diagnose7, setDiagnose7] = useState(null);
  const [spec7, setSpec7] = useState(null);
  const [spec7Flag, setSpec7Flag] = useState(null);
  // 8
  const [diagnose8, setDiagnose8] = useState(null);
  const [spec8, setSpec8] = useState(null);
  const [spec8Flag, setSpec8Flag] = useState(null);
  // 9
  const [diagnose9, setDiagnose9] = useState(null);
  const [spec9, setSpec9] = useState(null);
  const [spec9Flag, setSpec9Flag] = useState(null);
  // 10
  const [diagnose10, setDiagnose10] = useState(null);
  const [spec10, setSpec10] = useState(null);
  const [spec10Flag, setSpec10Flag] = useState(null);

  const [loadCanceled, setLoadCanceled] = useState(false);
  const [loadDone, setLoadDone] = useState(false);

  const [customDoctor1, setCustomDoctor1] = useState(null);
  const [customDoctor2, setCustomDoctor2] = useState(null);
  const getResult = async () => {
    setTimeout(() => {
      if (!loadDone) {
        console.log("here lien 114 ", loadDone);
        setLoadCanceled(true);
      }
    }, 10000);
    await fetch(
      `https://apisc.isabelhealthcare.com/v2/ranked_differential_diagnoses?specialties=28&dob=${age}&sex=${gender}&pregnant=${
        pregnant === "_" ? "" : pregnant
      }&region=${region_id}&country_id=${country_id}&querytext=${describe}&suggest=Suggest+Differe
    ntial+Diagnosis&flag=sortbyRW_advanced&searchType=0&web_service=json`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `U7IdoNJWWzV75NZGxVGJ8KE7p0W5A1m2`,
          // Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
          // Authorization: `${ISABELL_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setLoadDone(true);
        setResult(
          res.diagnoses_checklist.query_result_details.total_results_returned
        );
        if (res?.diagnoses_checklist?.diagnoses?.length > 9) {
          setDiagnose1(res.diagnoses_checklist.diagnoses[0].diagnosis_name);
          setSpec1(res.diagnoses_checklist.diagnoses[0].specialty);
          setSpec1Flag(
            res.diagnoses_checklist.diagnoses[0].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose2(res.diagnoses_checklist.diagnoses[1].diagnosis_name);
          setSpec2(res.diagnoses_checklist.diagnoses[1].specialty);
          setSpec2Flag(
            res.diagnoses_checklist.diagnoses[1].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose3(res.diagnoses_checklist.diagnoses[2].diagnosis_name);
          setSpec3(res.diagnoses_checklist.diagnoses[2].specialty);
          setSpec3Flag(
            res.diagnoses_checklist.diagnoses[2].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose4(res.diagnoses_checklist.diagnoses[3].diagnosis_name);
          setSpec4(res.diagnoses_checklist.diagnoses[3].specialty);
          setSpec4Flag(
            res.diagnoses_checklist.diagnoses[3].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose5(res.diagnoses_checklist.diagnoses[4].diagnosis_name);
          setSpec5(res.diagnoses_checklist.diagnoses[4].specialty);
          setSpec5Flag(
            res.diagnoses_checklist.diagnoses[4].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose6(res.diagnoses_checklist.diagnoses[5].diagnosis_name);
          setSpec6(res.diagnoses_checklist.diagnoses[5].specialty);
          setSpec6Flag(
            res.diagnoses_checklist.diagnoses[5].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose7(res.diagnoses_checklist.diagnoses[6].diagnosis_name);
          setSpec7(res.diagnoses_checklist.diagnoses[6].specialty);
          setSpec7Flag(
            res.diagnoses_checklist.diagnoses[6].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose8(res.diagnoses_checklist.diagnoses[7].diagnosis_name);
          setSpec8(res.diagnoses_checklist.diagnoses[7].specialty);
          setSpec8Flag(
            res.diagnoses_checklist.diagnoses[7].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose9(res.diagnoses_checklist.diagnoses[8].diagnosis_name);
          setSpec9(res.diagnoses_checklist.diagnoses[8].specialty);
          setSpec9Flag(
            res.diagnoses_checklist.diagnoses[8].red_flag === "false"
              ? false
              : true
          );
          //
          setDiagnose10(res.diagnoses_checklist.diagnoses[9].diagnosis_name);
          setSpec10(res.diagnoses_checklist.diagnoses[9].specialty);
          setSpec10Flag(
            res.diagnoses_checklist.diagnoses[9].red_flag === "false"
              ? false
              : true
          );
        }
      })
      .catch((error) => {
        console.error("line 224");
        console.error(error);
      });
  };
  const getDoctors = (data) => {
    let tab = [];
    for (let i = 0; i < data.allDoctors.length; i++) {
      if (
        data.allDoctors[i].firstName === "Dr. Robert" &&
        data.allDoctors[i].lastName === "Rose"
      ) {
        setCustomDoctor1({
          name:
            data.allDoctors[i].firstName + " " + data.allDoctors[i].lastName,
          desc:
            (data.allDoctors[i].state ? data.allDoctors[i].state : "--") +
            " ," +
            (data.allDoctors[i].country ? data.allDoctors[i].country : "--"),
          img: data.allDoctors[i].profilePicture
            ? data.allDoctors[i].profilePicture
            : "",
          patients: data.allDoctors[i].patients
            ? data.allDoctors[i].patients
            : "--",
          experience: data.allDoctors[i].experience
            ? data.allDoctors[i].experience
            : "--",
          speciality: data.allDoctors[i].specialization.specializationName,
          info: data.allDoctors[i].info ? data.allDoctors[i].info : "--",
          fees: data.allDoctors[i].consultationFees
            ? data.allDoctors[i].consultationFees
            : "--",
          duration: data.allDoctors[i].consultationTime
            ? data.allDoctors[i].consultationTime
            : "--",
        });
      }
      if (
        data.allDoctors[i].firstName === "Dr. Ari" &&
        data.allDoctors[i].lastName === "Gabayan"
      ) {
        setCustomDoctor2({
          name:
            data.allDoctors[i].firstName + " " + data.allDoctors[i].lastName,
          desc:
            (data.allDoctors[i].state ? data.allDoctors[i].state : "--") +
            " ," +
            (data.allDoctors[i].country ? data.allDoctors[i].country : "--"),
          img: data.allDoctors[i].profilePicture
            ? data.allDoctors[i].profilePicture
            : "",
          patients: data.allDoctors[i].patients
            ? data.allDoctors[i].patients
            : "--",
          experience: data.allDoctors[i].experience
            ? data.allDoctors[i].experience
            : "--",
          speciality: data.allDoctors[i].specialization.specializationName,
          info: data.allDoctors[i].info ? data.allDoctors[i].info : "--",
          fees: data.allDoctors[i].consultationFees
            ? data.allDoctors[i].consultationFees
            : "--",
          duration: data.allDoctors[i].consultationTime
            ? data.allDoctors[i].consultationTime
            : "--",
        });
      }
    }
    return tab;
  };
  const handleMoreDoctors = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    console.log("Data Now => ");
    console.log(data);
    if (data?.allDoctors) getDoctors(data);
  }, [data]);
  useEffect(() => {
    getResult();
  }, []);
  const handleMoreDoctors1 = () => {
    // navigation.navigate("doctorList", { filter: "*" });
    navigate("doctorList");
  };
  return (
    <div className="age-container" style={{ height: "100vh" }}>
      {/* subContainer */}
      <div className="age-subContainer">
        <div className="age-header">
          <div className="age-headerSub" onClick={() => navigate("/home")}>
            <img
              className="result-logo"
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989"
              alt="logo"
            />
          </div>
          <div className="age-titleContainer">
            <p className="age-title1 result-dr-ai-custom">DR. AI</p>
          </div>
          <div className="age_emptySpace"></div>
        </div>
      </div>

      {/* scroll */}
      <div className="age-scrollContainer">
        <div
          style={{
            alignItems: "center",
            width: "100%",
            marginBottom: 50,
            marginTop: 20,
          }}
        >
          <div className="result-header-container">
            <p className="age-title2">Possible Causes in just 2 minutes</p>
            <img
              className="result-light-icon"
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Flight.png?alt=media&token=027bc0a1-686f-4032-aea6-73575a09e183"
              alt="light"
            />
            <p className="age-title1">Possible Causes</p>
          </div>

          {showNote && (
            <div className="result-note shadow1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                className="result-red-flag-icon"
                alt="img"
              />
              <div
                className="result-note-close"
                onClick={() => setShowNote(false)}
              >
                <AiOutlineCloseCircle className="result-closeIcon" />
              </div>
              <p className="age-title1">Note</p>
              <p className="result-note-parag">
                Red Flag conditions are serious and need to be treated in
                Emergency Room or Urgent Care
              </p>
            </div>
          )}
          {diagnose1 && data ? (
            <>
              <div className="result-diagnose-container">
                <div className="result-diagnose-container">
                  <p className="result-title3">
                    {diagnose1}{" "}
                    {spec1Flag && (
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                        className="result-red-flag"
                        alt="red-flag"
                      />
                    )}
                  </p>
                </div>
                <p className="result-title4">{spec1}</p>
              </div>
              <div className="result-diagnose-container">
                <div className="result-diagnose-container">
                  <p className="result-title3">
                    {diagnose2}
                    {spec2Flag && (
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                        className="result-red-flag"
                        alt="red-flag"
                      />
                    )}
                  </p>
                </div>
                <p className="result-title4">{spec2}</p>
              </div>
              <div className="result-diagnose-container">
                <div className="result-diagnose-container">
                  <p className="result-title3">
                    {diagnose3}{" "}
                    {spec3Flag && (
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                        className="result-red-flag"
                        alt="red-flag"
                      />
                    )}
                  </p>
                </div>
                <p className="result-title4">{spec3}</p>
              </div>
              {showMore && (
                <>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose4}{" "}
                        {spec4Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec4}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose5}{" "}
                        {spec5Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec5}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose6}{" "}
                        {spec6Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec6}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose7}{" "}
                        {spec7Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec7}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose8}{" "}
                        {spec8Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec8}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose9}{" "}
                        {spec9Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec9}</p>
                  </div>
                  <div className="result-diagnose-container">
                    <div className="result-diagnose-container">
                      <p className="result-title3">
                        {diagnose10}{" "}
                        {spec10Flag && (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b"
                            className="result-red-flag"
                            alt="red-flag"
                          />
                        )}
                      </p>
                    </div>
                    <p className="result-title4">{spec10}</p>
                  </div>
                </>
              )}
              {!showMore ? (
                <div onClick={handleMoreDoctors} className="result-relevant">
                  <p className="result-relevant-title">
                    See More Possible Causes
                  </p>
                </div>
              ) : (
                <div onClick={handleMoreDoctors} className="result-relevant">
                  <p className="result-relevant-title">
                    See Less Possible Causes
                  </p>
                </div>
              )}
              {!doctorD && (
                <>
                  <div style={{ marginVertical: 20 }}>
                    <p className="result-title5">
                      Consult Our Top USA Specialists
                    </p>
                  </div>
                  <p className="result-title3">Cardiologist</p>
                  {/* {customDoctor1 && (
                    <DoctorCardModel
                      name={customDoctor1.name}
                      desc={customDoctor1.desc}
                      img={customDoctor1.img}
                      patients={customDoctor1.patients}
                      experience={customDoctor1.experience}
                      speciality={customDoctor1.speciality}
                      info={customDoctor1.info}
                      fees={customDoctor1.fees}
                      duration={customDoctor1.duration}
                      bg="0"
                      navigation={navigation}
                    />
                  )} */}
                  <p className="result-title3">Oncologist</p>
                  {/* {customDoctor2 && (
                    <DoctorCardModel
                      name={customDoctor2.name}
                      desc={customDoctor2.desc}
                      img={customDoctor2.img}
                      patients={customDoctor2.patients}
                      experience={customDoctor2.experience}
                      speciality={customDoctor2.speciality}
                      info={customDoctor2.info}
                      fees={customDoctor2.fees}
                      duration={customDoctor2.duration}
                      bg="0"
                      navigation={navigation}
                    />
                  )} */}
                  <div onClick={handleMoreDoctors1} className="result-relevant">
                    <p className="result-relevant-title">See more doctors</p>
                  </div>
                </>
              )}
            </>
          ) : loadCanceled ? (
            <div className="result-later-container">
              <p className="result-later-text">
                Oops ! We are still searching for your diagnosis .{"\n"} Please
                try again in sometime
              </p>
            </div>
          ) : (
            <div className="result-loader-container">
              {/* <ActivityIndicator size="large" color={COLORS.blueBtn} /> */}
              <p className="result-title4">Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
