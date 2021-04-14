import { useEffect, useState, useContext } from "react"
import "firebase/functions"
import { firebase } from '../services/firebase'
import withAuth from "../services/withAuth"
import Router from 'next/router'


const Home = () => {

  const logout = async() => {
    await firebase.auth().signOut()
    Router.push('/login')
  }

  return <>
  <h1>Dashboard</h1>
  <button onClick={ logout }>logout</button>
  </>
}

export default withAuth(Home)
