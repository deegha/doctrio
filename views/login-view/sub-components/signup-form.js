import React, { useEffect, useRef, useState } from 'react'

const SignUpForm = ({ handlers }) =>{

  const email = useRef()
  const businessName = useRef()
  const password = useRef()
  const confirmPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()

    if(password.current.value !== confirmPassword.current.value) {
      alert("Passwords don't match")
      return;
    }
    if(password.current.value.length < 6) {
      alert("Password is too short, use more than 6 digits")
      return;
    }

    handlers.handleSignup(email.current.value, password.current.value, businessName.current.value)

  }


  return  (
    <div className="login-form-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="E-mail address" type="email" required ref={ email }/> <br />
        <input placeholder="Business name" type="text" required ref={ businessName }/> <br />
        <input placeholder="Password" type="password" required ref={ password }/> <br />
        <input placeholder="Confirm password" type="password" required ref={ confirmPassword }/> <br />
        <button className="login-form-button" type="submit">Sign up</button>
      </form>
      <p>Already have an account? <a onClick={()=> {handlers.setLogin(true); handlers.setResetPassword(false)}}>Login</a></p>
    </div>
  ) 
}

export default SignUpForm;
