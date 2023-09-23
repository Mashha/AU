import React from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="text" data-text="compassion">
          <h1>
            {t("hero-home.hero_title")} <br />
            <span>{t("hero-home.hero_span")}</span>
          </h1>
          <p>{t("hero-home.hero_p")}</p>
          <div className="cta">
            <button>
              <a href="#">{t("hero-home.hero_btn_one")}</a>
            </button>
            <button>
              <a href="#">{t("hero-home.hero_btn_two")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
