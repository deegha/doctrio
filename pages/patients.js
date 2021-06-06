import firebase, { auth, firestore } from "firebase";
import "firebase/functions";
import { useEffect, useState } from "react";
import withAuth from "../services/withAuth"
import PatientsView from "../views/patients-view/patients-view";

const Patients = () => {

  const addNewUser = async (patient) => {
    try {
      const result = await firebase.firestore().collection('patients').doc(patient.nic).set({ ...patient, doctor: firebase.auth().currentUser.uid })
    } catch (err) {
      alert(err.message)
    }
  }

  const getPatients = async () => {
    const snapshot = await firebase.firestore().collection('patients').get();
    const patientsList = []
    snapshot.forEach(snap => {
      if(snap.data().doctor === firebase.auth().currentUser.uid) {
        patientsList.push(snap.data())
      }
    })
    return patientsList;
  }

  return <PatientsView addUser={addNewUser} getPatients={getPatients}/>
}

export default withAuth(Patients)