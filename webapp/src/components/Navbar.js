import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./styles/Navbar.css";

import mainLogo from './assets/Logo-2.png';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location.pathname]);
  if (!showNav) {
    return null;
  }
  return (
    <>
      <div className="navbar-section">
        <nav id="mainNavbar" className={`navbar navbar-expand-md fixed-top d-${showNav}`} style={{ display: `${showNav}`}}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className='navbar-brand-logo'>
                <img src={mainLogo} alt="DEVS logo" />
              </span>
              <h3 className='navbar-brand-title'>Discrete Entity for Volitional<br />Systems (D.E.V.S.)</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className='nav-link'>
                    Home.
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/docs" className='nav-link'>
                    Docs.
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className='nav-link'>
                    Projects.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </div >
    </>
  )
}