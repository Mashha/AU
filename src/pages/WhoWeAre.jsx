import React from "react";
import "./WhoWeAre/whoWeAre.css";
import values from "../images/values.jpg";
import team from "../images/team.jpg";
import { useTranslation } from "react-i18next";

function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <div className="who-we-are-main">
      <div className="who-we-are-hero">
        <div className="overlay">
          <div className="who-we-are-inner">
            <h1>Voice for the animals</h1>
          </div>
        </div>
      </div>

      <div className="who-we-are">
        <div className="who-we-are-inner">
          <h2>{t("about_us.who_title")}</h2>
          <p>{t("about_us.who")}</p>
          <i className="fa-solid fa-heart"></i>
        </div>

        <div className="our-team-values">
          <div className="our-team-values-image">
            <img src={values} alt="" />
          </div>
          <div className="our-team-values-description">
            <h2>{t("about_us.core_values_title")}</h2>
            <p>{t("about_us.core_values")}</p>
          </div>
        </div>

        <div className="our-team">
          <div className="our-team-img">
            <img src={team} alt="" />
          </div>
          <div className="our-team-description">
            <h2>{t("about_us.our_team_title")}</h2>
            <p>{t("about_us.our_team")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
