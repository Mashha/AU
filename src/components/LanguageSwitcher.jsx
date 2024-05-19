import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { AppLanguage, appStrings } from '../intl';

const LanguageSwitcher = () => {
  const { pathname } = useLocation();
  const { locale, messages } = useIntl();
  const { lang } = useParams();

  return (
    <ul>
      {Object.keys(AppLanguage).map((languageKey) => {
        const language = AppLanguage[languageKey];
        const matchingRoute = getMatchingRoute(language);

        return (
          <li key={language}>
            <NavLink
              to={matchingRoute}
              isActive={() => lang === language}
            >
              {language}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );

  function getMatchingRoute(language) {
    const currentPath = pathname.replace(`/${lang}`, '');
    const routeKey = Object.keys(messages).find(
      (key) => messages[key] === currentPath
    );

    const localizedRoute = appStrings[language][routeKey];
    return `/${language}${localizedRoute}`;
  }
};

export default LanguageSwitcher;
