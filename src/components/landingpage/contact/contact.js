import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required("*Please enter your name."),
  email: yup
    .string()
    .email("*Please enter a valid email address.")
    .required("*Email is required."),
  message: yup.string().required("*Enter Your Message.")
});

export default function Contact() {

  const {
    register,
    handleSubmit: handleSubmit,
    formState: { errors: client },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  //Function Call to validate doctor Address
  const onSubmit = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
      <div className="container-fluid" id="action8">
        <div className="container  pt-5 pb-5 ">
          <div className="row">
            <h3 className="text-center fw-bold fst-italic mb-4">CONTACT US</h3>
            <div className="col-lg-6">
              <h3 className="contact_h3">CONTACT INFORMATION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="d-flex mt-2">
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="bg-warning d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon
                    icon={faMobileRetro}
                    className="bg-warning p-2 icon"
                  />
                </div>

                <div className="ms-2 mt-1">
                  <spam className="fw-bold">CALL: </spam>+91 950 17 xxxxx
                </div>
              </div>

              <div className="d-flex mt-2">
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="bg-warning d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="p-2 icon" />
                </div>

                <div className="ms-2 mt-1">
                  <spam className="fw-bold">Mail: </spam>info@SecureSync.com
                </div>
              </div>

              <div className="d-flex mt-2">
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="bg-warning d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="bg-warning p-2 icon"
                  />
                </div>
                <div className="ms-2 mt-1">
                  <spam className="fw-bold">Address : </spam>692 Eagle Lane
                  Duluth, Coimbatore.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="contact_h2">SEND US MESSAGE</h2>
              <p>Please don’t hesitate to chat with me just drop a line.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      {...register("name")}
                    />
                    {client.name && (
                      <p className="text-danger fw-bold">
                        {client.name.message}
                      </p>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      {...register("email")}
                    />
                    {client.email && (
                      <p className="text-danger fw-bold">
                        {client.email.message}
                      </p>
                    )}
                  </div>
                  <div className="col-lg-12 mt-3">
                    <textarea
                      type="text"
                      placeholder="Message Area"
                      className="form-control"
                      {...register("message")}
                    />
                    {client.message && (
                      <p className="text-danger fw-bold">
                        {client.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button type="submit" className="bg-warning border-0 p-2 mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5 contactBg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-3 d-grid align-items-center">
              <h2 className="headColor fw-bold pe-5">
                Decentralizing The World
              </h2>
            </div>
            <div className="col-lg-3 mt-3 col-md-6">
              <h3 className="headColor">Join Us</h3>
              <p>
                Join us for utilizing your expertise in game-changing
                technology.
              </p>
              <button className="contactBtn">SEARCH JOBS</button>
            </div>

            <div className="col-lg-3 mt-3 col-md-6">
              <h3 className="headColor">Stay Informed</h3>
              <p>
                Follow the latest updates on crypto evolution to stay informed.
              </p>
              <button className="contactBtn">CONTACT US</button>
            </div>
            <div className="col-lg-3 mt-3 col-md-6">
              <h3 className="headColor">Newsletter</h3>
              <p>Learn about our journey of success through our newsletter.</p>
              <button disabled className="contactBtn">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
