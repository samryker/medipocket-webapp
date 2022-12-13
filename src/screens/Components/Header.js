import React from "react";
import { IoMdArrowBack, IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setDrawerShown } from "../../redux/Local/local.actions";
import "./styles.css";

export default function Header(props) {
  const { navigate, bg, isHome, isDoctorList, isProfile, isSurrogacy } = props;
  const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: bg.length > 0 ? bg : "#ffffff" }}
      className="header-header"
    >
      {isHome ? (
        <div style={{ width: 20 }}></div>
      ) : (
        <div className="header-headerSub" onClick={() => navigate(-1)}>
          <IoMdArrowBack className="header-iconStyle" />
        </div>
      )}

      {isSurrogacy ? (
        <>
          <p className="usa-specialist">Bring your baby home</p>
          <div style={{ width: 20 }}></div>
        </>
      ) : (
        <>
          {isProfile ? (
            <p className="usa-specialist">Doctor's Profile</p>
          ) : (
            <>
              {isDoctorList ? (
                <p className="usa-specialist">USA Specialists List</p>
              ) : (
                <div
                  className="header-headerSub"
                  onClick={() => navigate("/home")}
                >
                  <img
                    className="header-imgStyle"
                    src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989"
                    alt="logo"
                  />
                </div>
              )}
            </>
          )}
          {isProfile ? (
            <div style={{ width: 20 }}></div>
          ) : (
            <div
              className="header-headerSub"
              onClick={() => dispatch(setDrawerShown())}
            >
              <IoMdMenu className="header-iconStyle" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
