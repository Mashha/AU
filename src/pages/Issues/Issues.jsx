import React from "react";
import "./issues.css";
import { useTranslation } from "react-i18next";
import earthlings from "../../images/earthlings.jpg";
import dominion from "../../images/dominion.jpg";
import sanctuary from "../../images/donate.jpg";

function Issues() {
  const { t } = useTranslation();
  return (
    <div className="issues-main">
      <div className="issues-hero">
        <div className="overlay">
          <div className="issues-inner">
            <h1>{t("veganism.veganism_hero_title")}</h1>
          </div>
        </div>
      </div>

      <div className="issues">
        <div className="issues-inner">
          <h2>{t("veganism.veganism_summary_one_title")}</h2>
          <p>{t("veganism.veganism_summary_one")}</p>
          <p>{t("veganism.veganism_summary_two")}</p>
        </div>

        <div className="issues-meat">
          <img
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="issues-meat-inner">
            <h2>{t("veganism.veganism_meat_title")}</h2>
            <p>{t("veganism.veganism_meat")}</p>
            <button className="btn">
              <a href={t("routes.issues_meat")}>{t("learn_more_btn")}</a>
            </button>
          </div>
        </div>

        <div className="issues-dairy">
          <img
            src="https://images.unsplash.com/photo-1602153508753-4ace888c10a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="issues-dairy-inner">
            <h2>{t("veganism.veganism_dairy_title")}</h2>
            <p>{t("veganism.veganism_dairy")}</p>
            <button className="btn">
              <a href={t("routes.issues_dairy")}>{t("learn_more_btn")}</a>
            </button>
          </div>
        </div>

        <div className="issues-eggs">
          <img
            src="https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="issues-eggs-inner">
            <h2>{t("veganism.veganism_eggs_title")}</h2>
            <p>{t("veganism.veganism_eggs")}</p>
            <button className="btn">
              <a href={t("routes.issues_eggs")}>{t("learn_more_btn")}</a>
            </button>
          </div>
        </div>

        <div className="issues-fish">
          <img
            src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="issues-fish-inner">
            <h2>{t("veganism.veganism_fish_title")}</h2>
            <p>{t("veganism.veganism_fish")}</p>
            <button className="btn">
              <a href={t("routes.issues_fish")}>{t("learn_more_btn")}</a>
            </button>
          </div>
        </div>
      </div>

      <div className="issues-quote">
        <div className="bg-color">
          <p>{t("veganism.veganism_quote")}</p>
        </div>
      </div>

      <div className="issues-other">
        <p>{t("veganism.veganism_more")}</p>
        <p>
          {t("veganism.veganism_more_link")}
          <a href={t("routes.resources")}>
            {" "}
            {t("veganism.veganism_more_link_click")}
          </a>
          .
        </p>
      </div>

      <div className="documentaries">
        <h2>{t("documentaries.documentaries_title")}</h2>
        <div className="documentaries-inner">
          <div className="earthlings">
            <img src={earthlings} alt="" />
            <h3>Earthlings</h3>
            <p>{t("documentaries.earthlings")}</p>
            <a
              href="https://youtu.be/8gqwpfEcBjI?si=stwlm9TnvgZ7B0bx"
              target="_blank"
            >
              {t("watch_now_btn")}
            </a>
          </div>

          <div className="dominion">
            <img src={dominion} alt="" />
            <h3>Dominion</h3>
            <p>{t("documentaries.dominion")}</p>
            <a
              href="https://youtu.be/LQRAfJyEsko?si=BDCtsy8pNt76hjvS"
              target="_blank"
            >
              {t("watch_now_btn")}
            </a>
          </div>
        </div>
      </div>

      <div className="animal-sanctuary">
        <h2>{t("documentaries.sanctuary_title")}</h2>
        <p>{t("documentaries.sanctuary")}</p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cDCY5EPYSZE?si=q0j0PcKPzYhEkZ8z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <button className="btn">
          <a
            href="https://www.youtube.com/@kinder-world/videos"
            target="_blank"
          >
            {t("watch_more_btn")}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Issues;
