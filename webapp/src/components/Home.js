import React from 'react';
import "./styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 about">
              <h2 className="section-title">About Us</h2>
              <br />
              <p className="section-content">
                We are working towards creating Artificial Consciousness & making the compute more efficient & accessible than ever. From creating foundational Language Models to lightweight Tensor manipulation
                library or researching & exploring the field of Computational Biology using AI.
              </p>
              <p className="section-content">
                We hope to become largest ML lab in India & then world.
              </p>
            </div>
            <hr />
            <div className="col-lg-12 join">
              <h2 className="section-title">Join Us!</h2>
              <br />
              <p className="section-content">
                We're actively looking for people who are ambitious & skilled enough to join us. We're not funded yet so it would be next to impossible for anyone to get paid.
                Despite of this if you're interested, just drop an email on:
                <span className="span-link"
                  onClick={() => {
                    navigator.clipboard.writeText("shivharsh44@gmail.com");
                    const tooltip = document.getElementById("copy-tooltip");
                    tooltip.style.opacity = 1;
                    setTimeout(() => (tooltip.style.opacity = 0), 2000);
                  }}>
                  shivharsh44@gmail.com
                  <span id="copy-tooltip" className="copy-tooltip">Copied!</span>
                </span>
                with some of your best projects in AI/ML domain & a reason for joining(not necessary but appreciated)
                and we'll get back to you soon.
              </p>
              <p className="section-content">
                Hardware related positions will be available soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}