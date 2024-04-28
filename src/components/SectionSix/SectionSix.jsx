import React from "react";
import "./sectionSix.css";
import { useTranslation } from "react-i18next";

function SectionSix() {
  const { t } = useTranslation();
  return (
    <div className="section-six">
      <div className="join-us">
        <div className="bg-color">
          <p>{t("section_six.join_us_part")}</p>
          <button>
            <a href={t("join_link")}>{t("help_animals")}</a>
          </button>
        </div>
      </div>

      <div className="go-vegan">
        <div className="bg-color">
          <p>{t("section_six.go_veg_part")}</p>
          <button>
            <a href={t("section_six.go_veg_link")} target="_blank">{t("go_veg")}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
