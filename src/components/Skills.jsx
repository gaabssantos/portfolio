import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container" data-aos="fade-down">
      <h1>Habilidades</h1>
      <div id="skills">
        <div className="skill">
          <span>HTML5</span>
          <img src={"./languages/html5.svg"} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>CSS3</span>
          <img src={"./languages/css.svg"} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <img src={"./languages/javascript.svg"} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>React</span>
          <img src={"./languages/react.svg"} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>TypeScript</span>
          <img src={"./languages/typescript.svg"} alt="Logo HTML" />
        </div>
        <div className="skill">
          <span>Axios</span>
          <img src={"./languages/axios.svg"} alt="Logo HTML" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
