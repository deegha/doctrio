import "./styles.scss";

const ModalController = ({ children }) => {

  return <div className="modal-controller">
    <div className="modal-controller-components"> { children } </div>
  </div>
}

export default ModalController;