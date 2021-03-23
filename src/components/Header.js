import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>
          Welcome <p></p> I'm Cristian
        </h1>
        <Typed
          className="typed-text"
          strings={["Web Designer", "Web development"]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
