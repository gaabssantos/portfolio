import { data } from "../data/project";

import "./Projects.css";

const Projects = () => {
<<<<<<< HEAD

=======
>>>>>>> 094ee08fd87c1d12db329d15bb0e69361df753c8
  const handleOverProjects = (id) => {
    document.getElementById(id).classList.add("hide");
    document.querySelector("#action-" + id).classList.remove("hide");
  };

  const handleLeaveOverProjects = (id) => {
    document.getElementById(id).classList.remove("hide");
    document.querySelector("#action-" + id).classList.add("hide");
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
              <button>Ver mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
