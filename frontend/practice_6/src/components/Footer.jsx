import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>

      <div className="footer-center">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
