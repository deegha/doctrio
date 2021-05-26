import "firebase/functions";
import { useState } from "react";
import Modal from "../components/modal/modal"
import withAuth from "../services/withAuth"

const Home = () => {

  const [open, setOpen] = useState(false)

  return <div>
    <button onClick={() => setOpen(!open)}>open modal</button>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="add session model">
      <h1>Hello world</h1>
    </Modal>
  </div>
}

export default withAuth(Home)
