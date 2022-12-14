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
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh1.png?alt=media&token=aad33af5-a0d1-4d9a-b304-1153e6f7d284",
    name: "hospital1",
    desc: "Ranked #1 hospital overall in the US and is regularly ackno...",
  },
  {
    title: "MD Anderson",
    descritpion: "#1 in the nation for Cancer care. More than decades of ",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh2.png?alt=media&token=425ea13a-deb7-406d-ba00-d8b7c7371fa3",
    name: "hospital2",
    desc: "#1 in the nation for Cancer care. More than decades of ",
  },
  {
    title: "Memorial Sloan Kettering Cancer center",
    descritpion: "Leading the fight against cancer. Always focused on...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh3.png?alt=media&token=6e552803-ea2f-4ea1-874a-829283a6f585",
    name: "hospital3",
    desc: "Leading the fight against cancer. Always focused on...",
  },
  {
    title: "Cleveland Clinic",
    descritpion: "Pioneered many medical breakthroughs, inc...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh4.png?alt=media&token=67f98059-0d40-4598-ac5e-ddf6d33c9d96",
    name: "hospital4",
    desc: "Pioneered many medical breakthroughs, inc...",
  },
  {
    title: "Stanford Health Care",
    descritpion: "Delivers unparalleled care for each patient's uni...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh5.png?alt=media&token=a1fcb186-f2bd-487c-b6c6-874315683248",
    name: "hospital5",
    desc: "Delivers unparalleled care for each patient's uni...",
  },
  {
    title: "Cedars-Sinai",
    descritpion: "Consistently recognized as a leader in medical r...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh6.png?alt=media&token=ec9a3863-67fe-4499-b961-d832a0a489b6",
    name: "hospital6",
    desc: "Consistently recognized as a leader in medical r...",
  },
  {
    title: "Boston Children’s Hospital",
    descritpion: "#1 Children's hospital in the nation, pushing th...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh7.png?alt=media&token=3fb78455-b51e-46d8-a54d-5a68ffd56d2c",
    name: "hospital7",
    desc: "#1 Children's hospital in the nation, pushing th...",
  },
  {
    title: "Los Angeles Children’s Hospital",
    descritpion:
      "Believe every child deserves to enjoy all those special mom...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh8.png?alt=media&token=5070d9c5-9b3c-4df2-acdd-1fb50aaa4d17",
    name: "hospital8",
    desc: "Believe every child deserves to enjoy all those special mom...",
  },
  {
    title: "John Hopkins School of Medicine",
    descritpion: "World renowned leader in patient care, have experts...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh9.png?alt=media&token=766cf45f-e260-410f-af66-6413099f8de4",
    name: "hospital9",
    desc: "World renowned leader in patient care, have experts...",
  },
  {
    title: "Massachusetts General Hospital",
    descritpion: "As the original and largest teaching hospital of Harvar...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh10.png?alt=media&token=43b84f5c-78b7-4382-add6-209246e742f8",
    name: "hospital10",
    desc: "As the original and largest teaching hospital of Harvar...",
  },
  {
    title: "Mount Sinai",
    descritpion: "Nation's largest and most respected hospitals, acclaim...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh11.png?alt=media&token=573a2b2e-ad60-4e28-b2d5-6501d7c399df",
    name: "hospital11",
    desc: "Nation's largest and most respected hospitals, acclaim...",
  },
  {
    title: "Northwestern Medicine",
    descritpion: "Is recognized for providing exemplary patient care and in...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh12.png?alt=media&token=1720acb6-8b40-4b43-b1e9-8a7db76abc84",
    name: "hospital12",
    desc: "Is recognized for providing exemplary patient care and in...",
  },
  {
    title: "UCSF Health Parnassus Campus",
    descritpion: "Is a place of discovery and invention. By adva...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh13.png?alt=media&token=4fa94c5d-ad1f-480d-b9a6-6126ad4cf352",
    name: "hospital13",
    desc: "Is a place of discovery and invention. By adva...",
  },
  {
    title: "Keck Medical Center of USC",
    descritpion: "Provides innovative care for complex medical and surgic...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh14.png?alt=media&token=2c2b91ec-f590-4989-a97b-e5ee3bfcc2a9",
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
        icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FGroup.png?alt=media&token=3c43ec07-649d-41ed-a2ea-d55e7f7de605"
        name="Request Appointment"
      />
      <div style={{ height: "150px" }} />
    </div>
  );
}
