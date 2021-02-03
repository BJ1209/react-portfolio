import React from 'react';
import Project from './Project';
import './Projects.css';

function Projects({ data }) {
  return (
    <section id="projects" className="projects">
      <h1>Check Out Some of My Work</h1>
      <div className="projects__work">
        {data?.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
