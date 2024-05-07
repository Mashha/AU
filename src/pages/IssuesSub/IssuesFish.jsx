import React from "react";
import { useTranslation } from "react-i18next";
import "./issuesFish.css";
import image from "../../images/involved.jpg";

function IssuesFish() {
  const { t } = useTranslation();
  return (
    <>
      <div className="fish-industry">
        <div>Behind the fish industry</div>
        <div>{t("fishes.fishes_summary")}</div>
        <div className="fish-two">
          <div className="fish-two-img">
            <img src={image} alt="" />
          </div>
          <div>{t("fishes.fishes_summary_sec")}</div>
        </div>
        <div className="fish-three">
          <div className="fish-three-img">
            <img src={image} alt="" />
          </div>
          <div className="fish-three-desc">
            <div>{t("fishes.fishes_environment_one")}</div>
            <div>{t("fishes.fishes_environment_two")}</div>
          </div>
        </div>

        <div className="fish-four">
          <div className="fish-four-img">
            <img src={image} alt="" />
          </div>
          <div className="fish-four-desc">
            <div>{t("fishes.fishes_aquaculture_one")}</div>
            <div>{t("fishes.fishes_aquaculture_two")}</div>
          </div>
        </div>
        <div className="fish-five">
          <div className="fish-five-img">
            <img src={image} alt="" />
          </div>
          <div className="fish-five-desc">
            <div>{t("fishes.fishes_aquaculture_three")}</div>
            <div>{t("fishes.fishes_aquaculture_four")}</div>
            <div>{t("fishes.fishes_aquaculture_five")}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssuesFish;
