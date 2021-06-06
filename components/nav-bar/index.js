import HomeImage from "../../static/icons/home.svg";
import SessionsImage from "../../static/icons/calendar.svg";
import PatientsImage from "../../static/icons/clipboard.svg";
import BalancesImage from "../../static/icons/dollar-sign.svg";
import UsersImage from "../../static/icons/users.svg";
import UserImage from "../../static/icons/user.svg";
import HelpImage from "../../static/icons/help-circle.svg";
import { useEffect, useRef, useState } from 'react';
import { useRouter }  from "next/router";
import './styles.scss';

const NavBar = ({ href }) => {

  const [selected, setSelected] = useState("");
  const page = useRef("")
  const router = useRouter();

  const navSelect = (value) => {
    setSelected(value)
    page.current = value
    router.push(`/${page.current}`)
  }

  useEffect(()=> {
    setSelected(router.route.replace("/", ""))
  }, [page])

  return <>
  <div className="navbar-container">
    <div className="navbar-title">Doctrio</div>

    <div className="navbar-list">

      <div className={`navbar-list-item ${selected === "" ? "home": ""}`} onClick={ ()=> navSelect("") }>
        <img src={HomeImage} className="navbar-list-item-img"/>
        <div className="navbar-list-item-txt">Home</div>
      </div>

      <div className={`navbar-list-item ${selected === "sessions" ? "sessions": ""}`} onClick={ ()=> navSelect("sessions") }>
        <img src={ SessionsImage } className="navbar-list-item-img"/>
        <div className="navbar-list-item-txt">Sessions</div>
      </div>

      <div className={`navbar-list-item ${selected === "patients" ? "patients": ""}`} onClick={ ()=> navSelect("patients") }>
        <img src={ PatientsImage } className="navbar-list-item-img"/>
        <div className="navbar-list-item-txt">Patients</div>
      </div>

      <div className={`navbar-list-item ${selected === "balances" ? "balances": ""}`} onClick={ ()=> navSelect("balances") }>
        <img src={ BalancesImage } className="navbar-list-item-img"/>
        <div className="navbar-list-item-txt">Balances</div>
      </div>

      <div className={`navbar-list-item ${selected === "users" ? "users": ""}`} onClick={ ()=> navSelect("users") }>
        <img src={ UsersImage } className="navbar-list-item-img"/>
        <div className="navbar-list-item-txt">Users</div>
      </div>

    </div>

    <div className="navbar-footer">
      <hr className="navbar-footer-line" />
      <div className="navbar-footer-list">
        <div className={`navbar-footer-item ${selected === "help" ? "help": ""}`} onClick={ ()=> navSelect("help") }>
          <img src={ HelpImage } className="navbar-footer-item-img"/>
          <div className="navbar-footer-item-txt">Help</div>
        </div>

        <div className={`navbar-footer-item ${selected === "account" ? "account": ""}`} onClick={ ()=> navSelect("account") }>
          <img src={ UserImage } className="navbar-footer-item-img"/>
          <div className="navbar-footer-item-txt">Account</div>
        </div>

      </div>
    </div>
  </div>
  </>
}

export default NavBar;