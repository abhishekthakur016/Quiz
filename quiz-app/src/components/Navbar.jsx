import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Quiz<span>Master</span></h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#quizzes">Quizzes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
