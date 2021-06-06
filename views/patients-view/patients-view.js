import NavBar from "../../components/nav-bar";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import ModalHeader from "../../components/modal/modal-header/modal-header"
import "./styles.scss"
import { useEffect, useRef, useState } from "react";
import ModalContent from "../../components/modal/modal-content/modal-content";
import Input from "../../components/input/input";
import ModalController from "../../components/modal/modal-controller/modal-controller";
import Card from "../../components/card/card"
import { useRouter } from "next/router";

const PatientsView = ({ addUser, getPatients }) => {

  const router = useRouter();

  const[open, setOpen] = useState(false)
  const[modalLoading, setModalLoading] = useState(false)
  const[name, setName] = useState('')
  const[nic, setNic] = useState('')
  const[age, setAge] = useState('')
  const[gender, setGender] = useState('Male')
  const[email, setEmail] = useState('')
  const[address, setAddress] = useState('')
  const[mobile, setMobile] = useState('')
  const[patients, setPatients] = useState([])

  useEffect(() => {
    (async ()=> {
      const data = await getPatients();
      setPatients(data)
    })()
  }, [])

  const addNewPatient = async() => {
    if(name == "" || nic == "" || age == "" || gender == "" || email == "" || address == "" || mobile == "") {
      alert(gender)
      setModalLoading(false)
      return;
    }
    setModalLoading(true)
    await addUser({ name, nic, age, gender, email, address, mobile })
    patients.push({ name, nic, age, gender, email, address, mobile })
    setModalLoading(false)
    setOpen(false)
  }

  const modal = (
    <Modal isOpen={open} onClose={() => setOpen(false)} width="500px" height="550px">
    <ModalHeader title="Add new patient" onClose={ () => setOpen(false) }/>
    <ModalContent>
      <div className="patients-modal-content">
        <Input type="text" placeholder="Name" required={true} value={name} onChange={(e)=> setName(e.target.value)}/>
        <Input type="text" placeholder="NIC" required={true} value={nic} onChange={(e)=> setNic(e.target.value)}/>
        <Input type="number" placeholder="Age" required={true} value={age} onChange={(e)=> setAge(e.target.value)}/>
        <Input type="select" placeholder="Gender" options={["Male", "Female", "Other"]} required={true} value={gender} onChange={(e)=> setGender(e.target.value)}/>
        <Input type="email" placeholder="Email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Input type="text" placeholder="Telephone number" required={true} value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
        <Input type="text" placeholder="Address" required={true} value={address} onChange={(e)=> setAddress(e.target.value)}/>
      </div>
    </ModalContent>
    <ModalController>
      <Button type="primary" name="Add patient" onClick={addNewPatient} variant="submit" isLoading={modalLoading}/>
    </ModalController>
  </Modal>
  )

  return (<div className="patients-container">
    <div className="patients-navbar">
      <NavBar />
    </div>
    <div className="patients-content">
      <div className="patients-header">
        <div className="patients-header-line1">
          <h1 className="patients-header-line1 title" >Patients</h1>
          <div className="patients-header-line1 btn">
            <Button type="primary" name="Add patient" onClick={() => setOpen(true)}/>
          </div>
        </div>
        <div className="patients-header-line2">
          <Input type="text" placeholder="Enter something to search" />
        </div>
      </div>
       {modal}
      <div className="patients-list">
        {
          patients.map((patient, index) => 
          <div className="patients-list-card" key={index}>
          <Card>
            <div className="patients-list-card-container" onClick={() => router.push({ pathname: '/patient', query: { id: patient.nic } })}>
              <p className="patients-list-card-container name"> { `${patient.gender==="Male"? "Mr. ": "Miss. "}${patient.name}` } </p>
              <div className="patients-list-card-container line2">
                <label>{ patient.email }</label>
                <label>{ patient.mobile }</label>
              </div>
            </div>
          </Card>
        </div>)
        }
      </div>
    </div>
  </div>)
}

export default PatientsView;