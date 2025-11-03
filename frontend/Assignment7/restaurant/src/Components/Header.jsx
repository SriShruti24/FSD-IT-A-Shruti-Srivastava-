import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">🍴 FoodieHub</div>

      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button className="order-btn">Order Now</button>
    </header>
  );
};

export default Header;
