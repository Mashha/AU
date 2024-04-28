import React from 'react'
import { useTranslation } from "react-i18next";

function IssuesDairy() {
  const { t } = useTranslation();

  return (
    <>
      <div>Behind the dairy industry</div>
      <div>
        {t("dairy_industry.dairy_one")}
      </div>
      <div>
        {t("dairy_industry.dairy_two")}
      </div>
      <div>
        {t("dairy_industry.dairy_three")}
      </div>
      <div>
        {t("dairy_industry.dairy_four")}
      </div>
      <div>
        {t("dairy_industry.dairy_five")}
      </div>
      <div>
        {t("dairy_industry.dairy_health")}
      </div>
      <div>
        {t("dairy_industry.dairy_end")}
      </div>
    </>
  )
}

export default IssuesDairy