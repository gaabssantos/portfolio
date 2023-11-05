import "./Skills.css";

import html from "../assets/languages/html5.svg";
import css from "../assets/languages/css.svg";
import javascript from "../assets/languages/javascript.svg";
import react from "../assets/languages/react.svg";
import typescript from "../assets/languages/typescript.svg";
import axios from "../assets/languages/axios.svg";

const Skills = () => {
  return (
    <div className="skills-container" data-aos="fade-down">
      <h1>Habilidades</h1>
      <div id="skills">
        <div className="skill">
          <span>HTML5</span>
          <img src={html} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>CSS3</span>
          <img src={css} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <img src={javascript} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>React</span>
          <img src={react} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>TypeScript</span>
          <img src={typescript} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>Axios</span>
          <img src={axios} alt="Logo HTML" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
