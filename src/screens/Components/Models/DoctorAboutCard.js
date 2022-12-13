import React from "react";

export default function DoctorAboutCard(props) {
  const { name, desc } = props;
  return (
    <div className="card-container">
      <div className="doctor-model-card shadow1">
        <div className="doctor-card-content">
          <div className="doctor-card-left" style={{ padding: "20px" }}>
            <p className="doctor-card-content-title1">{name}</p>
            <p
              className="doctor-card-content-title2"
              style={{ fontSize: 18, lineHeight: "28px" }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
