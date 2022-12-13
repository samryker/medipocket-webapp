import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import DoctorCardModel2 from "../../Components/Models/DoctorCardModel2";
import "./styles.css";

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
  return (
    <div className="age-container">
      <div className="home-subContainer">
        <Header
          navigate={navigate}
          bg="#f0f4f7"
          isHome={false}
          isDoctorList={true}
          isProfile={false}
          isSurrogacy={false}
        />
        {/* filter */}
        <div className="searchMain">
          <div
            className="searchContainer shadow1"
            onClick={() => setFilterModal(true)}
          >
            <div className="searchContainer1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Ffilter.png?alt=media&token=a6a047ab-6ee2-4597-9675-c38608e3ef62"
                alt="search"
                className="saerch"
              />
              <p className="searchInput">Filter by</p>
            </div>
            <p className="searchInput1">{search}</p>
          </div>
        </div>
        <DoctorCardModel2
          name={"Dr. Jordon Geller"}
          desc={"California ,USA"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20Jordan%20Geller.png?alt=media&token=d3925c63-7403-496a-922c-58461b95a45d"
          }
          patients={"--"}
          experience={"17"}
          speciality={"Endocrinology, Diabetes & Metabolism"}
          info={
            "Dr. Geller earned his medical degree from the Keck School of Medicine at the University of Southern California in Los Angeles. He completed a fellowship in endocrinology and metabolism at Cedars-Sinai Medical Center in Los Angeles. He has been in private practice in Beverly Hills, CA and a clinical instructor at Cedars-Sinai Medical Center and the David Geffen UCLA School of Medicine. Dr. Geller is dual board-certified in Endocrinology, Diabetes and Metabolism, and Internal Medicine.He has authored numerous publications in the field of endocrinology and metabolism and has been appointed as an expert for the Medical Board of California. Various Publications: Liu NA, Sacks W and Geller JL, Geller Epocrates Osteoporosis Curriculum 2010;Epocrates, Inc. Geller JL, Adams JS. Vitamin D Therapy. Current Osteoporosis Reports 2008 Cooper OB, Geller JL and Melmed S. Ovarian Hyperstimulation Syndrome caused by an FSH-Secreting Pituitary Adenoma. Nat Clin Pract Endocrinol Metab. Feb 12, 2008 Geller JL, Hu B, Reed S, Mirocha J and Adams JS. Repair of Vitamin D Insufficiency Increases Bone Mass in Bisphosphonate-Treated Patients. Endo Prac. 2008; 14:3 Geller JL Vitamin D: The Sunshine Hormone. Food Technology, June 2007"
          }
          fees={"250"}
          duration={"20"}
          navigate={navigate}
          type="2"
        />
        {/* Flatlist */}
        {showNoDoctor ? (
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
        {/* filter Modal */}
        {filterModal && (
          <div className="filter-model">
            <div className="model-content shadow1">
              <div
                onClick={() => setFilterModal(false)}
                className="close-model"
              >
                <p className="close-text">X</p>
              </div>
              <div className="ModelTitleView">
                <p className="model-title-text">Specializations</p>
              </div>
              {specList &&
                specList.map((item, index) => (
                  <div className="optionContent" key={index}>
                    <div className="optionContainer">
                      <div
                        className="doctor-model-card-by-model shadow1"
                        onPress={() => handleSlected(item)}
                      >
                        <p className="sumpthom-model">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
