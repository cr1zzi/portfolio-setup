import React from "react";
import projectsImage from "../components/busy-bee-display.jpg";

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
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Busy Bee</h4>
                  <p className="card-text">
                    I worked at this project as a freelancer . It's for a bakery
                    business in London / UK.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    See the project
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project one */}

            {/* project two */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project two */}

            {/* project three */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project three */}

            {/* project four */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project four */}
            {/* project five */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    Nothin to see right now
                  </a>
                </div>
              </div>
            </div>
            {/* end of the project five */}
            {/*  project six */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Cooming soon</h4>
                  <p className="card-text">
                    This project is under construction.
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
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
