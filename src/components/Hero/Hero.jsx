import React from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="text" data-text="compassion">
          <h1>{t("hero_title")} <span>{t("hero_span")}</span></h1>
          <p>Help us put a stop to animal abuse and suffering</p>
          <div className="cta">
            <button>
              <a href="#">Why Vegan?</a>
            </button>
            <button>
              <a href="#">Donate</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
