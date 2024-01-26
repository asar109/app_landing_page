import React from "react";
import heroImg from "../../assets/Images/Mobile_vector.png";
import "./hero.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link, scrollSpy } from "react-scroll";
import playstore from "../../assets/Images/google.png";
import appstore from "../../assets/Images/app.png";
import Image from "../Image/Image";

const Hero = () => {
  React.useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <nav id="home">
      <div className="top-bar container">
        <div className="logo">
          <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
          <h1>App Name</h1>
        </div>
        <div className="nav-bar">
          <ul className="nav-bar-items">
            <li className="nav-bar-item">
              <Link to="features" smooth={true} duration={550}>
                Features
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to="funfacts" smooth={true} duration={800}>
                  Facts
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to="ss" smooth={true} duration={1500}>
                Screenshots
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to="download" smooth={true} duration={2000}>
                Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-description container">
        <div className="left-side-box">
          <h1 className="hero_heading">
            Life be easy with <br /> our app services
          </h1>
          <div className="hero_images">
            <div>
            <Image alt={'App Store'} src={appstore} />
            </div>
            <div>
            <Image alt={'Play store'} src={playstore} />
            </div>
          </div>
          <div className="button-box">
         <Link to="features" smooth={true} duration={550} >
         <CustomButton text={"Expolore"} /></Link>
          </div>
        </div>
        <div className="right-side-box ">
         <Image alt={'Hero Image'} src={heroImg} />
        </div>
      </div>
    </nav>
  );
};

export default Hero;
