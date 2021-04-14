import React, { useRef } from 'react';
import GoogleSign from '../../../static/logos/sign-google.png'

const LoginForm = ({ handlers }) => {

  const email = useRef()
  const password = useRef()

  const handleLogin = (e) => {
    e.preventDefault()
    handlers.handleLogin(email.current.value, password.current.value)
  }

  const handleGoogleSignIn = (e) => {
    handlers.handleGoogleSignIn();
  }

  return  (
    <div className="login-form-container">
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="E-mail address" type="email" ref={email} required/> <br />
        <input placeholder="Password" type="password" ref={password} required/> <br />
        <button className="login-form-button" type="submit">Login</button>
      </form>
      <a onClick={handleGoogleSignIn}> <img className="login-form-google-icon" src={ GoogleSign }/> </a>
      <p>Forgot password? <a onClick={()=> {handlers.setLogin(true); handlers.setResetPassword(true)}}>Reset</a></p>
    </div>
  )  
}   

export default LoginForm;
