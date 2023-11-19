import { data } from "../data/project";

import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {

  const handleOverProjects = (id) => {
    document.getElementById(id).classList.add("hide");
    document.querySelector("#action-" + id).classList.remove("hide");
  };

  const handleLeaveOverProjects = (id) => {
    document.getElementById(id).classList.remove("hide");
    document.querySelector("#action-" + id).classList.add("hide");
  };

  const handleProject = (name) => {
    const project = {
      name: name,
    };

    localStorage.setItem("project", JSON.stringify(project));
  };

  return (
    <div className="projects-container" data-aos="fade-down">
      <h1>Projetos</h1>
      <div id="projects">
        {data.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => handleOverProjects(project.id)}
            onMouseLeave={() => handleLeaveOverProjects(project.id)}
            className="project"
          >
            <img src={`./projects/${project.assets}`} alt={project.name} />
            <div id={project.id} className="informations">
              <h1>{project.name}</h1>
              <div id="used-skills">
                {project.skills.map((skill) => (
                  <img
                    key={skill.id}
                    src={`./languages/${skill.name}.svg`}
                    alt={skill.name}
                  />
                ))}
              </div>
            </div>
            <div id={`action-${project.id}`} className="actions hide">
              <Link to={`/project/${project.slug}`}>
                <button onClick={() => handleProject(project.name)}>
                  Ver mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
