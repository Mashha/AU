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
        <div className="footer-data">
          <div className="social-media">
            <h3>Follow us</h3>
            <div className="links">
              <a href="">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <a href="mailto:anon4unheard@gmail.com">
            <i className="fa-solid fa-envelope"></i>
              <span>Write to us!</span>
            </a>
            <p>anon4unheard@gmail.com</p>
          </div>
        </div>
        {/* <div className="legal-info">
          <h3>Legal info</h3>
          <p>privacy policy</p>
        </div> */}
      </div>
      <div className="footer-rights">
        <p>
          <i className="fa-solid fa-copyright"></i>
          Anonymous for the unheard
        </p>
      </div>
    </div>
  );
}

export default Footer;
