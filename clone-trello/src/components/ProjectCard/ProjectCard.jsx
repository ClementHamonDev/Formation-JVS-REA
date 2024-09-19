import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {

  const handleClick = () => {
    alert('Project card clicked!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered project card');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left project card');
  };

  return (
    <button className="project-card" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children}
    </button>
  );
};


