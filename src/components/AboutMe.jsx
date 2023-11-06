import "./AboutMe.css";

import img from "../assets/gabriel-photo.png";

const AboutMe = () => {

  return (
    <div className="about-container">
      <div id="about-me" data-aos="fade-left">
        <div id="introduction">
          <h1>Prazer, me chamo</h1>
          <h1>
            <span id="name">Gabriel</span>!
          </h1>
          <p>Desenvolvedor front-end</p>
        </div>
        <div id="image">
          <img src={img} alt="Foto do Gabriel" />
        </div>
      </div>
      <div id="about-text" data-aos="fade-down">
        <h1>Sobre mim</h1>
        <p>
          Sou desenvolvedor front-end, tenho 4 anos de experiência em criação de
          sites em HTML e CSS e 2 anos em React. Cursei o ensino médio técnico no curso de informática, no qual eu comecei a me interessar pela área. Também possuo conhecimento em
          TypeScript, JavaScript, JavaScript moderno e Axios. Sou apaixonado
          pela programação e tecnologias novas, estou sempre me aperfeiçoando e
          estudando nesta área para ser, futuramente, um desenvolvedor full
          stack.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
