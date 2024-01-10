import React from "react";
import "./header.css";
import { Link, Events, scrollSpy } from "react-scroll";
import logo from "../../assets/mernist_logo.png";

function Header() {
  React.useEffect(() => {
    scrollSpy.update();
  }, [Link]);

  return (
    <div
      className="header_container"
    >
      <header className="container header">
        <div className="header_left_cantainer">

            <Link to="home" smooth={true} duration={500}>
              <img src={logo} alt="Mernist" className="img" />
            </Link>

        </div>
        <div className="header_right_cantainer">

            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="aboutus" smooth={true} duration={500}>
              About 
            </Link>
            <Link to="ourprojects" smooth={true} duration={500}>
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
            <Link to="contactus" smooth={true} duration={500}>
              Contact Us
            </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
