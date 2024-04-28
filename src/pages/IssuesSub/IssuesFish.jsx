import React from "react";
import { useTranslation } from "react-i18next";

function IssuesFish() {
  const { t } = useTranslation();
  return (
    <>
      <div>Behind the fish industry</div>
      <div>{t("fishes.fishes_summary")}</div>
      <div>{t("fishes.fishes_summary_sec")}</div>
      <div>{t("fishes.fishes_environment_one")}</div>
      <div>{t("fishes.fishes_environment_two")}</div>
      <div>{t("fishes.fishes_aquaculture_one")}</div>
      <div>{t("fishes.fishes_aquaculture_two")}</div>
      <div>{t("fishes.fishes_aquaculture_three")}</div>
      <div>{t("fishes.fishes_aquaculture_four")}</div>
      <div>{t("fishes.fishes_aquaculture_five")}</div>
    </>
  );
}

export default IssuesFish;
