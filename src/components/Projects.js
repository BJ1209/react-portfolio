import React from "react";
import "./Projects.css";

function Projects({ data }) {
  return (
    <section id="projects" className="projects">
      <h1>Check Out Some of My Work</h1>
      <div className="projects__work">
        {data?.projects.map((project, index) => {
          return (
            <a rel="noopener noreferrer" key={index} href={project.url} target="_blank">
              <div className="projects__project">
                <img src={project.imageUrl} alt={project.title} />
                <div className={`projects__url`}>
                  <span className={`projects__icon`}>{project.title}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
