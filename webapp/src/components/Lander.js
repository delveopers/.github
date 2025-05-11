import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Lander.css";

import mainLogo from "./assets/Logo-2.png";

export default function Lander() {
  return (
    <>
      <div className="lander">
        <div className="lander-section">
          <span className="mainLogo">
            <img src={mainLogo} alt="main logo" />
          </span>
          <h3 className="logo-text">
            Discrete Entity for Volitional<br />Systems (D.E.V.S.)
          </h3>
        </div>
        <div className="option-section container">
          <div className="row">
            <div className="col-lg-4 option-text text-center">
              <Link to="/home" className="option-link">
                Home
              </Link>
            </div>
            <div className="col-lg-4 option-text text-center">
              <Link to="/home" className="option-link">
                Docs
              </Link>
            </div>
            <div className="col-lg-4 option-text text-center">
              <Link to="/home" className="option-link">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}