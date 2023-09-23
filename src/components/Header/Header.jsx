import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "si",
    name: "Slovenian",
    country_code: "si",
  },
];

function Header() {
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t, i18n } = useTranslation();
  
  // useEffect(() => {
  //   console.log("Setting page stuff");
  //   document.title = t("app_title");
  // }, [currentLanguage, t]);

  const [showNav, setShowNav] = useState(false);
  const [showLang, setShowLang] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  function dropDown() {
    setShowLang(!showLang);
  }

  return (
    <>
      <div className="nav">
        <NavLink to="/AU/" className="logo">
          <img src={logo} alt="" />
        </NavLink>

        <div className="menu-lang" onClick={dropDown}>
          <div className="menu-button-lang">
            <span>
              <i className="fa-solid fa-globe"></i>
            </span>
          </div>
        </div>
        <div className={showLang ? "menu-lang-content drop" : "menu-lang-content"}>
          <div className="flex">
            {languages.map(({ code, name, country_code }) => (
              <div key={country_code} className="lang-inner">
                <span
                  className={`fi fi-${country_code}`}
                  style={{
                    opacity: currentLanguageCode === code ? 0.5 : 1,
                  }}></span>
                <button
                  onClick={() => {
                    i18next.changeLanguage(code);
                    setShowLang(false);
                  }}
                  disabled={code === currentLanguageCode}>
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* navbar */}
        <div className="menu-container">
          <div className="menu-button" onClick={handleClick}>
            {showNav ? (
              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
            ) : (
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            )}
          </div>
        </div>

        <div className={showNav ? "nav-content show" : "nav-content"}>
          <div className="flex">
            <div className="nav-container closed">
              <div className="nav-container-inner" id="first">
                <div className="menu-name">
                  <NavLink to="/who-we-are" onClick={handleClick}>
                    who we are
                  </NavLink>
                </div>
                <div className="icon" id="iconOne">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-container closed">
              <div className="nav-container-inner" id="sec">
                <div className="menu-name">
                  <NavLink to="/what-we-do" onClick={handleClick}>
                    what we do
                  </NavLink>
                </div>
                <div className="icon">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-container closed">
              <div className="nav-container-inner" id="third">
                <div className="menu-name">
                  <NavLink to="/issues" onClick={handleClick}>
                    issues
                  </NavLink>
                </div>
                <div className="icon">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-container closed">
              <div className="nav-container-inner">
                <div className="menu-name">
                  <NavLink to="/get-involved" onClick={handleClick}>
                    get involved
                  </NavLink>
                </div>
                <div className="icon">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-container closed">
              <div className="nav-container-inner">
                <div className="menu-name">
                  <NavLink to="/resources" onClick={handleClick}>
                    resources
                  </NavLink>
                </div>
                <div className="icon">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="donate-btn">donate</button>
      </div>
    </>
  );
}

export default Header;
