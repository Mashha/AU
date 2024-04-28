import React from "react";
import "./footer.css";
import footerLogo from "../../images/logo_two.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={footerLogo} alt="" />
        </div>
        <div className="social-media">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>email</p>
        </div>
        <div className="legal-info">
          <h3>Legal info</h3>
          <p>privacy policy</p>
        </div>

        <div className="footer-rights">
         <p><i className="fa-solid fa-copyright"></i>
          Anonymous for the unheard</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
