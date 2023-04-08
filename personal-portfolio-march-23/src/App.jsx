import { Routes, Route, Link, useNavigate} from "react-router-dom";
import style from "./App.module.css";
import nameImg from "./assets/Miks.png";
import Projects from "./Components/Projects/projects";
import Landing from "./Components/Landing/landing";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";

function App() {
//Name tag redirect

const navigate = useNavigate()
function handleNameTagClick(){
  navigate("/")
}


  return (
    <div className={style.App}>
      <div className={style.nameContainer}>
        <img src={nameImg} alt="Miks Silis" id={style.nameTag} onClick={handleNameTagClick} />
        <h3 id={style.headline}>Frontend Developer</h3>
        <Link to="/projects" className={style.linkStyle}>
          <div className={style.bar1}>
            <p className={style.barText}>Projects</p>
          </div>
        </Link>
        <Link to="/about" className={style.linkStyle}>
        <div className={style.bar2}>
          <p className={style.barText}>About</p>
        </div>
        </Link>
        <Link to="/contact" className={style.linkStyle}>
        <div className={style.bar3}>
          <p className={style.barText}>Contact</p>
        </div>
        </Link>
      </div>
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
