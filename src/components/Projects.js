import React from 'react';
import Project from './Project';
import './../styles/Projects.scss';

function Projects({ data }) {
  return (
    <section id="projects" className="projects">
      <h1>Check Out Some of My Work</h1>
      <div className="projects__work">
        {data?.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <a
        href="https://github.com/BJ1209?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
      >
        Check All Repositories
      </a>
    </section>
  );
}

export default Projects;
