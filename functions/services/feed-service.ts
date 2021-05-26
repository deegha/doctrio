import algoliasearch from 'algoliasearch';
import { adminKey, applicationId } from "../config";

const client =  algoliasearch(applicationId, adminKey)
const PATIENTS_INDEX = "patients"

type Patient = {
  id: string
  name: string
  age: string
  gender: string
  nic: string
  doctorId: string
}

export const createPatientOnAlgolia = async ( patient: Patient) => {
  try {
    const index = await client.initIndex(PATIENTS_INDEX)
    const response = await index.saveObject({ objectID: patient.nic, ...patient})
    console.log(response)
    return response;
  } catch (err) {
    console.log(err)
    throw new Error(`Error in creating records in algolia ${err}`)
  }
}

export const searchPatientOnAlgolia = async ( query: string) => {
  try {
    const index = await client.initIndex(PATIENTS_INDEX)
    const response = await index.search( query, {hitsPerPage: 5} )
    return response.hits;
  } catch (err) {
    console.log(err);
    throw new Error(`Error in searching records in algolia ${err}`)
  }
}