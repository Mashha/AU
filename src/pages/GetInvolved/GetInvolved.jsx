import React from "react";
import "./getInvolved.css";
import donateImg from "../../images/donate.jpg"
import joinUs from "../../images/join-us.jpg"
import { useTranslation } from "react-i18next";

function GetInvolved() {
  const { t } = useTranslation();
  return (
    <div className="get-ivolved">
      <div className="get-involved-hero">
        <div className="overlay">
          <div className="get-involved-inner">
            <h1>{t("get_involved.get_involved_title")}</h1>
          </div>
        </div>
      </div>

      <div className="get-involved-how">
        <h2>{t("get_involved.get_involved_how_title")}</h2>
        <p>
        {t("get_involved.get_involved_how_text")}
        </p>
      </div>

      <div className="get-involved-donate">
        <div className="donate-image">
          <img src={donateImg} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="donate-para">
          <p>{t("get_involved.get_involved_donate_text")}</p>
          {/* <button className="get-involved-btn">
            <a href="">Donate</a>
          </button> */}
        </div>
      </div>

      <div className="get-involved-veg">
        <div className="veg-image">
          <img src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="veg-para">
          <p>{t("get_involved.get_involved_veg_part_one")}</p>
          <p>{t("get_involved.get_involved_veg_part_two")}</p>
          <button className="get-involved-btn">
            <a href="">{t("go_veg")}</a>
          </button>
        </div>
      </div>

      <div className="get-involved-join">
        <div className="join-image">
          <img src={joinUs} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="join-para">
          <p>{t("get_involved.join_us_help")}</p>
          <button className="get-involved-btn">
            <a href="#">{t("join_button")}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
