import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Lander.css";

import mainLogo from "./assets/Logo-2.png";
import AudioPlayer from './AudioPlayer';
import skylab from "./assets/skylab.mp3";
import cover from "./assets/skylab.jpg";

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
            <div className="col-sm-4 option-text text-center">
              <Link to="/home" className="option-link">
                Home
              </Link>
            </div>
            <div className="col-sm-4 option-text text-center">
              <Link to="/docs" className="option-link">
                Docs
              </Link>
            </div>
            <div className="col-sm-4 option-text text-center">
              <Link to="/projects" className="option-link">
                Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="audio-section">
          <AudioPlayer src={skylab} filename={"The Skylab Plan"} coverSrc={cover}/>
        </div>
      <br />
      <br />
      </div>
    </>
  )
}