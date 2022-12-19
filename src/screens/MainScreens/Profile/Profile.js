import React from "react";

export default function Profile() {
  return (
    <div className="myContainer">
      <div className="doctorCard">
        <div className="doctorCardTop">
          <div className="doctorCardLeft">
            <div className="doctorInfo">
              <h2 className="doctorName">Dr. Kunal Gurav</h2>
              <h5 className="doctorLocation">MO ,USA</h5>
              <h5 className="doctorSpeciality">Cardiologiy</h5>
            </div>
          </div>
          <div className="doctorImgContainer">
            <img
              className="doctorImgStyle"
              src={process.env.PUBLIC_URL + "/icons/placeholder.png"}
              alt="Girl in a jacket"
            />
          </div>
        </div>
        <div className="doctorCardBottom">
          <div className="feeBox">
            <p className="feeTitle">Fee</p>
            <p className="feeAmount">$500</p>
          </div>
          <div className="feeBox">
            <p className="feeTitle">Experience</p>
            <p className="feeAmount">15yrs+</p>
          </div>
        </div>
      </div>
      <div className="aboutDoctor">
        <h3>About Doctor</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nobis
          possimus. Molestiae delectus cum at, aut nihil commodi ea quidem.
          Quidem voluptatem laborum itaque ut quos. Ipsum eaque consequuntur
          expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Rerum, nobis possimus. Molestiae delectus cum at, aut nihil commodi ea
          quidem.
        </p>
      </div>
    </div>
  );
}
