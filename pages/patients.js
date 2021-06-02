import firebase from "firebase";
import "firebase/functions";
import { db } from "../services/firebase";
import withAuth from "../services/withAuth"
import PatientsView from "../views/patients-view/patients-view";

const Patients = () => {

  const addNewUser = async (patient) => {
    try {
      const duplicates = await firebase.database().ref("patients").orderByChild("nic").orderByValue("981730658v")
      console.log(duplicates)
      const result = await firebase.database().ref("patients").push({ ...patient, doctor: firebase.auth().currentUser.uid })
    } catch (err) {
      alert(err.message)
    }
  }

  return <PatientsView addUser={addNewUser}/>
}

export default withAuth(Patients)