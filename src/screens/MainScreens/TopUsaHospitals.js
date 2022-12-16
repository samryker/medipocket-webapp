import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { IoMdArrowBack } from "react-icons/io";
import PrimaryButton from "../Components/PrimaryButton";

const icons = [
  {
    title: "MayoClinic",
    descritpion:
      "Ranked #1 hospital overall in the US and is regularly ackno...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h1.png",
    name: "hospital1",
    desc: "Ranked #1 hospital overall in the US and is regularly ackno...",
  },
  {
    title: "MD Anderson",
    descritpion: "#1 in the nation for Cancer care. More than decades of ",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h2.png",
    name: "hospital2",
    desc: "#1 in the nation for Cancer care. More than decades of ",
  },
  {
    title: "Memorial Sloan Kettering Cancer center",
    descritpion: "Leading the fight against cancer. Always focused on...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h3.png",
    name: "hospital3",
    desc: "Leading the fight against cancer. Always focused on...",
  },
  {
    title: "Cleveland Clinic",
    descritpion: "Pioneered many medical breakthroughs, inc...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h4.png",
    name: "hospital4",
    desc: "Pioneered many medical breakthroughs, inc...",
  },
  {
    title: "Stanford Health Care",
    descritpion: "Delivers unparalleled care for each patient's uni...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h5.png",
    name: "hospital5",
    desc: "Delivers unparalleled care for each patient's uni...",
  },
  {
    title: "Cedars-Sinai",
    descritpion: "Consistently recognized as a leader in medical r...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h6.png",
    name: "hospital6",
    desc: "Consistently recognized as a leader in medical r...",
  },
  {
    title: "Boston Children’s Hospital",
    descritpion: "#1 Children's hospital in the nation, pushing th...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h7.png",
    name: "hospital7",
    desc: "#1 Children's hospital in the nation, pushing th...",
  },
  {
    title: "Los Angeles Children’s Hospital",
    descritpion:
      "Believe every child deserves to enjoy all those special mom...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h8.png",
    name: "hospital8",
    desc: "Believe every child deserves to enjoy all those special mom...",
  },
  {
    title: "John Hopkins School of Medicine",
    descritpion: "World renowned leader in patient care, have experts...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h9.png",
    name: "hospital9",
    desc: "World renowned leader in patient care, have experts...",
  },
  {
    title: "Massachusetts General Hospital",
    descritpion: "As the original and largest teaching hospital of Harvar...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h10.png",
    name: "hospital10",
    desc: "As the original and largest teaching hospital of Harvar...",
  },
  {
    title: "Mount Sinai",
    descritpion: "Nation's largest and most respected hospitals, acclaim...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h11.png",
    name: "hospital11",
    desc: "Nation's largest and most respected hospitals, acclaim...",
  },
  {
    title: "Northwestern Medicine",
    descritpion: "Is recognized for providing exemplary patient care and in...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h12.png",
    name: "hospital12",
    desc: "Is recognized for providing exemplary patient care and in...",
  },
  {
    title: "UCSF Health Parnassus Campus",
    descritpion: "Is a place of discovery and invention. By adva...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h13.png",
    name: "hospital13",
    desc: "Is a place of discovery and invention. By adva...",
  },
  {
    title: "Keck Medical Center of USC",
    descritpion: "Provides innovative care for complex medical and surgic...",
    img: process.env.PUBLIC_URL + "/icons/hospitals/h14.png",
    name: "hospital13",
    desc: "Provides innovative care for complex medical and surgic...",
  },
];
export default function TopUsaHospitals() {
  const navigate = useNavigate();
  return (
    <div className="age-container" style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div className="header-surrogacy">
        <div className="header-surrogacy-left" onClick={() => navigate(-1)}>
          <IoMdArrowBack className="header-surrogacy-iconStyle" />
        </div>
        <p className="header-surrogacy-text">Top USA Hospitals</p>
        <div style={{ width: "20px" }} />
      </div>
      <div className="blocsWrapper">
        {icons.map((item) => {
          return (
            <div className="topHosBlocElement shadowHome">
              <div className="content">
                <img alt="" src={item.img} />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <PrimaryButton
        icon={process.env.PUBLIC_URL + "/icons/Group.png"}
        name="Request Appointment"
      />
      <div style={{ height: "150px" }} />
    </div>
  );
}
