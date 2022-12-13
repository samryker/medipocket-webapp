import React from "react";
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
  return (
    <div className="age-container">
      <div className="home-subContainer">
        <Header
          navigate={navigate}
          bg="#f0f4f7"
          isHome={false}
          isDoctorList={false}
          isProfile={true}
          isSurrogacy={false}
        />
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
      <div
        onClick={handleIntake}
        className="doctors-relevant"
        style={{ backgroundColor: "#2758E4", cursor: "pointer" }}
      >
        <p className="doctors-relevant-text">Book Appointment</p>
      </div>
    </div>
  );
}
