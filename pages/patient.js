import firebase from "firebase"
import withAuth from "../services/withAuth"
import PatientView from "../views/patient-view/patient-view"

const Patient = () => {

  const getPatient = async (nic) => {
    const patient = await firebase.firestore().collection('patients').doc(nic).get()
    return patient.data();
  }

  return <PatientView getPatient={getPatient}/>
}

export default withAuth(Patient)