import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./App.module.css";
import nameImg from "./assets/nameTagSmaller.svg";
import Projects from "./Components/Projects/projects";
import Landing from "./Components/Landing/landing";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Navbar from "./Components/Navbar/navbar";

function App() {

  const [hamburgerState, setHamburgerState] = useState(false);
  //Name tag redirect

  const navigate = useNavigate();
  const navigationProps={
    hamburgerState,
    setHamburgerState
  }
  function handleNameTagClick() {
    setHamburgerState(false)
    navigate("/");
  }

  return (
    <div className={style.App}>
      <div className={style.nameContainer}>
        <img
          src={nameImg}
          alt="Miks Silis"
          id={style.nameTag}
          onClick={handleNameTagClick}
        />
        <h3 id={style.headline}>Frontend Developer</h3>
      </div>
      <Navbar navProps={navigationProps} />
      <div className={style.routesContainer}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <div className={style.footer}>
        <p className={style.footerText}>Made by hand, 2023.</p>
      </div>
    </div>
  );
}

export default App;
