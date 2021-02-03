import React from 'react';
import { GitHub, Link } from '@material-ui/icons';
import './Project.css';
const Project = ({ project }) => {
  const { title, imageUrl, link, repo } = project;
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <div className="project__links">
          <a href={repo}>
            <GitHub />
            <span>github</span>
          </a>
          <a href={link}>
            <Link />
            <span>link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
