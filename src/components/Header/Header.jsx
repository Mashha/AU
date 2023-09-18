import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

function Header() {
  const currentLanguageCode = cookies.get("i18next") || "en";

  const [showNav, setShowNav] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const { t } = useTranslation();

  function handleClick() {
    setShowNav(!showNav);
  }

  function dropDown() {
    setShowLang(!showLang);
  }

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

  return (
    <>
      <div className="nav">
        <NavLink to="/AU/" className="logo">
          <img src={logo} alt="" />
        </NavLink>

        {/* lang */}
        <div className="menu-lang">
          <div className="menu-button-lang" onClick={dropDown}>
            <span>
              <i className="fa-solid fa-globe"></i>
            </span>
          </div>
          <div
            className={
              showLang ? "menu-lang-content drop" : "menu-lang-content"
            }
          >
            <div className="flex">
              {languages.map(({ code, name, country_code }) => (
                <div key={country_code} className="lang-inner">
                  <span
                    className={`fi fi-${country_code}`}
                    style={{
                      opacity: currentLanguageCode === code ? 0.5 : 1,
                    }}
                  ></span>
                  <button
                    onClick={() => {
                      i18next.changeLanguage(code);
                      setShowLang(false);
                    }}
                    disabled={code === currentLanguageCode}
                  >
                    {name}
                  </button>
                </div>
              ))}
            </div>
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
          <div className={showNav ? "nav-content show" : "nav-content"}>
            <div className="flex">
              <div className="nav-container closed">
                <div className="nav-container-inner" id="first">
                  <div className="menu-name">
                    <NavLink to="/who-we-are" onClick={handleClick}>
                      {t("about_us")}
                    </NavLink>
                  </div>
                  <div className="icon" id="iconOne">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
                <ul className="list"></ul>
              </div>
              <div className="nav-container closed">
                <div className="nav-container-inner" id="sec">
                  <div className="menu-name">
                    <NavLink to="/what-we-do" onClick={handleClick}>
                      {t("what_we_do")}
                    </NavLink>
                  </div>
                  <div className="icon">
                    {showList ? (
                      <span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    )}
                  </div>
                </div>
                <ul className="list">
                  <li>
                    <a href="#">Street activism</a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                </ul>
              </div>
              <div className="nav-container closed">
                <div className="nav-container-inner" id="third">
                  <div className="menu-name">
                    <NavLink to="/issues" onClick={handleClick}>
                      {t("issues")}
                    </NavLink>
                  </div>
                  <div className="icon">
                    {showList ? (
                      <span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    )}
                  </div>
                </div>
                <ul className={showList ? "list show" : "list"}>
                  <li>
                    <a href="#">Meat</a>
                  </li>
                  <li>
                    <a href="#">Dairy</a>
                  </li>
                  <li>
                    <a href="#">Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fish</a>
                  </li>
                </ul>
              </div>
              <div className="nav-container closed">
                <div className="nav-container-inner">
                  <div className="menu-name">
                    <NavLink to="/get-involved" onClick={handleClick}>
                      {t("get_involved")}
                    </NavLink>
                  </div>
                  <div className="icon">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
                <ul className="list"></ul>
              </div>
              <div className="nav-container closed">
                <div className="nav-container-inner">
                  <div className="menu-name">
                    <NavLink to="/resources" onClick={handleClick}>
                      {t("resources")}
                    </NavLink>
                  </div>
                  <div className="icon">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
                <ul className="list"></ul>
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