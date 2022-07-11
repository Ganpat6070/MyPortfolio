import React from 'react'
import "./App.css";
export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hey, This is<span className='name'> Ganpat Singh Sisodiya</span></h1>
      <div className='line'> <h2>The Programmer<hr/></h2></div>
        <h4>Currently I'm studying Bachelor of Engineerinng from Information Technology department from Aditya Silver Oak Institute of Technology, Ahmedabad <hr/></h4>
        
      </div>
<br/><br/><hr/>
 <div className= "sskills">
        <h1>Skills</h1>        
   <h3>Programming<br/> Leadership<br/> Active Listening<br/> Quick Learning<br/></h3>
        </div>

          
<br/><br/><div className="line"><span className="link"> 
<a className="img" href="https://github.com/Ganpat6070"><img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733553.png"></img></a></span>
<br/><br/>
  
  <span>
  <a classsName= "img" href="https://www.linkedin.com/in/ganpat-sisodiya-4174b5244"><img className='icon' src="https://cdn-icons-png.flaticon.com/128/145/145807.png"></img></a></span> </div>            
    </>
  );
}