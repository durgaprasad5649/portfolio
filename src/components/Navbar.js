import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
       
      </div>
      <div className="navbar-right">
        <button onClick={() => scrollToSection("home")} className="beyond-code-button">Home</button>
        
        <Link to="/beyond-code" className="beyond-code-button">Personal Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
