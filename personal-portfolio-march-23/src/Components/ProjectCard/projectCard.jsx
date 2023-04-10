import style from "./projectCard.module.css";

export default function ProjectCard({ cardData }){
    
    return(
        <div className={style.projectContainer}>
            <h3 className={style.projectTitle}>{cardData.projectTitle}</h3>
            <img src={cardData.projectImage} className={style.projectImage} />
            <p className={style.projectText}>{cardData.projectText}</p>
            {cardData.inProgress ? <p className={style.progressText}>In progress...</p> : ""}
            <div className={style.linkList}>
            {cardData.projectLive ? <a href={cardData.projectLive} target="_blank" className={style.projectLink}><h4 className={style.linkStyle}>Live</h4></a> : ""}
            {cardData.projectGithub ? <a href={cardData.projectGithub} target="_blank" className={style.projectLink}><h4 className={style.linkStyle}>Github</h4></a> : ""}
            </div>
            
        </div>
    )
}