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
        src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Frightarrow.png?alt=media&token=9e5d95d9-267c-41f1-924f-de52f014109b"
        alt=""
        className="arraowImg"
      />
    </button>
  );
}
