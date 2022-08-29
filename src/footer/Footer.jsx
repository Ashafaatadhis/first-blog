import React from "react";
import "./footer.css";
import { BiCopyright } from "react-icons/bi";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="about-website">
            <h1>Adhis</h1>
            <p>Learn about Web accessibility, Web performance, and Database management.</p>
          </div>
          <div className="quick-links">
            <h1>Quick links</h1>
            <p>About Us</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="copyright">
        {/* <div className="copy-icon"></div> */}

        <p>
          &copy; Copyright 2022 <span>Adhis</span>
        </p>
      </div>
    </footer>
  );
}
