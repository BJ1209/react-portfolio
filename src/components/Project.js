import React from 'react';
import { GitHub, Link } from '@material-ui/icons';
import './../styles/Project.scss';
const Project = ({ project }) => {
  const { title, imageUrl, link, repo } = project;
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <div className="project__links">
          {repo && (
            <a href={repo} rel="noopener noreferrer" target="_blank">
              <GitHub />
              <span>github</span>
            </a>
          )}
          <a href={link} rel="noopener noreferrer" target="_blank">
            <Link />
            <span>link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
