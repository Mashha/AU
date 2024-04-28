import React from "react";
import "./sectionFour.css";
import { useTranslation } from "react-i18next";

function SectionFour() {
  const { t } = useTranslation();

  const veganismPath = t("routes.issues");

  return (
    <div className="section-four">
      <div className="inner-overlay">
        <div className="inner">
          <p>{t("section_four_part")}</p>
          <button onClick={() => (window.location.href = veganismPath)}>
            {t("learn_more_btn")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
