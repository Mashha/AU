import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { AppRoute, AppRouteTitles } from '../routes';

const Navigation = () => {
  const { formatMessage } = useIntl();
  const { lang } = useParams();

  return (
    <ul>
      {Object.keys(AppRoute).map((route) => (
        <li key={route}>
          <NavLink to={`/${lang}${formatMessage({ id: AppRoute[route] })}`}>
            {formatMessage({ id: AppRouteTitles.get(AppRoute[route]) })}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;


