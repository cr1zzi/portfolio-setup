import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const BigIcons = () => {
  return (
    <div className="icon-wraper container-fluid padding  ">
      <br />
      <h1 className=" text-center display-4 big-icons-text">
        Technologies I use
      </h1>
      <hr />
      <br />
      <div className="row text-center padding">
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: "#f7df1e" }}
          className="js-icon fa-7x col-3 col-sm-3 col-md-3 col-lg-3 "
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          style={{ color: "#602C50" }}
          className="bs-icon fa-7x col-3 col-sm-3 col-md-3 col-lg-3 "
        />
        <FontAwesomeIcon
          icon={faNode}
          style={{ color: "#6cc24a" }}
          className="nj-icon fa-7x col-3 col-sm-3 col-md-3 col-lg-3 "
        />
        <FontAwesomeIcon
          icon={faGitAlt}
          style={{ color: "#e24329" }}
          className="git-icon fa-7x col-3 col-sm-3 col-md-3 col-lg-3 "
        />
      </div>
      <br />
    </div>
  );
};

export default BigIcons;
