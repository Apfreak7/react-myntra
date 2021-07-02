import React,{useState} from 'react'
import './App.css';

const Login = () => {
    
     return (
      <>
      <form onSubmit="">
          <div className = "App">
           <div className = "App-header">
           <div className="flexbox-container">
              <div className="flexbox-item flexbox-item-1">
               <label>sis</label>
                  <p>Powered by Myntra</p><br/><br/>
               <input 
               type="email" 
               name="email" 
               placeholder="Email"
               onChange="" 
               value="" 
               required /><br/>
               <input 
               type="password" 
               name="password" 
               placeholder="Password"
               onChange="" 
               value="" 
               required /><br/>
               <button type="submit" style={{color: "white"}}>Log In</button><br/>
               <span>
                  <a href="Login.js">Sign Up</a>
                  <a href="Login.js">Forgot Password</a>
               </span>
               </div>
               </div>
               </div>
          </div>
     </form>
      </>
    )
}

export default Login;