import ProjectCard from "../ProjectCard/projectCard";
import style from "./projects.module.css";
import {
  getItDoneProps,
  practiceHelpProps,
  creditCardCheckerProps,
  pepperShakersProps,
  groupIdeasProps,
} from "./projectData";

export default function Projects() {
  return (
    <div className={style.projectsContainer}>
      <h3 className={style.projectHeading}>
        Here are some of the projects I've built:
      </h3>
      <div className={style.projectCardContainer}>
        <ProjectCard cardData={groupIdeasProps} />
        <ProjectCard cardData={getItDoneProps} />
        <ProjectCard cardData={practiceHelpProps} />
        <ProjectCard cardData={creditCardCheckerProps} />
        <ProjectCard cardData={pepperShakersProps} />
      </div>
    </div>
  );
}
