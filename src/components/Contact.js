import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container-fluid padding contact-page ">
      <br />
      <div className="row padding">
        <div className="col-md-6 col-lg-6 ">
          <div className="container-fluid padding">
            <h1 className="title display-4">Feel free to contact me</h1>
            <br />
            <address className="contact-info">
              Address : Timis / Timisoara
            </address>
            <p className="contact-info">Phone : +40729407113</p>
            <p className="contact-info">Email : cr1zzi112@gmail.com</p>
            <hr className="lead" />
            <div className="container-fluid padding ">
              <div className="row text-center padding">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  style={{ color: "#3b5998" }}
                  className=" fa-4x contact-icons "
                />
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  style={{ color: "#e1306c" }}
                  className=" fa-4x contact-icons "
                />
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  style={{ color: "#1da1f2" }}
                  className="fa-4x contact-icons "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="well well-sm">
            <form className="form-horizontal" action="" method="post">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-3 control-label" for="name">
                    Name
                  </label>
                  <div className="col-md-9">
                    <input
                      id="name"
                      name="name"
                      placeholder="your name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label" for="email">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" for="message">
                    Message
                  </label>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                  <br />
                  <div className="form-group">
                    <div className="col-md-12 ">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Contact;
