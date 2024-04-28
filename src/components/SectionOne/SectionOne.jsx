import React from "react";
import "./sectionOne.css";
import { useTranslation } from "react-i18next";

function SectionOne() {
  const { t } = useTranslation();
  return (
    <div className="section-one">
      <div className="center">
        <p>{t("section_one.first_part")}</p>
        <p>{t("section_one.second_part")}</p>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}

export default SectionOne;
