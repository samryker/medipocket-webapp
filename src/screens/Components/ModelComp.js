import React from "react";
import "./styles.css";

export default function ModelComp(props) {
  const { specList, setFilterModal, handleSlected } = props;
  return (
    <div className="filter-model-container">
      <div className="filter-model">
        {/* <div className="model-content shadow1"> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50px" }} />
          <div className="ModelTitleView">
            <p className="model-title-text">Specializations</p>
          </div>
          <div onClick={() => setFilterModal(false)} className="close-model">
            <p className="close-text">X</p>
          </div>
        </div>
        {specList &&
          specList.map((item, index) => (
            <div className="optionContent" key={index}>
              <div className="optionContainer">
                <div
                  className="doctor-model-card-by-model shadow1"
                  onClick={() => handleSlected(item)}
                >
                  <p className="sumpthom-model">{item}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* </div> */}
    </div>
  );
}
