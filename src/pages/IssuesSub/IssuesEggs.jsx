import React from "react";
import { useTranslation } from "react-i18next";
import "./issuesEggs.css";
import image from "../../images/involved.jpg";

function IssuesEggs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="egg-industry">
        <div>Behind the egg industry</div>
        <div>{t("eggs.eggs_one")}</div>

        <div className="egg-industry-two">
          <div className="egg-industry-two-img">
            <img src={image} alt="" />
          </div>
          <div className="egg-industry-two-desc">{t("eggs.eggs_two")}</div>
        </div>
        <div className="egg-industry-quote">
          <div>{t("eggs.eggs_quote")}</div>
        </div>
        <div className="egg-industry-three">
          <div className="egg-industry-three-img">
            <img src={image} alt="" />
          </div>
          <div className="egg-industry-three-desc">{t("eggs.eggs_three")}</div>
        </div>
      </div>
    </>
  );
}

export default IssuesEggs;
