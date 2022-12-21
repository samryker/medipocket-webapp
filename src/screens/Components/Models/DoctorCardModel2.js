import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAppointmentSuccess,
  updateDoctorAppointment,
} from "../../../redux/User/user.actions";

const mapState = ({ user }) => ({
  appointmentUpdateSuccess: user.appointmentUpdateSuccess,
});

export default function DoctorCardModel2(props) {
  const {
    name,
    desc,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
    navigate,
    type,
  } = props;
  var check = type === "2" ? true : false;
  const dispatch = useDispatch();
  const { appointmentUpdateSuccess } = useSelector(mapState);
  useEffect(() => {
    if (appointmentUpdateSuccess) navigate("/appointment");

    return () => {
      dispatch(resetAppointmentSuccess());
    };
  }, [appointmentUpdateSuccess]);
  const handleAppointment = () => {
    let appointment = {
      name: name,
      desc: desc,
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
    <>
      {check ? (
        <div className="doctorCard2">
          <div className="doctor-model-card shadow1" style={{ width: "100%" }}>
            <div className="imgContainer">
              <div className="doctor-card-right">
                {img.length > 0 && img.startsWith("http") ? (
                  <img src={img} alt="img" className="doctor-avatar2" />
                ) : (
                  <img
                    src={process.env.PUBLIC_URL + "/icons/placeholder.png"}
                    alt="img"
                    className="doctor-avatar2"
                  />
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div>
                <p
                  className="doctor-card-content-title1"
                  style={{ marginBottom: 20, fontSize: "14px !important" }}
                >
                  {name}
                </p>
                <p className="doctor-card-content-title2">{desc}</p>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 0,
                    marginBottom: "10px",
                  }}
                >
                  <p
                    className="doctor-card-content-title2"
                    style={{marginRight: 10, marginBottom: 0 }}
                  >
                    Fee:{" "}
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#f9b664",
                      margin: 0,
                      marginTop: "2px",
                    }}
                  >
                    {fees !== "--" ? `$${fees}` : fees}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 0,
                    marginBottom: "10px",
                  }}
                >
                  <p
                    className="doctor-card-content-title2"
                    style={{ marginRight: 10, marginBottom: 0 }}
                  >
                    Experience:{" "}
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#f660be",
                      margin: 0,
                      marginTop: "2px",
                    }}
                  >
                    {experience !== "--" ? `${experience}yrs+` : experience}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handleAppointment}
              className="doctor-bottom-card-right shadow1"
            >
              <p style={{ color: "#384062", fontWeight: "bold", fontSize: 12 }}>
                Request Consult
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
