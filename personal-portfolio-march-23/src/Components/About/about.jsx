import style from "./about.module.css";
import cvFile from "../../assets/Miks-Silis-CV-2023.pdf"

export default function About(){
    return(
        <div className={style.aboutContainer}>
            <h3>Hi, I'm Miks!</h3>
            <p>Originally from Latvia 🇱🇻 and raised in the United States 🇺🇸, I am now based in London 🇬🇧 as a frontend developer. While studying classical music (viola) in school, I also taught children to play the violin, developing my skills in communication and patience. I currently have a thriving Suzuki violin studio in North London.</p>
            <p>Throughout my life, I've always enjoyed tinkering and making things. Now, I'm thrilled to have the opportunity to apply my passion for crafting to the world of frontend development. I bring a unique perspective to every project, with a keen eye for detail and a strong ability to problem-solve.</p>
            <p>I'm experienced in various DIY projects and have a solid foundation of knowledge working with different tools such as React (this site is built using React), Node.js, Express.js, Redux, MongoDB and many others.</p>
            <p>I'm committed to working closely with clients to deliver top-quality results. Whether you're in need of a custom website, app, or digital product, I'm excited to collaborate with you and bring your vision to life. Drop me a line!</p>
            <div className={style.showCV}>
                <a target="_blank" href={cvFile} className={style.cvLink} rel='noopener noreferrer'>Take a look at my CV.</a>

            </div>
        </div>
    )
}