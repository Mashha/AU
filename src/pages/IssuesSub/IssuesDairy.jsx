import React from "react";
import { useTranslation } from "react-i18next";
import "./issuesDairy.css";
import image from "../../images/involved.jpg";

function IssuesDairy() {
  const { t } = useTranslation();

  return (
    <>
      <div className="dairy-industry">
        <div>Behind the dairy industry</div>
        <div>{t("dairy_industry.dairy_one")}</div>
        
        <div className="dairy-two">
          <div className="dairy-two-img">
            <img src={image} alt="" />
          </div>
          <div className="dairy-two-description">
            <div>{t("dairy_industry.dairy_two")}</div>
            <div>{t("dairy_industry.dairy_three")}</div>
          </div>
        </div>
        <div className="dairy-three">
          <div className="dairy-three-img">
            <img src={image} alt="" />
          </div>
          <div>{t("dairy_industry.dairy_four")}</div>
        </div>
        <div className="dairy-four">
          <div className="dairy-four-img">
            <img src={image} alt="" />
          </div>
          <div>{t("dairy_industry.dairy_five")}</div>
        </div>
        <div className="dairy-five">
          <div className="dairy-five-img">
            <img src={image} alt="" />
          </div>
          <div className="dairy-five-description">
            <div>{t("dairy_industry.dairy_health")}</div>
            <div>{t("dairy_industry.dairy_end")}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssuesDairy;
