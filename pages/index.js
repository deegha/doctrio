import "firebase/functions";
import { useState } from "react";
import Modal from "../components/modal/modal"
import ModalHeader from "../components/modal/modal-header/modal-header";
import ModalContent from "../components/modal/modal-content/modal-content"
import withAuth from "../services/withAuth";
import Button from "../components/button/button";
import ModalController from "../components/modal/modal-controller/modal-controller";
import Input from "../components/input/input";
import Card from "../components/card/card";

const Home = () => {

  const [open, setOpen] = useState(false)

  return <div>
    <button onClick={() => setOpen(!open)}>open modal</button>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="add session model" height="500px" width="500px">
      <ModalHeader title="Test tile" onClose={() => setOpen(false)}/>
      <ModalContent>
        {/* <Input placehoolder="" type="date" placeholder="Enter password"/> */}
      </ModalContent>
      <ModalController>
        <Button name="Add" type="secondary" isLoading={true}/>
        {/* <Button name="Add" type="secondary"/> */}
      </ModalController>
    </Modal>
    <h1>Hi babe</h1>
    <Card type="secondary">
      <h1>hellow world</h1>
    </Card>
<h1>hiiiiiii</h1>
  </div>
}

export default withAuth(Home)
