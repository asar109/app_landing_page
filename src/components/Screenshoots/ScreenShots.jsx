import React from "react";
import "./screenshot.css";
import img1 from "../../assets/Images/1.png";
import img2 from "../../assets/Images/2.png";
import img3 from "../../assets/Images/3.png";

const Screenshots = () => {
  return (
    <>
      <div id="ss" className="screenshot-main-heading container">
        <h1>
          <span>App</span> Screenshots
        </h1>
      </div>
      <section className="screen-shot-container container">
        <div className="s-s-box">
          <img src={img1} alt="" /> 
        </div>
        <div className="s-s-box">
          <img src={img2} alt="" />
        </div>
        <div className="s-s-box">
          <img src={img3} alt="" />
        </div>
        <div className="s-s-box">
          <img src={img2} alt="" />
        </div>
      </section>
    </>
  );
};

export default Screenshots;
