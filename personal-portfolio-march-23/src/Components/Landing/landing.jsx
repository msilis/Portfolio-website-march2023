import style from "./landing.module.css";
/* Images */
import techStackLogo from "../../assets/transparent-techStackImg-noText.svg";
import profilePic from "../../assets/IMG-6865.webp";

export default function Landing() {
  return (
    <div className={style.landingContainer}>
      <img src={profilePic} alt="profile picture" id={style.profilePicture} />
      <img
        src={techStackLogo}
        alt="Tech Stack - Javascript, Node.js, MongoDB, React, HTML, CSS"
        id={style.techStackTag}
      />
    </div>
  );
}
