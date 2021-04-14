import { useState, useRef } from "react"
import  "./styles.scss"
import LoginForm from "./sub-components/login-form"
import SignUpForm from "./sub-components/signup-form"
import PasswordResetForm from "./sub-components/reset-form"

export const LoginView = ({ handleLogin, handleSignup, handlePasswordReset, handleGoogleSignIn }) => {

  const [login, setLogin] = useState(true)
  const [resetPassword, setResetPassword] = useState(false)

  const handlers = {
    setLogin,
    setResetPassword,
    handleLogin,
    handleSignup,
    handlePasswordReset,
    handleGoogleSignIn
  }

  return (
    <div className="login-container">
      <div className="login-nav">
        <div className="login-button-container">
          <button className="login-login-button" onClick={()=>{setLogin(true); setResetPassword(false)}}>Login</button>
          <button className="login-signup-button" onClick={()=>setLogin(false)}>SignUp</button>
        </div>
      </div>

      <div className="login-body">
        <div className="login-form">
        { login === true? resetPassword === true? <PasswordResetForm handlers={handlers} />: <LoginForm handlers={handlers}/> : <SignUpForm handlers={handlers}/>}
        </div>
      </div>
    </div>
  )
}

