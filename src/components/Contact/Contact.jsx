import React from 'react';
import './contact.css';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <section id="contact"> {/* Wrap the Contact component in a section with id */}
      <div className='contact'>
        <h1>CONTACT US</h1>
        <div className="content">
          <div className="socials">
            <h2>Reach us via social media</h2>
            <div className="social-box">
              <div className="logo-box">
                <FaFacebook />
              </div>
              <div className="account-box">
                <p>NEUST - Sumacab Facilities</p>
              </div>
            </div>
            <div className="social-box">
              <div className="logo-box">
                <AiFillInstagram />
              </div>
              <div className="account-box">
                <p>@NEUST_FS</p>
              </div>
            </div>
            <div className="social-box">
              <div className="logo-box">
                <BiLogoGmail />
              </div>
              <div className="account-box">
                <p>facility.scheduler@NEUST.edu.ph</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-card">
              <h2>Send us a message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="concern">Concern:</label>
                  <textarea id="concern" name="concern"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
