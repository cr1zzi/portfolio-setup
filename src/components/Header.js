import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>
          Welcome <p></p> I'm Cristian
        </h1>
        <Typed
          className="typed-text"
          strings={["Web developing", "Web designing"]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
        <a href="#" className="btn-main-offer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact me
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
