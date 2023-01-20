import React from 'react'

export const UserProfile = ({userInfo}) => {
    const username = userInfo?.profileInfo.displayName
    const email = userInfo?.email
    const countryCode = userInfo?.phoneInfo.countryCode
    const phoneNumber = userInfo?.phoneInfo.phoneNumber
  return (
    <div className="user-profile-container">
        <label className="lable">Username : <span className='value'>{username}</span></label>
        <label className="lable">Email : <span className='value'>{email}</span></label>
        <label className="lable">Phone Number : <span className='value'>{phoneNumber?`+${countryCode} ${phoneNumber}`:''}</span></label>
    </div>
  )
}
