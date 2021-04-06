import React from "react";
import projectsImage from "../components/projects-image.jpg";

const Projects = () => {
  return (
    <div className="container-fluid padding">
      <div className="row text-center welcome ">
        <div className="col-12">
          <h1 className="display-4">Projects</h1>
          <hr  />
          <br />
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Title1</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, explicabo!
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    see more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Title1</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, explicabo!
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    see more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src={projectsImage} alt="" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title"> Title1</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, explicabo!
                  </p>
                  <a href="#" className="btn btn-outline-secondary">
                    see more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Projects;
