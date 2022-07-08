import React from 'react';
import Project from './Project';
import "./App.css";
const projectData = [{
    name:"Project 1",
    description:"We worked on the project named Shoppers which is basically a platform for local shopkeepers to sell their product online at free of cost. ",
    skills: ['Java','Netbeans'],
        
},
{
    name:"Project 2",
    description:"We worked on the project named Automated Music Player.In which there is an application that plays a music by giving voice command.But this was the concept",
    skills:['AI','ML','Python'],
    
},
{
    name:"Project 3",
    description:"In this project we made single page website that shows a real time COVID19 Cases.",
    skills: ['HTML','CSS','JS'],

}

];

const ProjectContainer = () =>{
  
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    );
 }

export default ProjectContainer;