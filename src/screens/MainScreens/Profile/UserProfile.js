import React from 'react'

export const UserProfile = ({userInfo}) => {
  return (
    <div className="user-profile-container">
        <label className="lable">Username : <span className='value'>{userInfo.profileInfo.displayName}</span></label>
        <label className="lable">Email : <span className='value'>{userInfo.email}</span></label>
        <label className="lable">Phone Number : <span className='value'>+{userInfo.phoneInfo.countryCode} {userInfo.phoneInfo.phoneNumber}</span></label>
    </div>
  )
}
