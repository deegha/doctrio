import NavBar from "../../components/nav-bar";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import ModalHeader from "../../components/modal/modal-header/modal-header"
import "./styles.scss"
import { useRef, useState } from "react";
import ModalContent from "../../components/modal/modal-content/modal-content";
import Input from "../../components/input/input";
import ModalController from "../../components/modal/modal-controller/modal-controller";

const PatientsView = ({ addUser }) => {

  const[open, setOpen] = useState(false)
  const[modalLoading, setModalLoading] = useState(false)
  const[name, setName] = useState('')
  const[nic, setNic] = useState('')
  const[age, setAge] = useState('')
  const[gender, setGender] = useState('Male')
  const[email, setEmail] = useState('')
  const[address, setAddress] = useState('')

  const addNewPatient = async() => {
    setModalLoading(true)
    if(name == "" || nic == "" || age == "" || gender == "" || email == "" || address == "") {
      console.log(gender)
      alert("All the fields should be filled")
      return;
    }
    await addUser({ name, nic, age, gender, email, address })
    setModalLoading(false)
    setOpen(false)
  }

  return (<div className="patients-container">
    <div className="patients-navbar">
      <NavBar />
    </div>
    <div className="patients-content">
      <div className="patients-header">
        <h1 className="patients-header-title">Patients</h1>
        <div className="patients-header-btn">
          <Button name="Add new patient" type="primary" onClick={ ()=> setOpen(true) }/>
          <Modal isOpen={open} onClose={() => setOpen(false)} width="500px" height="500px">
            <ModalHeader title="Add new patient" onClose={ () => setOpen(false) }/>
            <ModalContent>
                <Input type="text" placeholder="Name" required={true} value={name} onChange={(e)=> setName(e.target.value)}/>
                <Input type="text" placeholder="NIC" required={true} value={nic} onChange={(e)=> setNic(e.target.value)}/>
                <Input type="number" placeholder="Age" required={true} value={age} onChange={(e)=> setAge(e.target.value)}/>
                <Input type="select" placeholder="Gender" options={["Male", "Female", "Other"]} required={true} value={gender} onChange={(e)=> setGender(e.target.value)}/>
                <Input type="email" placeholder="Email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input type="text" placeholder="Address" required={true} value={address} onChange={(e)=> setAddress(e.target.value)}/>
            </ModalContent>
            <ModalController>
              <Button type="primary" name="Add patient" onClick={addNewPatient} variant="submit" isLoading={modalLoading}/>
            </ModalController>
          </Modal>
        </div>
      </div>
    </div>
  </div>)
}

export default PatientsView;