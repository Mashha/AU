import React from "react";
import { useTranslation } from "react-i18next";

function IssuesMeat() {
  const { t } = useTranslation();
  return (
    <>
      <div>Behind the meat industry</div>
      <div>{t("meat.summary")}</div>
      <div>
        {t("meat.cows_one")}
        {t("meat.cows_two")}
      </div>
      <div>
        {t("meat.pigs_one")}
        {t("meat.pigs_two")}
      </div>
      <div>
        {t("meat.chickens_one")}
        {t("meat.chickens_two")}
        {t("meat.chickens_three")}
      </div>
      <div>
        {t("meat.lambs_one")}
        {t("meat.lambs_two")}
      </div>
      <div>
        turkeys
        {t("meat.turkeys_one")}
        {t("meat.turkeys_two")}
      </div>
      <div>rabbits?</div>
      <div>dogs</div>
      <div>environment
      {t("meat.climate_change_one")}
      {t("meat.climate_change_two")}
      {t("meat.climate_change_three")}
      </div>
    </>
  );
}

export default IssuesMeat;
