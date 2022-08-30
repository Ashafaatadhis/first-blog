import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">&copy; 2022 All Right Reserved</div>
        <div className="sosmed">
          <a href="https://www.facebook.com/despacito.buruten">
            <FaFacebookF />
          </a>
          <a href="https://github.com/Ashafaatadhis">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/ashafaatadhis/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/adhis-mauliyahsa-ashafaat-2446781bb/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
