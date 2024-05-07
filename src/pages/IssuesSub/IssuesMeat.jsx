import React from "react";
import { useTranslation } from "react-i18next";
import "./issuesMeat.css";
import image from "../../images/involved.jpg";

function IssuesMeat() {
  const { t } = useTranslation();
  return (
    <>
      <h2>Behind the meat industry</h2>
      <div className="meat-summary">{t("meat.summary")}</div>
      <div className="sections">
        <div className="section-cows section">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h2>{t("meat.meat-title-cows")}</h2>
            {t("meat.cows_one")}
            {t("meat.cows_two")}
          </div>
        </div>

        <div className="section-pigs section">
          <div className="section-pigs-description">
            <h2>{t("meat.meat-title-pigs")}</h2>
            {t("meat.pigs_one")}
            {t("meat.pigs_two")}
          </div>
          <div className="section-pigs-img">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="section-chickens section">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h2>{t("meat.meat-title-chickens")}</h2>
            {t("meat.chickens_one")}
            {t("meat.chickens_two")}
            {t("meat.chickens_three")}
          </div>
        </div>

        <div className="section-lambs section">
          <div className="section-lambs-img">
            <img src={image} alt="" />
          </div>
          <div className="section-lambs-description">
            <h2>{t("meat.meat-title-sheep")}</h2>
            {t("meat.lambs_one")}
            {t("meat.lambs_two")}
          </div>
        </div>

        <div className="section-turkeys section">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h2>{t("meat.meat-title-turkey")}</h2>
            {t("meat.turkeys_one")}
            {t("meat.turkeys_two")}
          </div>
        </div>
        {/* <div>rabbits?</div>
        <div>dogs</div> */}
        <div className="section-environment section">
          <div className="section-environment-img">
            <img src={image} alt="" />
          </div>
          <div className="section-environment-description">
            <h2>{t("meat.meat-title-climate")}</h2>
            {t("meat.climate_change_one")}
            {t("meat.climate_change_two")}
            {t("meat.climate_change_three")}
          </div>
        </div>
      </div>
    </>
  );
}

export default IssuesMeat;
