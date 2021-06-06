import "./styles.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar";
import Button from "../../components/button/button";
import Card from "../../components/card/card";

const PatientView = ( { getPatient } ) => {

  const router = useRouter();
  const[nic, setNic] = useState(null)
  const[patient, setPatient] = useState({})

  useEffect(() => {
    const { id } = router.query;
    setNic(id);
  }, [router.query])

  useEffect(() => {
    if(nic) {
      (async ()=> {
        const res = await getPatient(nic)
        setPatient(res)
        console.log(res)
      })()
    }
  },[nic])

  if(!patient.name) {
    return <div>loading</div>
  }

  return <div className="patient-container">
    <div className="patient-navbar">
      <NavBar />
    </div>
    <div className="patient-content">
      <div className="patient-header">
        <div className="patient-header-title">
          <div className="patient-header-title name">{ `${patient.gender=="Male"? "Mr. ": "Miss. "}${patient.name} `}</div>
          <div className="patient-header-title id">{ patient.nic }</div>
        </div>
        <div className="patient-header-btns">
          <Button type="primary" name="Schedule session" onClick={() => {}} />
          <Button type="secondary" name="Edit" onClick={() => {}} />
        </div>
      </div>

      <div className="patient-cards">
        <div className="patient-cards-details">
          <div className="patient-cards-details-card">
            <Card type="secondary"> 
             <div className="patient-cards-details-card title"> Patient details</div>
             <div className="patient-cards-details-card-row"> 
                <div className="patient-cards-details-card-row label"> Name </div>
                <div className="patient-cards-details-card-row value"> {patient.name} </div>
            </div>
            <div className="patient-cards-details-card-row"> 
                <div className="patient-cards-details-card-row label"> Age </div>
                <div className="patient-cards-details-card-row value"> {patient.age} </div>
            </div>
            <div className="patient-cards-details-card-row"> 
                <div className="patient-cards-details-card-row label"> Gender </div>
                <div className="patient-cards-details-card-row value"> {patient.gender} </div>
            </div>
            <div className="patient-cards-details-card-row"> 
                <div className="patient-cards-details-card-row label"> NIC </div>
                <div className="patient-cards-details-card-row value"> {patient.nic} </div>
            </div>
            <div className="patient-cards-details-card-row last"> 
                <div className="patient-cards-details-card-row label"> Address </div>
                <div className="patient-cards-details-card-row value"> {patient.address} </div>
            </div>
            </Card>
          </div>

          <div className="patient-cards-details note">

          </div>

        </div>
      </div>
    </div>
  </div>
}

export default PatientView;