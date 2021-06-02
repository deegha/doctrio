import "./styles.scss";
import { createPortal } from "react-dom"
import { useEffect, useState } from "react";

const Moadl = ({ children, isOpen, onClose, title, height, width }) => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, mounted)

  if(!isOpen) {
    return null
  }

  const modal = (
    <>
      <div className="modal-overlay" onClick={() => onClose()}/>
      <div className="modal-container" style={{ height: height, width: width }}>
        {children}
      </div>
    </>
  )

  return mounted? createPortal(modal, document.querySelector("#modal")): null;

}

export default Moadl;