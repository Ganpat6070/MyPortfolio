import React from 'react';
import "./App.css";

 export const ContactUs = () => {
  return (
    <div className='concenter'>
<div className='contact'>
  
 <div className="contus">  <h1>Contact Us</h1></div>
       <div className="detail">
      Name : Ganpat Sisodiya<br/>
      Email : 
  191200116070@asoit.edu.in<br/>
        Mob :  7766554422<br/>
        Location :  Ahemedabad,Gujarat.
  <br/><br/>
       </div>
      
  <br/>
<form className="form">
<div className="box">  <h3>SEND QUESTION FOR ANY QUERY</h3></div>
      <label>Enter your name:<br/>
        <input type="text" />
      </label><br/><br/> 
  <label>Email:<br/>
        <input type="text"/>
      </label><br/><br/>
  <label>Phone No:
    <br/>
        <input type="text" />
      </label> <br/> <br/>
  <label>Enter Query</label>
    <br/>
        <textarea rows="4" cols="35" />
       <br/><br/>
  <button _target="/Homepage.jsx">Submit</button>
</form>
 </div></div>    
  );
}
