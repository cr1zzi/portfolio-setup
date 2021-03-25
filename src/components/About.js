import React from "react";
import me from "../components/me.png";

const About = () => {
  return (
    // <div className="about-wraper">
    <div className="container-fluid padding color-wraper ">
      <div className="row padding about-info ">
        <div className="col-lg-8">
          <p>
            Hey there <br /> I'm Cojocariu Cristian , a self-taught frontend web
            developer and web designer and I'm here to give you all of my best.
            Here are some of my work
          </p>
          <a href="" className="about-button">
            Check this out
          </a>
        </div>
        <div className="col-lg-4">
          <img
            src={me}
            alt="photo"
            className="me-image img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>

    // <div className="about-info row">
    //   <div className="color-wraper ">
    //     <p>
    //       Hey there <br /> I'm Cojocariu Cristian , a self-taught frontend web
    //       developer and web designer and I'm here to give you all of my best.
    //       <br />
    //       Here are some of my work.
    //       <img src={me} alt="photo" className="me-image col-2 " />
    //     </p>
    //     <a href="" className="about-button">
    //       Check this out
    //     </a>
    //   </div>
    // </div>
    // </div>
  );
};

export default About;
