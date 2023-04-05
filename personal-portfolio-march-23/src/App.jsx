import { useState } from 'react';
import style from "./App.module.css";
import nameImg from "./assets/Miks.png"
import techStackLogo from "./assets/techStackImg-withText.png"

function App() {
  

  return (
    <div className={style.App}>
      <div className={style.nameContainer}>
        <img src={nameImg} alt="Miks Silis" id={style.nameTag}/>
        <div className={style.bar1}><p className={style.barText}>Projects</p></div>
        <div className={style.bar2}><p className={style.barText}>About</p></div>
        <div className={style.bar3}><p className={style.barText}>Contact</p></div>
        <img src={techStackLogo} alt="Tech Stack - Javascript, Node.js, MongoDB, React, HTML, CSS" id={style.techStackTag} />
      </div>
      
    </div>
  )
}

export default App
