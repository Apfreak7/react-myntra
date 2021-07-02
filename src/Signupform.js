import React from 'react'
import useSignUpForm from './useSignup';

export const Signupform = () => {
    const signup = () => {
        console.log(`User Created!
               Email: ${inputs.email}
               Password: ${inputs.password}`);
      }
   const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
    return (
        <div>
                     <form onSubmit={handleSubmit}>
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
               onChange={handleInputChange} 
               value={inputs.email} 
               required /><br/>
               <input 
               type="password" 
               name="password" 
               placeholder="Password"
               onChange={handleInputChange} 
               value={inputs.password} 
               required /><br/>
               <button type="submit" style={{color: "white"}}>Sign Up</button><br/>
               <span>Already have an account?<a href="Login.js">Log In</a></span>
               </div>
               </div>
               </div>
          </div>
     </form>
        </div>
    )
}

export default Signupform;