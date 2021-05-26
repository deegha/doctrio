import "firebase/functions";
import { useState } from "react";
import Modal from "../components/modal/modal"
import ModalHeader from "../components/modal/modal-header/modal-header";
import ModalContent from "../components/modal/modal-content/modal-content"
import withAuth from "../services/withAuth";
import Button from "../components/button/button";
import ModalController from "../components/modal/modal-controller/modal-controller";

const Home = () => {

  const [open, setOpen] = useState(false)

  return <div>
    <button onClick={() => setOpen(!open)}>open modal</button>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="add session model">
      <ModalHeader title="Test tile" onClose={() => setOpen(false)}/>
      <ModalContent>
        <h1>content</h1>
      </ModalContent>
      <ModalController>
        <Button name="Add" type="primary" />
      </ModalController>
    </Modal>
    <Button name="Add" type="secondary"/>
  </div>
}

export default withAuth(Home)
