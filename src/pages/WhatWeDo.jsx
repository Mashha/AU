import React from "react";
import "./WhatWeDo/WhatWeDo.css";
import mask from "../images/mask.jpg";
import street_activism_two from "../images/street_activism2.jpg";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <div className="what-we-do">
      <div className="what-we-do-hero">
        <div className="overlay">
          <div className="what-we-do-inner">
            <h1>{t("what-we-do.title")}</h1>
          </div>
        </div>
      </div>

      <div className="what-we-focus-on">
        <div className="what-we-focus-on-inner">
          <h2>{t("what-we-do.title_one")}</h2>
          <p>{t("what-we-do.para_one")}</p>
          <p>{t("what-we-do.para_two")}</p>
        </div>

        <div className="cube">
          <div className="cube-image">
            <img src={street_activism_two} alt="" />
            <div className="color-overlay"></div>
          </div>
          <div className="cube-para center">
            <h2>{t("what-we-do.cube_title")}</h2>
            <p>{t("what-we-do.cube_one")}</p>
            <p>{t("what-we-do.cube_two")}</p>
          </div>
        </div>

        <div className="street-activism">
          <div className="activism-image">
            <img src={street_activism_two} alt="" />
            <div className="color-overlay"></div>
          </div>
          <div className="activism-para center">
            <h2>{t("what-we-do.activism_title")}</h2>
            <p>{t("what-we-do.activism_one")}</p>
            <p>{t("what-we-do.activism_two")}</p>
          </div>
        </div>

        <div className="education">
          <div className="education-image">
            <img src={mask} alt="" />
            <div className="color-overlay"></div>
          </div>
          <div className="education-para center">
            <h2>{t("what-we-do.mask_title")}</h2>
            <p>{t("what-we-do.mask_p1")}</p>
            <p>{t("what-we-do.mask_p2")}</p>
          </div>
        </div>

        <div className="join-the-movement">
          <button>{t("join_button")}</button>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
