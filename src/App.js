import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upper from "./components/Upper";
import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scroll down → hide navbar
      } else {
        setShowNavbar(true); // scroll up → show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <Navbar visible={showNavbar} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Upper />
              <Bottom />
            </>
          }
        />
        <Route path="/beyond-code" element={<Personal />} />
      </Routes>
    </Router>
  );
}

export default App;
