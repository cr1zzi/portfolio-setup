import React from "react";
import projectsImage from "./projects-images/projects-image.jpg";
import bussybee from "./projects-images/bussy-bee.jpg";
import cryptoapp from "./projects-images/crypto-app.jpg";
import portfolioApp from "./projects-images/portfolio-app.jpg";
import galleryApp from "./projects-images/gallery-app.jpg";

const Projects = () => {
  return (
    <div className="container-fluid padding" id="projects">
      <div className="row text-center welcome ">
        <div className="col-12">
          <h1 className="display-4">Projects</h1>
          <hr />
          <br />
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            {/* project one */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={bussybee} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title"> Bussy Bee</h4>
                  <p className="card-text">
                    I work at this project as a freelancer for a bakery business
                    in London / UK. It's still in working. <br /> Technologies :
                    Bootstrap / GSAP
                  </p>
                  <a
                    href="https://github.com/cr1zzi/ildi-cake"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project one */}

            {/* project two */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={cryptoapp} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title"> Crypto currency app</h4>
                  <p className="card-text">
                    A project where you can see cryptocurrencies informations.{" "}
                    <br />
                    It's made in ReactJS{" "}
                  </p>
                  <a
                    href="https://github.com/cr1zzi/crypto-app"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project two */}

            {/* project three */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={portfolioApp} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title">This portfolio project</h4>
                  <p className="card-text">
                    This project it's made for introduce me and to show some of
                    my projects. <br /> It's made in ReactJS with Bootstrap.
                  </p>
                  <a
                    href="https://github.com/cr1zzi/portfolio-setup"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project three */}

            {/* project four */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={galleryApp} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title"> A gallery app</h4>
                  <p className="card-text">
                    A simple gallery app that extract data with axios and it's
                    designed with tailwind.
                  </p>
                  <a
                    href="https://github.com/cr1zzi/react-image-gallery"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project four */}

            {/* project five */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a
                    href="/#"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project five */}

            {/*  project six */}
            <div className="col-md-4 project-card">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top zoom" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a
                    href="/#"
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project six */}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Projects;
