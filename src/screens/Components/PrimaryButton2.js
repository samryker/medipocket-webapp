import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrimaryButton2(props) {
  const { icon, name } = props;
  const Navigate = useNavigate();
  return (
    <button
      className="greenBtn shadowHome"
      onClick={() => Navigate("/doctorList")}
    >
      <img src={icon} alt="" className="iconImg" />
      <p>{name}</p>
      <img
        src={process.env.PUBLIC_URL + "/icons/rightarrow.png"}
        alt=""
        className="arraowImg"
      />
    </button>
  );
}
