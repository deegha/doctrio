import { useEffect, useContext } from "react"
import { LoginView } from "../views/login-view/login-View"
import { AppContext } from "../context/app-context"
import  withAuth from '../services/withAuth'
import firebase from "firebase"
import Router from 'next/router'

function Login({ authUser }) {
  const { nextPage } = useContext(AppContext)

  useEffect(() => {
    if (authUser !== false && authUser !== "loading") {
      if (nextPage !== "")
        Router.push(`/${nextPage}`)
      else
        Router.push("/")
    }
  }, [authUser])

  const handleLogin = async (email, password) => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSignup = async (email, password, businessName) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      var user = firebase.auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: businessName
        });
      }
      
    } catch (error) {
      alert(error.message)
    }
  }

  const handlePasswordReset = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      alert(`Password reset instructions sent to ${email}`)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithRedirect(provider)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <LoginView handleLogin={handleLogin} handleSignup={handleSignup} handlePasswordReset={handlePasswordReset} handleGoogleSignIn={handleGoogleSignIn}/>
  );
}

export default withAuth(Login);
