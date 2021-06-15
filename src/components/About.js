import React from "react";
import { Link } from "react-scroll";

import me from "../images/me.webp";

const About = () => {
  return (
    <div className="container-fluid padding about-page" id="about">
      <div className="row padding">
        <div className="col-md-12 col-lg-6 about-container">
          <h1 className=" display-4 about-title text-center ">
            {"<"}SomethingAboutMe {"/>"}
          </h1>
          <hr />
          <p className="about-info container-fluid">
            I'm Cojocariu Cristian , a Frond End Developer from Romania /
            Timisoara . I am always eager to learn new things that makes me a
            better developer
            {" ("}and a better person , why not? {")"} .
          </p>
          <p className="about-info container-fluid">
            Currently I'm focused on improving my UX/UI skills and to handle
            ReactJS better as I can. On near future I'll going deep to
            understand the Back End Development concepts .
          </p>
          <p className="about-info container-fluid">
            On my free time I enjoying hanging out with my girlfriend or with my
            friends , training at gym or playing some video games.
          </p>
          <p className="about-info-work container-fluid">
            Here are some of my work
          </p>
          <div className="container-fluid center-about-button">
            <button type="button" className="btn btn-lg about-button">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Check it out
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 my-auto ">
          <img src={me} alt="" className="img-fluid rounded-circle me-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
