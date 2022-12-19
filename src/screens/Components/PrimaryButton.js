import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrimaryButton(props) {
  const { icon, name } = props;
  const Navigate = useNavigate();
  return (
    <button
      className="greenBtn shadowHome"
      onClick={() => Navigate("/intakeForm")}
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
