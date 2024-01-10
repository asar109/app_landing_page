import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div id="features">
      <div className="feauter-main-heading">
        <h1>
          <span>Awesome</span> Features
        </h1>
      </div>
      <section className="feature-sect container ">
        <div className="feature-row">
          <div className="feautre_col col1">
            <div className="f-i-box">
              <i className="fa fa-download fa-4x" aria-hidden="true"></i>
            </div>
            <div className="heading-box">
              <h3>Auto Install System</h3>
            </div>
            <div className="f-description-box">
              <p>
              Effortless onboarding with our Auto Install System for a seamless user experience.
              </p>
            </div>
          </div>
          <div className="feautre_col col2">
            <div className="f-i-box">
              <i className="fa fa-paint-brush fa-4x" aria-hidden="true"></i>
            </div>
            <div className="heading-box">
              <h3>Pixel Perfect Design</h3>
            </div>
            <div className="f-description-box">
              <p>
              Immerse users in a visually stunning interface with meticulous Pixel Perfect Design
              </p>
            </div>
          </div>
          <div className="feautre_col col3">
            <div className="f-i-box">
              <i className="fa fa-check fa-4x" aria-hidden="true"></i>
            </div>
            <div className="heading-box">
              <h3>Fast Load loop</h3>
            </div>
            <div className="f-description-box">
              <p>
              Swift interactions and instant access to information with our innovative Fast Load Loop technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
