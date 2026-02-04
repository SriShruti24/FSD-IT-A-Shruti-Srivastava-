import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">MyApp</div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Cards</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
