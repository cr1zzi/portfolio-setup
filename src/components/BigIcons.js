import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const BigIcons = () => {
  return (
    <div className="icon-wraper container-fluid padding  ">
      <div className="row text-center padding">
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ color: "#e34f26" }}
          className="html-icon fa-7x col-3 col-sm-4 col-md-4 col-lg-2"
        />
        <FontAwesomeIcon
          icon={faCss3}
          style={{ color: "#002561" }}
          className="css-icon fa-7x col-3 col-sm-4 col-md-4 col-lg-2"
        />
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: "#f7df1e" }}
          className="js-icon fa-7x col-3 col-sm-4 col-md-4 col-lg-2"
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          style={{ color: "#602C50" }}
          className="bs-icon fa-7x col-3 col-sm-4 col-md-4 col-lg-2"
        />
        <FontAwesomeIcon
          icon={faNode}
          style={{ color: "#6cc24a" }}
          className="nj-icon fa-7x col-6 col-sm-4 col-md-4 col-lg-2"
        />
        <FontAwesomeIcon
          icon={faGitAlt}
          style={{ color: "#e24329" }}
          className="git-icon fa-7x col-6 col-sm-4 col-md-4 col-lg-2"
        />
      </div>
    </div>
  );
};

export default BigIcons;
