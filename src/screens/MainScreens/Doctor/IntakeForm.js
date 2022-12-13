import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./styles.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../firebase/utils";

const mapState = ({ user }) => ({
  doctorName: user.doctorName,
});

export default function IntakeForm() {
  const navigate = useNavigate();
  const { doctorName } = useSelector(mapState);
  const [indicatorLoad, setIndicatorLoad] = useState(false);
  const [help, setHelp] = useState(false);
  const [help2, setHelp2] = useState(false);
  const [modalHome, setModalHome] = useState(false);
  const [modalBack, setModalBack] = useState(false);

  const [codeFromUser, setCodeFromUser] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [errorsOfUser, setErrorsOfUser] = useState("");
  // f2
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("+21629738044");
  // f3
  const [f3, setF3] = useState("");
  // f4
  // const [f4, setF4] = useState([]);
  const [f4_1, setF4_1] = useState(false);
  const [f4_2, setF4_2] = useState(false);
  const [f4_3, setF4_3] = useState(false);
  const [f4_4, setF4_4] = useState(false);
  const [f4_5, setF4_5] = useState(false);
  const [f4_6, setF4_6] = useState(false);
  const [f4_7, setF4_7] = useState(false);
  const [f4_8, setF4_8] = useState(false);
  const [f4_9, setF4_9] = useState(false);
  const [f4_10, setF4_10] = useState(false);
  const [f4_11, setF4_11] = useState(false);
  const [f4_12, setF4_12] = useState(false);
  // Not Used
  const [f4_13, setF4_13] = useState(false);
  const [f4_14, setF4_14] = useState(false);
  const [f4_15, setF4_15] = useState(false);
  const [f4_16, setF4_16] = useState(false);
  // Not Used
  const [f4_17, setF4_17] = useState(false);
  const [f4_18, setF4_18] = useState(false);
  const [f4_19, setF4_19] = useState(false);
  const [f4_20, setF4_20] = useState(false);
  const [f4_21, setF4_21] = useState(false);
  const [f4_22, setF4_22] = useState(false);
  const [f4_23, setF4_23] = useState(false);
  const [f4_24, setF4_24] = useState(false);
  const [f4_other, setF4_other] = useState("");
  // Medication
  const [medication, setMedication] = useState("");
  // Allergies
  const [allergies, setAllergies] = useState("");

  // f5
  // f5_1
  const [f5_1_1, setF5_1_1] = useState(false);
  const [f5_1_2, setF5_1_2] = useState(false);
  const [f5_1_3, setF5_1_3] = useState(false);
  const [f5_1_4, setF5_1_4] = useState(false);
  // f5_3
  const [f5_3_1, setF5_3_1] = useState(false);
  const [f5_3_2, setF5_3_2] = useState(false);
  const [f5_3_3, setF5_3_3] = useState(false);
  const [f5_3_4, setF5_3_4] = useState(false);

  // f5_5
  const [f5_5_1, setF5_5_1] = useState(false);
  const [f5_5_2, setF5_5_2] = useState(false);
  const [f5_5_3, setF5_5_3] = useState(false);
  const [f5_5_4, setF5_5_4] = useState(false);
  // f6
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [brother, setBrother] = useState("");
  const [sister, setSister] = useState("");
  // Top 5 Questions
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  // Appointment
  const [appointment1, setAppointment1] = useState(false);
  const [appointment2, setAppointment2] = useState(false);
  const [appointment3, setAppointment3] = useState(false);
  const [appointment4, setAppointment4] = useState(false);
  //   Error
  const [nameError, setNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // f4
  const handleOtherf4 = () => {
    setF4_24(!f4_24);
  };
  // f5
  // f5_1
  const handlef5_1_1 = () => {
    setF5_1_1(true);
    setF5_1_2(false);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  const handlef5_1_2 = () => {
    setF5_1_1(false);
    setF5_1_2(true);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  // f5_3
  const handlef5_3_1 = () => {
    setF5_3_1(true);
    setF5_3_2(false);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_2 = () => {
    setF5_3_1(false);
    setF5_3_2(true);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_3 = () => {
    setF5_3_1(false);
    setF5_3_2(false);
    setF5_3_3(true);
    setF5_3_4(false);
  };
  // f5_5
  const handlef5_5_1 = () => {
    setF5_5_1(true);
    setF5_5_2(false);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_2 = () => {
    setF5_5_1(false);
    setF5_5_2(true);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_3 = () => {
    setF5_5_1(false);
    setF5_5_2(false);
    setF5_5_3(true);
    setF5_5_4(false);
  };
  // Appoitment
  const handleAppointment1 = () => {
    setAppointment1(!appointment1);
  };
  const handleAppointment2 = () => {
    setAppointment2(!appointment2);
  };
  const handleAppointment3 = () => {
    setAppointment3(!appointment3);
  };
  const handleAppointment4 = () => {
    setAppointment4(!appointment4);
  };
  // Submit
  const handleSubmit = async () => {
    setIndicatorLoad(true);
    // f4
    let f4 = "";
    if (f4_1) f4 += "Anemia, ";
    if (f4_2) f4 += "Asthma, ";
    if (f4_3) f4 += "Arthritis, ";
    if (f4_4) f4 += "Cancer, ";
    if (f4_5) f4 += "Gout , ";
    if (f4_6) f4 += "Diabetes, ";
    if (f4_7) f4 += "Emotional Disorder, ";
    if (f4_8) f4 += "Epilepsy Seizures, ";
    if (f4_9) f4 += "Fainting Spells, ";
    if (f4_10) f4 += "Gallstones, ";
    if (f4_11) f4 += "Heart Disease, ";
    if (f4_12) f4 += "Heart Attack, ";
    if (f4_17) f4 += "Thyroid Problems, ";
    if (f4_18) f4 += "Tuberculosis, ";
    if (f4_19) f4 += "Venereal Disease, ";
    if (f4_20) f4 += "Neurological Disorders, ";
    if (f4_21) f4 += "Disorders, ";
    if (f4_22) f4 += "Lung Disease, ";
    if (f4_24) f4 += f4_other;
    // exercices
    let exercices = "";
    if (f5_1_1) exercices = "Never";
    if (f5_1_2) exercices = "Regularly";
    // alcohol
    let alcohol = "";
    if (f5_3_1) alcohol = "Don’t drink";
    if (f5_3_2) alcohol = "Occasional";
    if (f5_3_3) alcohol = "Daily";
    // smoke
    let smoke = "";
    if (f5_5_1) smoke = "Never";
    if (f5_5_2) smoke = "Stopped";
    if (f5_5_3) smoke = "Daily";
    let appointment = "";
    if (appointment1) appointment += "ASAP";
    if (appointment2) appointment += "4-7 Days";
    if (appointment3) appointment += "Morning India time: 5.30am - 10am";
    if (appointment4) appointment += "Evening India time: 5.30pm - 12am";
    if (phone.length === 0 || f3.length === 0) {
      setErrorsOfUser(
        "Phone Number and Reason for consultation are required! PLease try again!"
      );
      // setHelp2(true);
    } else {
      await fetch("https://app.medipocket.world/intake_form/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type_form: "intake_form",
          doc_name: doctorName,
          name: name,
          birth: birth,
          gender: gender,
          phone_number: phone,
          patient_medical_history: f4,
          father: father,
          mother: mother,
          brother: brother,
          sister: sister,
          comments: "",
          current_medication: medication,
          list_allergies: allergies,
          healthy_unhealthy: `Exercices: ${exercices}, Alcohol ${alcohol}, Smoke: ${smoke}.`,
          reason_for_consultation: f3,
          question1: q1,
          question2: q2,
          question3: q3,
          appointment: appointment,
        }),
      })
        .then((response) => response.text())
        .then((res) => {
          setIndicatorLoad(false);
          setHelp(true);
          // navigation.navigate("homePage");
        })
        .catch((err) => {
          setIndicatorLoad(false);
          console.log("==============================================");
          console.log("Error =>", err);
        });
      console.log("DONE");
    }

    setIndicatorLoad(false);
  };

  const checkCode = (confirmationResult) => {
    confirmationResult
      .confirm(codeFromUser)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  const onSignInSubmit = (response) => {
    try {
      console.log("Response ::::::", response);
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          checkCode(confirmationResult);
        })
        .catch((error) => {
          console.log("Error; SMS not sent", error);
        });
    } catch (error) {
      console.log("error line 265 => ", error);
    }
  };

  const handleVerifyPhone = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("response line 297 => ", response);
          onSignInSubmit(response);
        },
      },
      auth
    );
  };

  return (
    <div className="age-container">
      {/* subContainer */}
      <div className="age-subContainer">
        <div className="age-header">
          <div className="age-headerSub" onClick={() => navigate(-1)}>
            <FaArrowLeft className="age-backIcon" />
          </div>
          <div className="age-titleContainer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989"
              className="intake-imgStyle"
              alt="logo"
            />
          </div>
          <div className="age_emptySpace"></div>
        </div>
      </div>
      {/* scroll */}
      <div className="age-scrollContainer">
        <div className="intake-card shadow1">
          <p className="intake-card-title">Telemedicine Patient</p>
          <p className="intake-card-title">Intake Form</p>
        </div>
        <div className="intake-card shadow1">
          <p className="intake-card-title">Consultation for</p>
          <div className="intake-inputs-container">
            <div className="intake-input-container">
              <input
                className="intake-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {nameError.length === 0 ? null : (
                <p className="intake-error">{nameError}</p>
              )}
            </div>
            <div className="intake-input-container">
              <input
                className="intake-input"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                placeholder="Age"
              />
              {birthError.length === 0 ? null : (
                <p className="intake-error">{birthError}</p>
              )}
            </div>
            <div className="intake-input-container">
              <input
                className="intake-input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
              />
              {genderError.length === 0 ? null : (
                <p className="intake-error">{genderError}</p>
              )}
            </div>
            <div
              className="intake-input-container"
              style={{ position: "relative" }}
            >
              {errorsOfUser.length > 0 ? (
                <>
                  <input
                    className="intake-input intake-error-field"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="PhoneNumber"
                  />
                  <div style={{ width: "100%" }}>
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        margin: "5px 0",
                      }}
                    >
                      * Phone Number and verification Required !
                    </p>
                  </div>
                </>
              ) : (
                <input
                  className="intake-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="PhoneNumber"
                />
              )}

              <div
                id="sign-in-button"
                style={{
                  width: "80px",
                  backgroundColor: "#384062",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  position: "absolute",
                  top: errorsOfUser.length > 0 ? 22 : 20,
                  right: 4,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={handleVerifyPhone}
              >
                <p
                  style={{
                    fontSize: 16,
                    color: "#ffffff",
                    lineHeight: "6px",
                    padding: "0px",
                  }}
                >
                  Verify
                </p>
              </div>
              {phoneVerified && (
                <input
                  className="intake-input"
                  value={codeFromUser}
                  onChange={(e) => setCodeFromUser(e.target.value)}
                  placeholder="Code"
                />
              )}
              {phoneError.length === 0 ? null : (
                <p className="intake-error">{phoneError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="intake-card shadow1">
          <p className="intake-card-title">Patient Medical History</p>
          <p className="intake-card-title3">
            Have you ever had (Please check all that apply)
          </p>
          <div className="intake-inputs-container">
            {/* Line 1 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_1}
                  onChange={() => setF4_1(!f4_1)}
                />
                <p className="intake-checkbox-title">Anemia</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_2}
                  onChange={() => setF4_2(!f4_2)}
                />
                <p className="intake-checkbox-title">Asthma</p>
              </div>
            </div>
            {/* Line 2 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_3}
                  onChange={() => setF4_3(!f4_3)}
                />
                <p className="intake-checkbox-title">Arthritis</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_4}
                  onChange={() => setF4_4(!f4_4)}
                />
                <p className="intake-checkbox-title">Cancer</p>
              </div>
            </div>
            {/* Line 3 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_5}
                  onChange={() => setF4_5(!f4_5)}
                />
                <p className="intake-checkbox-title">Gout</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_6}
                  onChange={() => setF4_6(!f4_6)}
                />
                <p className="intake-checkbox-title">Diabetes</p>
              </div>
            </div>
            {/* Line 4 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_7}
                  onChange={() => setF4_7(!f4_7)}
                />
                <p className="intake-checkbox-title">Emotional Disorder</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_8}
                  onChange={() => setF4_8(!f4_8)}
                />
                <p className="intake-checkbox-title">Epilepsy Seizures</p>
              </div>
            </div>
            {/* Line 5 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_9}
                  onChange={() => setF4_9(!f4_9)}
                />
                <p className="intake-checkbox-title">Fainting Spells</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_10}
                  onChange={() => setF4_10(!f4_10)}
                />
                <p className="intake-checkbox-title">Gallstones</p>
              </div>
            </div>
            {/* Line 6 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_11}
                  onChange={() => setF4_11(!f4_11)}
                />
                <p className="intake-checkbox-title">Heart Disease</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_12}
                  onChange={() => setF4_12(!f4_12)}
                />
                <p className="intake-checkbox-title">Heart Attack</p>
              </div>
            </div>
            {/* Line 9 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_17}
                  onChange={() => setF4_17(!f4_17)}
                />
                <p className="intake-checkbox-title">Thyroid Problems</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_18}
                  onChange={() => setF4_18(!f4_18)}
                />
                <p className="intake-checkbox-title">Tuberculosis</p>
              </div>
            </div>
            {/* Line 10 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_19}
                  onChange={() => setF4_19(!f4_19)}
                />
                <p className="intake-checkbox-title">Venereal Disease</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_20}
                  onChange={() => setF4_20(!f4_20)}
                />
                <p className="intake-checkbox-title">Neurological Disorders</p>
              </div>
            </div>
            {/* Line 11 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_21}
                  onChange={() => setF4_21(!f4_21)}
                />
                <p className="intake-checkbox-title">Disorders</p>
              </div>
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_22}
                  onChange={() => setF4_22(!f4_22)}
                />
                <p className="intake-checkbox-title">Lung Disease</p>
              </div>
            </div>
            {/* Line 12 */}
            <div className="intake-input-container22">
              <div className="intake-checkbox-container">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f4_24}
                  onChange={() => handleOtherf4()}
                />
                <p className="intake-checkbox-title">Other</p>
              </div>
            </div>
            {f4_24 && (
              <div className="intake-input-other">
                <input
                  className="intake-input"
                  value={f4_other}
                  onChange={(e) => setF4_other(e.target.value)}
                  placeholder="Please type your medical history here"
                />
              </div>
            )}
          </div>
        </div>
        {/* Patient Family History */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Patient Family History</p>
          <div className="intake-inputs-container">
            <p className="intake-card-title4">
              Please tell if your family member suffer(ed) from any health
              conditions
            </p>
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Father
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={father}
                onChange={(e) => setFather(e.target.value)}
                placeholder="Father"
              />
            </div>
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Mother
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={mother}
                onChange={(e) => setMother(e.target.value)}
                placeholder="Mother"
              />
            </div>
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Brother (s)
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={brother}
                onChange={(e) => setBrother(e.target.value)}
                placeholder="Brother (s)"
              />
            </div>
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Sister (s)
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={sister}
                onChange={(e) => setSister(e.target.value)}
                placeholder="Sister (s)"
              />
            </div>
          </div>
        </div>
        {/* Current Medications */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Current Medications</p>
          <div className="intake-inputs-container">
            <input
              className="intake-input"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              placeholder="Please list all medications currently taking"
            />
          </div>
        </div>
        {/* Allergies */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Allergies</p>
          <div className="intake-inputs-container">
            <input
              className="intake-input"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="Any Food, Medicine, Seasonal allergies"
            />
          </div>
        </div>
        {/* Healthy & Unhealthy Habits */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Healthy & Unhealthy Habits</p>
          <div className="intake-inputs-container">
            <div className="intake-input-container">
              <p className="intake-card-title4">Exercise</p>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_1_2}
                  onChange={handlef5_1_2}
                />
                <p className="intake-checkbox-title">Regularly</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_1_1}
                  onChange={handlef5_1_1}
                />
                <p className="intake-checkbox-title">Never</p>
              </div>
              <p className="intake-card-title4">Alcohol Consumption</p>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_3_1}
                  onChange={handlef5_3_1}
                />
                <p className="intake-checkbox-title">Don’t drink</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_3_2}
                  onChange={handlef5_3_2}
                />
                <p className="intake-checkbox-title">Occasional</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_3_3}
                  onChange={handlef5_3_3}
                />
                <p className="intake-checkbox-title">Daily</p>
              </div>
              <p className="intake-card-title4">Smoke</p>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_5_1}
                  onChange={handlef5_5_1}
                />
                <p className="intake-checkbox-title">Daily</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_5_2}
                  onChange={handlef5_5_2}
                />
                <p className="intake-checkbox-title">Stopped</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={f5_5_3}
                  onChange={handlef5_5_3}
                />
                <p className="intake-checkbox-title">Daily</p>
              </div>
            </div>
          </div>
        </div>
        {/* Reason for Consultation */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Reason For Consulting The Doctor</p>
          <div className="intake-inputs-container">
            {errorsOfUser.length > 0 ? (
              <>
                <input
                  className="intake-input intake-error-field"
                  value={f3}
                  onChange={(e) => setF3(e.target.value)}
                  placeholder="Reason for consulting the doctor"
                />
                <div style={{ width: "100%" }}>
                  <p
                    style={{ color: "red", fontSize: "10px", margin: "5px 0" }}
                  >
                    * The reason for consulting the doctor is Required !
                  </p>
                </div>
              </>
            ) : (
              <input
                className="intake-input"
                value={f3}
                onChange={(e) => setF3(e.target.value)}
                placeholder="Reason for consulting the doctor"
              />
            )}
          </div>
        </div>
        {/* Top 3 questions */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">
            Top 3 questions for your specialists?
          </p>
          <div className="intake-inputs-container">
            {/* Question 1 */}
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Question 1
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
                placeholder="Question 1"
              />
            </div>
            {/* Question 2 */}
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Question 2
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={q2}
                onChange={(e) => setQ2(e.target.value)}
                placeholder="Question 2"
              />
            </div>
            {/* Question 3 */}
            <div className="intake-input-container">
              <p className="intake-card-title4 intake-input-with-label-title">
                Question 3
              </p>
              <input
                className="intake-input intake-input-with-label"
                value={q3}
                onChange={(e) => setQ3(e.target.value)}
                placeholder="Question 3"
              />
            </div>
          </div>
        </div>
        {/* Appointment time slot preference */}
        <div className="intake-card shadow1">
          <p className="intake-card-title">Appointment time slot preference</p>
          <div className="intake-inputs-container">
            <div className="intake-input-container">
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={appointment1}
                  onChange={handleAppointment1}
                />
                <p className="intake-checkbox-title">ASAP</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={appointment2}
                  onChange={handleAppointment2}
                />
                <p className="intake-checkbox-title">4-7 Days</p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={appointment3}
                  onChange={handleAppointment3}
                />
                <p className="intake-checkbox-title">
                  Morning India time: 5.30am - 10am
                </p>
              </div>
              <div className="intake-checkbox-container intake-checkbox-container-margin">
                <input
                  type={"checkbox"}
                  color={"#40e0d0"}
                  className="intake-checkbox"
                  value={appointment4}
                  onChange={handleAppointment4}
                />
                <p className="intake-checkbox-title">
                  Evening India time: 5.30pm - 12am
                </p>
              </div>
            </div>
          </div>
        </div>
        {errorsOfUser.length > 0 && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "red", fontSize: "14px", margin: "20px" }}>
              {errorsOfUser}{" "}
            </p>
          </div>
        )}
        <div
          className={"submit-container2 submit1"}
          style={{ cursor: "pointer" }}
          onClick={handleSubmit}
        >
          <p className="submit-text">Submit</p>
        </div>
      </div>
    </div>
  );
}
