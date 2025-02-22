import CloseIcon from "../../../static/icons/Close.svg"
import "./styles.scss";

const ModalHeader = ({ title, onClose }) => {

  return <div className="header-container">
    <div className="header-container-title">{ title }</div>
    <div className="header-container-close" onClick={() => onClose()}><img src={CloseIcon}/></div>
  </div>
}

export default ModalHeader;