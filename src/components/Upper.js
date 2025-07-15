import React from "react";
import "../App.css";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Upper = () => {
  return (
    <>
      <div className="upper" id="home">
        {/* LEFT SECTION */}
        <div className="upper-left">
          <h1 style={{marginTop:"2vh"}}>DURGA PRASAD UDDAGIRI</h1>
          <h2>Full Stack Developer</h2>
          <p style={{fontSize:"2vh"}}>I build scalable, secure, and modern web applications.</p>


<a href="/durgaprasaduddagiri.pdf" download className="resume">
  Download Resume
</a>

          <br />
         
          <button
  className="scroll-button"
  onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
>
  ↓ See More
</button>


        </div>

        {/* RIGHT SECTION */}
        <div className="upper-right">
        <img src="image.png" alt="" aria-hidden="true" />


          {/* Social Media Icons AFTER IMAGE */}
          <div className="social-icons-right">
            <a href="https://github.com/durgaprasad5649" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/durga-prasad-uddagiri/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dasarpagrud/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:durgaprasaduddagiri@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upper;
