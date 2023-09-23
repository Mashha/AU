import React from "react";
import "./whatWeDo.css";
import street_activism_one from "../../images/street_activism1.jpg";
import street_activism_two from "../../images/street_activism2.jpg";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const {t} = useTranslation();
  
  return (
    <div className="what-we-do">
      <div className="what-we-do-hero">
        <div className="overlay">
          <div className="what-we-do-inner">
            <h1>{t("hero-what-we-do.title")}</h1>
          </div>
        </div>
      </div>

      <div className="what-we-focus-on">
        <h2>{t("hero-what-we-do.title_one")}</h2>
        <p>{t("hero-what-we-do.para_one")}</p>
        <p>{t("hero-what-we-do.para_two")}</p>
      </div>

      <div className="street-activism">
        <div className="activism-image">
          <img src={street_activism_two} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="activism-para center">
          <p>{t("hero-what-we-do.para_three")}</p>
        </div>
      </div>
      <div className="education">
        <div className="education-image">
          <img src={street_activism_one} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="education-para center">
          <p>
          {t("hero-what-we-do.para_four")}</p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
