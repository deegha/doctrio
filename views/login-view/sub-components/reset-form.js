import React, { useRef } from 'react'

const PasswordResetForm = ({ handlers }) =>{

  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlers.handlePasswordReset(email.current.value)
  }
  return  (
    <div className="login-form-container">
      <h1>Reset password</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="E-mail address" type="email" ref={email} required/> <br />
        <button className="login-form-button" type="submit">Reset Password</button>
      </form>
    </div>
  ) 
}

export default PasswordResetForm;
