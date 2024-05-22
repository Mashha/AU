import React from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLayout from './components/AppLayout';
import { AppLanguage, appStrings } from './intl';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import LocalizedSwitch from './components/LocalizedSwitch';
import { AppRoute } from './routes';

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const language = lang || AppLanguage.English;

  return (
    <IntlProvider locale={language} messages={appStrings[language]}>
      {children}
    </IntlProvider>
  );
};

const LocalizedRouter = ({ children }) => (
  <Routes>
    <Route path="/:lang/*" element={<LanguageWrapper>{children}</LanguageWrapper>} />
    <Route path="*" element={<Navigate to={`/${AppLanguage.English}/`} />} />
  </Routes>
);

const App = () => (
  <LocalizedRouter>
    <AppLayout>
      <LocalizedSwitch>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path={AppRoute.About} element={<WhoWeAre />} />
        <Route path={AppRoute.Work} element={<WhatWeDo />} />
      </LocalizedSwitch>
    </AppLayout>
  </LocalizedRouter>
);

export default App;
