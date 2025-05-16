import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="profile">
          <div className="heading">
            <h1>Short Profile</h1>
          </div>
          <div className="profile-style">
            <img src="../../public/computer.jpeg" className="pc-img" alt="" />
            <h2 className="pc-overlay">
              web devloper and student, <br />
              learing new technologies and <br /> backend
            </h2>

            <div className="card-stack-container">
              <div className="card1">
                <div className="taj-box">
                  <h1 className="h1-tag">INDIAN</h1>
                  <img
                    src="../../public/tajmahal.png"
                    className="taj-img"
                    alt=""
                  />
                </div>
                <h2>languages known - </h2>
                <li className="li-tag">English</li>
                <li className="li-tag">Hindi</li>
                <li className="li-tag">Telugu</li>
              </div>

              <div className="stack">
                <h1>Tech Stack</h1>
                <ul className="ul-tag">
                  <li>React js</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
