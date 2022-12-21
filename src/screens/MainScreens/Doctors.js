import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { gql, useQuery } from "@apollo/client";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilterSuccess,
  updateDoctorFilter,
} from "../../redux/User/user.actions";
import DoctorCardModel from "../Components/Models/DoctorCardModel";

const mapState = ({ user }) => ({
  filterUpdateSuccess: user.filterUpdateSuccess,
});

const DOCTOR_QUERY = gql`
  query {
    allDoctors {
      firstName
      lastName
      country
      state
      city
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
var tab = [];

export default function Doctors() {
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const [doctors, setDoctors] = useState(null);
  const [search, setSearch] = useState("");
  const [showNoDoctor, setShowNoDoctor] = useState(false);
  const navigate = useNavigate();
  const { filterUpdateSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('data =>>>>',data)
    console.log('loading =>>>>',loading)
  }, [data, loading])
  
  useEffect(() => {
    var timeleft = 10;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0 ) {
        setShowNoDoctor(true);
        clearInterval(downloadTimer);
      }
      timeleft -= 1;
    }, 1000);
  }, []);
  useEffect(() => {
    if (filterUpdateSuccess) navigate("/doctorList");
    return () => {
      dispatch(resetFilterSuccess());
    };
  }, [filterUpdateSuccess]);

  const getDoctors = () => {
    if (data) {
      for (let i = 0; i < 3; i++) {
        tab.push({
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
  };
  useEffect(() => {
    if (data) {
      getDoctors();
      setDoctors(tab);
    }
  }, [data]);

  const handleLungs = () => {
    dispatch(updateDoctorFilter("Oncology"));
  };
  const handleTooth = () => {
    dispatch(updateDoctorFilter("Endocrinology"));
  };
  const handleDermatologist = () => {
    dispatch(updateDoctorFilter("Cardiology"));
  };
  const handleHeart = () => {
    dispatch(updateDoctorFilter("Rheumatology"));
  };
  const handleBrain = () => {
    dispatch(updateDoctorFilter("Fertility"));
  };
  const handlePsychology = () => {
    dispatch(updateDoctorFilter("Surgery"));
  };
  const handleUrology = () => {
    dispatch(updateDoctorFilter("Mental"));
  };
  const handleOthers = () => {
    dispatch(updateDoctorFilter("*"));
  };
  const handleMoreDoctors = () => {
    dispatch(updateDoctorFilter("8"));
  };
  return (
    <div className="age-container">
      <div className="home-subContainer">
        <Header
          navigate={navigate}
          bg="#f0f4f7"
          isHome={false}
          isDoctorList={false}
          isProfile={false}
          isSurrogacy={false}
        />
        {/* scroll */}
        <div className="age-scrollContainer">
          <div className="intake-card shadow1">
            <p className="doctors-card-title">Best USA</p>
            <p className="doctors-card-title">Specialists</p>
            <div className="doctors-horizontal-list">
              <div className="doctors-list-icons">
                {/* lungs */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleLungs}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/lungs.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* thyroid */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleTooth}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/thyroid.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* heart */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleDermatologist}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/heart.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* joints */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleHeart}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/joints.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* reproductive */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleBrain}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/icons/specialities/reproductive.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* anatomy */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handlePsychology}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/anatomy.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* psychology */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleUrology}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/icons/specialities/psychology.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
                {/* dermis */}
                <div
                  className="doctors-list-icon-container shadow1"
                  onClick={handleOthers}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/icons/specialities/dermis.png"
                    }
                    alt="lung"
                    className="doctors-list-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card3 */}
        {showNoDoctor ? (
          <div className="noChat">
            <p className="noChatText1">No Doctors yet.</p>
            <p className="noChatText2">
              Start Finding Doctors by pressing in the above items.
            </p>
          </div>
        ) : (
          <>
            {tab.length > 0 ? (
              tab.map((item, index) => (
                <DoctorCardModel
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  country={item.country}
                  img={item.img}
                  patients={item.patients}
                  experience={item.experience}
                  speciality={item.speciality}
                  info={item.info}
                  fees={item.fees}
                  duration={item.duration}
                  bg="0"
                  navigate={navigate}
                />
              ))
            ) : (
              <p className="doctors-loading">Loading...</p>
            )}
          </>
        )}
        {tab.length > 0 && (
          <div onClick={handleMoreDoctors} className="doctors-relevant">
            <p className="doctors-relevant-text">See more doctors</p>
          </div>
        )}
      </div>
    </div>
  );
}
