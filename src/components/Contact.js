import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email format").required("Email required"),
  message: Yup.string().min(10).max(100).required("Enter your message"),
});

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "gmail",
      "template_9vhie2p",
      e.target,
      "user_TlhaJxsDUOl8lpaEeB8zS"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

/*notification on sending message*/
toast.configure();
const notify = () => {
  toast.info("Your message has sended", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};

const Contact = () => {
  return (
    <div className="container-fluid padding contact-page " id="contact">
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
                <a href="https://www.facebook.com/crizi.crizy">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    style={{ color: "#3b5998" }}
                    className=" fa-4x contact-icons "
                  />
                </a>
                <a href="https://www.instagram.com/cristi.koaj/">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    style={{ color: "#e1306c" }}
                    className=" fa-4x contact-icons "
                  />
                </a>
                <a href="https://twitter.com/cr1zzi">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    style={{ color: "#1da1f2" }}
                    className="fa-4x contact-icons "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="well well-sm">
            <form
              className="form-horizontal"
              action=""
              method="post"
              onSubmit={sendEmail}
            >
              <fieldset>
                <div className="form-group">
                  <label className="col-md-3 control-label" for="name">
                    Name
                  </label>

                  <div className="col-md-9">
                    <input
                      id="name"
                      name="name"
                      placeholder="Your Name"
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
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={notify}
                      >
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
