import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaHome,
  FaLinkedin,
  FaMobileAlt,
  FaRegClock,
} from "react-icons/fa";

const ContactWithUs = () => {
  return (
    <div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <section>
        <div className="  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="m-10">
              <div>
                <h2 className="flex items-center text-2xl mb-3">
                  <FaHome className="mr-3" /> Dhaka, bangladesh
                </h2>
                <h2 className="flex items-center text-2xl mb-3">
                  <FaMobileAlt className="mr-3" /> +880 123456789
                </h2>
                <h2 className="flex items-center text-2xl mb-3">
                  <FaRegClock className="mr-3" /> Serving 7 Days A Week From 9am
                  - 5pm
                </h2>
                <h2 className="flex items-center text-2xl mb-3">
                  <FaEnvelope className="mr-3" /> support@domain.com
                </h2>
              </div>
              <div className="flex ">
                <a
                  href="https://www.facebook.com/mostafizur.proo/"
                  className="text-3xl pl-5 pr-5 hover:text-orange-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/Mostafizur-Pro"
                  className="text-3xl pl-5 pr-5 hover:text-orange-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mostafizur-pro/"
                  className="text-3xl pl-5 pr-5 hover:text-orange-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDsfVTbhkqvWXcJPvfJKMwQPKzlzPBHFpVHwcBqMmZwPmgBLZQTddMqBxMtgFXhkcNXbKm"
                  className="text-3xl pl-5 pr-5 hover:text-orange-400"
                >
                  <FaGooglePlus />
                </a>
              </div>
            </div>

            <div className="card flex-shrink-0 w-full max-w-lg ">
              <form className="card-body">
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="f-name"
                      placeholder="First Name Here"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="l-name"
                      placeholder="Last Name Here"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Here"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject (Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message Here"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button
                    id="text"
                    type="submit"
                    value="Send"
                    className="btn btn-info text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactWithUs;
