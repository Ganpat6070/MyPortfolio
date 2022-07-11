import React from 'react'
import "./App.css";
const Project = ({projectItem}) => {
    const {name, description, skills, github, linkedIn} = projectItem;
    console.log(projectItem.skills);   
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>             
        </div>
    );
}
export default Project