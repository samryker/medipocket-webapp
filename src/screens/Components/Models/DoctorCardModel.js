import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAppointmentSuccess,
  updateDoctorAppointment,
} from "../../../redux/User/user.actions";
const mapState = ({ user }) => ({
  appointmentUpdateSuccess: user.appointmentUpdateSuccess,
});

export default function DoctorCardModel(props) {
  const {
    name,
    desc,
    country,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
    navigate,
    bg,
  } = props;

  var check = false;
  if (bg === "0") check = true;
  const dispatch = useDispatch();
  const { appointmentUpdateSuccess } = useSelector(mapState);
  useEffect(() => {
    if (appointmentUpdateSuccess) navigate("appointment");

    return () => {
      dispatch(resetAppointmentSuccess());
    };
  }, [appointmentUpdateSuccess]);
  const handleRedirect = () => {
    let appointment = {
      name: name,
      desc: desc,
      country: country,
      img: img,
      patients: patients,
      experience: experience,
      speciality: speciality,
      info: info,
      fees: fees,
      duration: duration,
    };
    dispatch(updateDoctorAppointment(appointment));
  };
  return (
    <div className="card-container">
      <div
        className={
          check ? "doctor-model-card1 shadow1" : "doctor-model-card shadow1"
        }
      >
        {check ? (
          <>
            <div className="doctor-card-content">
              <div className="doctor-card-left">
                <p
                  onClick={handleRedirect}
                  className="doctor-card-content-title1"
                >
                  {name}
                </p>
                <p className="doctor-card-content-title2">{desc}</p>
                <p className="doctor-card-content-title2">{speciality}</p>
              </div>
              <div className="doctor-card-right">
                <div onClick={handleRedirect}>
                  {img.length > 0 && img.startsWith("http") ? (
                    <img src={img} alt="img" className="doctor-avatar" />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + "/icons/placeholder.png"}
                      alt="img"
                      className="doctor-avatar"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="doctor-bottom-card">
              <p className="doctor-bottom-card-left">
                {experience !== "--" ? `${experience}yrs+` : experience}
              </p>
              <div
                onClick={handleRedirect}
                className="doctor-bottom-card-right shadow1"
              >
                <p className="doctor-btn-style-text">Request Consult</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="doctor-card-content">
              <div className="doctor-card-left">
                <p
                  onClick={handleRedirect}
                  className="doctor-card-content-title1"
                >
                  {name}
                </p>
                <p className="doctor-card-content-title2">{desc}</p>
                <p className="doctor-card-content-title2">{speciality}</p>
              </div>
              <div className="doctor-card-right">
                <div onClick={handleRedirect}>
                  {img.length > 0 && img.startsWith("http") ? (
                    <img src={img} alt="img" className="doctor-avatar" />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + "/icons/placeholder.png"}
                      alt="img"
                      className="doctor-avatar"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="doctor-bottom-card" style={{ marginTop: "20px" }}>
              <div className="fees-box shadow1">
                <p className="doctor-card-content-title2">Fee</p>
                <p
                  className="boxNb"
                  style={{ color: "#f9b664", marginBottom: "10px" }}
                >
                  {fees ? `$${fees}` : "--"}
                </p>
              </div>
              <div className="fees-box shadow1">
                <p className="doctor-card-content-title2">Experience</p>
                <p
                  className="boxNb"
                  style={{ color: "#f660be", marginBottom: "10px" }}
                >
                  {experience !== "--" ? `${experience}yrs+` : experience}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
