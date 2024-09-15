import React, { useState } from 'react';
import './login.css';
import assets from '../../assets/assets'
import {signup,login} from '../../config/firebase'
const Login = () => {
  const [currstate, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onsubmithandler = (event) => {
    event.preventDefault();
    if (currstate === "Sign Up") {
      signup(userName, email, password);
    }
    else {
      login(email, password);
    }
  }
  return (
    
   
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo"/>
      <form onSubmit={onsubmithandler } className="login-form">
        <h2>{currstate}</h2>
        {currstate === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={ userName} type="text" placeholder='username' className="form-input" required />:null }
        <input onChange={(e) => setEmail(e.target.value)} value={ email}type="email" placeholder='email_address' className="form-input" required/>
        <input onChange={(e) => setPassword(e.target.value)} value={ password}type="password" placeholder='password' className="form-input" required/>
        <button type='submit'>{currstate==="Sign Up"?"Create Account":"Login now" }</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use and privacy policy</p>
        </div>
        <div className="login-forgot"></div>
        {
          currstate === "Sign Up"
            ? <p className='login-toggle'>Already have an account <span onClick={() => setCurrState("Login")}>login here</span></p>
            : <p className='login-toggle'>Create an account <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
        }
       
       
      </form>
    
      </div>
      
  );
}

export default Login;
