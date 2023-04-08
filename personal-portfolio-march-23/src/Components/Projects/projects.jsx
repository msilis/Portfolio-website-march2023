import ProjectCard from "../ProjectCard/projectCard";
import style from "./projects.module.css";
/* Image imports for ProjectCard */
import getItDonePic from "../../assets/projectAssets/getItDoneScreenshot.png";
import practiceHelpPic from "../../assets/projectAssets/practiceHelpScreenshot.png";
import creditCardCheckerPic from "../../assets/projectAssets/cardCheckerPic.png";
import pepperShakersPic from "../../assets/projectAssets/pepperShakersScreenshot.png";
import groupIdeasPic from "../../assets/projectAssets/groupIdeasLinkedIn.png";

export default function Projects() {
  const getItDoneProps = {
    projectImage: getItDonePic,
    projectTitle: "Get it done!",
    projectText:
      "A full stack to-do list application. You can create an account, add items, edit items, and delete items. Uses React and CSS modules on the front end with an Express server running in Node hooked up to MongoDB.",
    projectGithub: "https://github.com/msilis/literate-meme",
    projectLive: "http://bit.ly/3yhW4Bq"
  };

  const practiceHelpProps = {
    projectImage: practiceHelpPic,
    projectTitle: "Parent Practice Help",
    projectText: "A responsive website project built with HTML, CSS, and JavaScript with the aim of helping parents practice violin with their children. ",
    projectGithub: "https://github.com/msilis/SuzukiTeachingResources",
    projectLive: "http://bit.ly/3CfoT3J"
  }

  const creditCardCheckerProps = {
    projectTitle: "Credit Card Checker",
    projectImage: creditCardCheckerPic,
    projectText: "This HTML/CSS website uses Javascript to run the Luhn algorithm and check the validity of credit cards. Simply enter your credit card number and quickly determine whether it is valid or not. ",
    projectGithub: "https://github.com/msilis/creditCardChecker",
    projectLive: "https://msilis.github.io/CreditCardCheck/"
  }

  const pepperShakersProps = {
    projectImage: pepperShakersPic,
    projectTitle: "Finchley Pepper Shakers",
    projectText: "A responsive club website built to adapt to different device screen sizes. Made using HTML/CSS and uses CSS media queries.",
    projectGithub: "https://github.com/msilis/peppershakers",
    projectLive: "https://msilis.github.io/peppershakers/"
  }

  const groupIdeasProps = {
    projectImage: groupIdeasPic,
    projectTitle: "Suzuki Group Class Ideas",
    projectText: "A full stack web app which returns a suggested game to play in violin group class based on chosen technique. You have the ability to add your own games as well as save suggested games for later. Built using React on the frontend and Express, Node, and MongoDB on the backend.",
    projectGithub: "https://github.com/msilis/shiny-octo-waddle",
    inProgress: "yes"
  }

  return (
    <div className={style.projectsContainer}>
      <h3 className={style.projectHeading}>Here are some of the projects I've built:</h3>
      <div className={style.projectCardContainer}>
        <ProjectCard props={groupIdeasProps} />
        <ProjectCard props={getItDoneProps} />
        <ProjectCard props={practiceHelpProps} />
        <ProjectCard props={creditCardCheckerProps} />
        <ProjectCard props={pepperShakersProps} />
      </div>
    </div>
  );
}
