import React from 'react';
import './ProjectCard.css';

export default function ProjectCard (props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
};
