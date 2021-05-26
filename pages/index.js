import "firebase/functions";
import { useState } from "react";
import Modal from "../components/modal/modal"
import ModalHeader from "../components/modal/modal-header/modal-header";
import withAuth from "../services/withAuth"

const Home = () => {

  const [open, setOpen] = useState(false)

  return <div>
    <button onClick={() => setOpen(!open)}>open modal</button>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="add session model">
      <ModalHeader title="Test tile" onClose={() => setOpen(false)}/>
    </Modal>
  </div>
}

export default withAuth(Home)
