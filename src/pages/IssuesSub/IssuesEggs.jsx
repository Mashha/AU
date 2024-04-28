import React from "react";
import { useTranslation } from "react-i18next";

function IssuesEggs() {
  const { t } = useTranslation();
  return (
    <>
      <div>Behind the egg industry</div>
      <div>{t("eggs.eggs_one")}</div>
      <div>{t("eggs.eggs_two")}</div>
    </>
  );
}

export default IssuesEggs;
