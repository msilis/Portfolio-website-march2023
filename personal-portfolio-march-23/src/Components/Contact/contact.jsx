import style from "./contact.module.css";
import gmailLogo from "../../assets/icons8-gmail-logo(1).svg";
import githubLogo from "../../assets/icons8-github-squared.svg";
import linkedInLogo from "../../assets/icons8-linkedin.svg";

/* Icons are from Icons8: https://icons8.com/ */

export default function Contact() {
  return (
    <div className={style.contactContainer}>
      <h2 className={style.contactMeText}>Contact Me</h2>
      <div className={style.contactDetails}>
        <ul className={style.contactList}>
          <li className={style.contactListItem} title="Hit me up on email">
            <a
              href="mailto:mikssilis@gmail.com?_subject=Website_Submission"
              className={style.contactListLink}
            >
              <img
                src={gmailLogo}
                alt="Gmail logo"
                className={style.contactListImage}
                height="100px"
                width="100px"
              />
              Email me
            </a>
          </li>
          <li className={style.contactListItem} title="Check out my GitHub">
            <a
              href="https://github.com/msilis"
              target="_blank"
              className={style.contactListLink}
            >
              <img
                src={githubLogo}
                alt="Github logo"
                className={style.contactListImage}
                height="100px"
                width="100px"
              />
              GitHub
            </a>
          </li>
          <li className={style.contactListItem} title="Find me on LinkedIn">
            <a
              href="https://www.linkedin.com/in/miks-silis"
              target="_blank"
              className={style.contactListLink}
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn logo"
                className={style.contactListImage}
                height="100px"
                width="100px"
              />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
