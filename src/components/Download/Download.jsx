import React from "react";
import "./Download.css";
import CustomButton from "../CustomButton/CustomButton";
const Download = () => {
  return (
    <>
      <section id="download" className="download-sec container">
        <div className="d-s-main-heading">
          <h1>
            <span>Download</span> App
          </h1>
        </div>

        <div className="inside-download-section">
          <div className="d-s-box">
            <div className="d-s-icon">
              <i className="fa fa-apple fa-4x" aria-hidden="true"></i>
            </div>
            <div className="d-s-heading">
              <h1>Apple Store</h1>
            </div>
            <div className="d-s-discription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, eaque!
              </p>
            </div>
            <div className="d-s-button">
              <CustomButton text={"Download Now"} />
            </div>
          </div>
          <div className="d-s-box">
            <div className="d-s-icon">
              <i className="fab fa-google-play fa-4x"></i>
            </div>
            <div className="d-s-heading">
              <h1>Paly Store</h1>
            </div>
            <div className="d-s-discription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, eaque!
              </p>
            </div>
            <div className="d-s-button">
              <CustomButton text={"Download Now"} />
            </div>
          </div>
          <div className="d-s-box">
            <div className="d-s-icon">
              <i className="fa fa-windows fa-4x" aria-hidden="true"></i>
            </div>
            <div className="d-s-heading">
              <h1>Microsoft Store</h1>
            </div>
            <div className="d-s-discription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, non.
              </p>
            </div>
            <div className="d-s-button">
              <CustomButton text={"Download Now"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
