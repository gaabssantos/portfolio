import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineGithub, AiOutlineDesktop } from "react-icons/ai";

const Project = () => {
  const project = JSON.parse(localStorage.getItem("project"));

  return (
    <div className="project-container">
      <h1>{project.name}</h1>
      <div className="informations-project">
        <div className="images">
          <Carousel>
            <div>
              <img src="../projects/notes.png" alt="" />
            </div>
            <div>
              <img src="../projects/notes.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quam nisi quasi impedit porro soluta totam, autem eos neque sapiente
            accusantium nostrum aspernatur ratione dicta aperiam reprehenderit
            provident est dolorum!
          </p>
          <div className="action">
            <button>
              <AiOutlineGithub /> Acessar no Github
            </button>
            <button>
              <AiOutlineDesktop />
              Visualizar o projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
