import React from "react";
import "./stylesProfile.css";

export const UserProfile = ({ userInfo }) => {
  
  console.log(userInfo);
  const username = userInfo?.profileInfo?.displayName ?? "name";
  const email = userInfo?.email ?? "email";
  const countryCode = userInfo?.phoneInfo?.countryCode ?? "cc";
  const phoneNumber = userInfo?.phoneInfo?.phoneNumber ?? "phone-number";

  return (
    <div className="user-profile-container">
      <p className="profile-title">Profile</p>
      <div className="user-info">
        <label className="lable">
          Username<span className="value">{username}</span>
        </label>
        <label className="lable">
          Email<span className="value">{email}</span>
        </label>
        <label className="lable">
          Phone Number
          <span className="value">
            {phoneNumber ? `+${countryCode} ${phoneNumber}` : ""}
          </span>
        </label>
      </div>
    </div>
  );
};
