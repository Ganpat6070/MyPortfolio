import React from 'react'
import "./App.css";
export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hey, This is<span className='name'> Ganpat Singh Sisodiya</span></h1>
      <div className='line'> <h2>The Programmer<hr/></h2></div>
        <h4>Currently I'm studying Bachelor of Engineerinng from Information Technology department from Aditya Silver Oak Institute of Technology, Ahmedabad <hr/></h4>
        <p className='desc'></p>
        <div>
          <button></button>
          <br/><br/>
          <a href="https://github.com/Ganpat6070" target="_blank">Github</a>
<br/><br/><a href="https://www.linkedin.com/in/ganpat-sisodiya-4174b5244">LinkedIn</a>
        </div>
      </div>

<br/><br/><hr/>

 <div className= "sskills">
        <h1>Skills</h1>
        
   <h3>Programming,<br/> Leadership,<br/> Active Listening,<br/> Quick Learning<br/></h3>
        </div>
      <div className='contact'>
      <h2>Contact</h2>
        Email: 
  191200116070@asoit.edu.in<br/>
        Mob:   1234567890<br/>
        linkedIn:  "https://www.linkedin.com/mwlite/in/ganpat-sisodiya-4174b5244"
        
        
      </div>
    </>
  );
}