import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import DoctorAboutCard from "../../Components/Models/DoctorAboutCard";
import DoctorCardModel from "../../Components/Models/DoctorCardModel";
import "./styles.css";

const mapState = ({ user }) => ({
  appointment: user.appointment,
});

export default function Appointment() {
  const { appointment } = useSelector(mapState);
  const navigate = useNavigate();
  const handleIntake = () => {
    navigate("/intakeForm");
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div
      className="age-container"
      style={{ paddingBottom: "150px !important" }}
    >
      {/* subContainer */}
      <div className="age-subContainer">
        <div className="age-header">
          <div
            className="age-headerSub"
            onClick={() => navigate("/doctorList")}
          >
            <FaArrowLeft className="age-backIcon" />
          </div>
          <div className="age-titleContainer">
            <p className="usa-specialist">Doctor's Profile</p>
          </div>
          <div className="age_emptySpace"></div>
        </div>
      </div>
      <DoctorCardModel
        name={appointment.name}
        desc={appointment.desc}
        speciality={appointment.speciality}
        experience={appointment.experience}
        patients={appointment.patients}
        fees={appointment.fees}
        img={appointment.img}
        bg="1"
        navigate={navigate}
      />
      <DoctorAboutCard name="About Doctor" desc={appointment.info} />
      <div style={{ paddingBottom: "100px" }}>
        <div
          onClick={handleIntake}
          className="doctors-relevant"
          style={{
            backgroundColor: "#2758E4",
            cursor: "pointer",
          }}
        >
          <p className="doctors-relevant-text">Book Appointment</p>
        </div>
      </div>
    </div>
  );
}
