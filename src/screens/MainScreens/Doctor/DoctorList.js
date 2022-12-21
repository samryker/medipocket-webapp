import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import DoctorCardModel2 from "../../Components/Models/DoctorCardModel2";
import "./styles.css";
import ModelComp from "../../Components/ModelComp";
import { FaArrowLeft } from "react-icons/fa";

const mapState = ({ user }) => ({
  filter: user.filter,
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
var res = [];

export default function DoctorList() {
  const { filter } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState(null);
  const [newDoctors, setNewDoctors] = useState(null);
  const [specList, setSpecList] = useState(null);
  const [help, setHelp] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [search, setSearch] = useState("");
  const [showNoDoctor, setShowNoDoctor] = useState(false);
  const { data, loading } = useQuery(DOCTOR_QUERY);
  useEffect(() => {
    var timeleft = 10;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        setShowNoDoctor(true);
        clearInterval(downloadTimer);
      }
      timeleft -= 1;
    }, 1000);
  }, []);
  // done
  const getspecs = (ch) => {
    let tab = [];
    for (let i = 0; i < ch.allDoctors.length; i++) {
      if (!tab.includes(ch.allDoctors[i].specialization.specializationName)) {
        tab.push(ch.allDoctors[i].specialization.specializationName);
      }
    }
    return tab;
  };
  // done
  const getDoctors = () => {
    let specs = getspecs(data);
    let tab = [];
    if (specs.length > 0) {
      for (let j = 0; j < specs.length; j++) {
        for (let i = 0; i < data.allDoctors.length; i++) {
          if (
            data.allDoctors[i].specialization.specializationName === specs[j]
          ) {
            tab.push({
              name:
                data.allDoctors[i].firstName +
                " " +
                data.allDoctors[i].lastName,
              desc:
                (data.allDoctors[i].state ? data.allDoctors[i].state : "--") +
                " ," +
                (data.allDoctors[i].country
                  ? data.allDoctors[i].country
                  : "--"),
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
        res.push({ title: specs[j], data: tab });
        tab = [];
      }
      setNewDoctors(res);
    }
  };
  // done
  const handleSlected = (title) => {
    setNewDoctors(null);
    setFilterModal(false);
    setSearch(title);
    if (doctors) {
      filterList(search);
    }
  };
  // done
  const filterList = (filtername) => {
    if (filtername === "All specialization") {
      setNewDoctors(doctors);
      return;
    }
    let tab = [];
    for (let i = 0; i < doctors.length; i++) {
      if (doctors[i].title.toUpperCase().includes(filtername.toUpperCase())) {
        tab.push(doctors[i]);
      }
    }
    setNewDoctors(
      tab.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
    );
  };
  useEffect(() => {
    setSearch("All specialization");
    if (filter.length > 0) {
      if (filter === "*") setSearch("All specialization");
      if (filter === "Oncology") setSearch("Oncology");
      if (filter === "Endocrinology") setSearch("Endocrinology");
      if (filter === "Cardiology") setSearch("Cardiology");
      if (filter === "Rheumatology") setSearch("Rheumatology");
      if (filter === "Fertility") setSearch("Fertility");
      if (filter === "Surgery") setSearch("Surgery");
      if (filter === "Mental") setSearch("Mental");
    }
    return () => {
      res = [];
      setDoctors(null);
      setNewDoctors(null);
      setSearch("");
      setFilterModal(false);
      setHelp(false);
    };
  }, []);
  useEffect(() => {
    if (data && !newDoctors) {
      getDoctors();
      setDoctors(
        res.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
      );
      let specs = getspecs(data);
      setSpecList(specs);
    }
    if (doctors) {
      filterList(search);
    }
  }, [data, doctors]);
  useEffect(() => {
    if (doctors && search) {
      filterList(search);
    }
  }, [search]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="age-container">
      <div className="home-subContainer">
        {/* subContainer */}
        <div className="age-subContainer">
          <div className="age-header">
            <div className="age-headerSub" onClick={() => navigate("/doctors")}>
              <FaArrowLeft className="age-backIcon" />
            </div>
            <div className="age-titleContainer">
              <p className="usa-specialist">USA Specialists List</p>
            </div>
            <div className="age_emptySpace"></div>
          </div>
        </div>
        {/* filter */}
        <div className="searchMain">
          <div
            className="searchContainer shadow1"
            onClick={() => setFilterModal(true)}
          >
            <div className="searchContainer1">
              <img
                src={process.env.PUBLIC_URL + "/icons/filter.png"}
                alt="search"
                className="saerch"
              />
              <p className="searchInput">Filter by</p>
            </div>
            <p className="searchInput1">{search}</p>
          </div>
        </div>
        {/* Flatlist */}
        {showNoDoctor && newDoctors?.length === 0 ? (
          <div className="noChat">
            <p className="noChatText1">No Doctors with this filter yet.</p>
          </div>
        ) : (
          <>
            {newDoctors ? (
              <>
                {newDoctors.map((item, index) => (
                  <div key={index}>
                    <div className="specContainer">
                      <p className="specTitle">{item.title}</p>
                    </div>
                    {item.data.map((j, index2) => (
                      <DoctorCardModel2
                        key={index2}
                        name={j.name}
                        desc={j.desc}
                        country={j.country}
                        img={j.img}
                        patients={j.patients}
                        experience={j.experience}
                        speciality={j.speciality}
                        info={j.info}
                        fees={j.fees}
                        duration={j.duration}
                        navigate={navigate}
                        type="2"
                      />
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <p className="doctors-loading">Loading...</p>
            )}
          </>
        )}

        {/* {(newDoctors && newDoctors.length === 0) || !newDoctors ? (
          <div className="noChat">
            <p className="noChatText1">No Doctors with this filter yet.</p>
          </div>
        ) : null} */}
      </div>
      {/* filter Modal */}
      {filterModal && (
        <ModelComp
          specList={specList}
          setFilterModal={setFilterModal}
          handleSlected={handleSlected}
        />
      )}
    </div>
  );
}
