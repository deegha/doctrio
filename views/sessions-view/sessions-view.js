import React from 'react';
import NavBar from '../../components/nav-bar';
import './styles.scss';

const SessionsView = () => {

  return <div className="sessions-container">
    <div className="sessions-navbar">
      <NavBar />
    </div>
    <div className="sessions-content">
      <h1 className="sessions-title">Sessions</h1>
    </div>
  </div>
}

export default SessionsView;