import style from "./projectCard.module.css";

export default function ProjectCard(props){
    
    return(
        <div className={style.projectContainer}>
            <h3 className={style.projectTitle}>{props.props.projectTitle}</h3>
            <img src={props.props.projectImage} className={style.projectImage} />
            <p className={style.projectText}>{props.props.projectText}</p>
            {props.props.inProgress ? <p className={style.progressText}>In progress...</p> : ""}
            <div className={style.linkList}>
            {props.props.projectLive ? <a href={props.props.projectLive} target="_blank" className={style.projectLink}><h4 className={style.linkStyle}>Live</h4></a> : ""}
            {props.props.projectGithub ? <a href={props.props.projectGithub} target="_blank" className={style.projectLink}><h4 className={style.linkStyle}>Github</h4></a> : ""}
            </div>
            
        </div>
    )
}