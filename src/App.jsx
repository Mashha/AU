import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import Issues from "./pages/Issues/Issues";
import WhatWeDo from "./pages/WhatWeDo";
import Resources from "./pages/Resources/Resources";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import IssuesMeat from "./pages/IssuesSub/IssuesMeat";
import IssuesDairy from "./pages/IssuesSub/IssuesDairy";
import IssuesEggs from "./pages/IssuesSub/IssuesEggs";
import IssuesFish from "./pages/IssuesSub/IssuesFish";
import { useTranslation } from "react-i18next";
import React from "react";
import { IntlProvider } from "react-intl";
import AppLayout from "./components/AppLayout";
import LocalizedSwitch from "./components/LanguageSwitcher";
import { AppLanguage, appStrings } from "./intl";
import pages from "./pages";

const LocalizedRouter = ({ children }) => (
  <Routes>
    <Route
      path="/:lang/*"
      element={<LanguageWrapper>{children}</LanguageWrapper>}
    />
    <Route path="*" element={<Navigate to={`/${AppLanguage.English}/`} />} />
  </Routes>
);

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const language = lang || AppLanguage.English;

  return (
    <IntlProvider locale={language} messages={appStrings[language]}>
      {children}
    </IntlProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LocalizedRouter>
        <AppLayout>
          <Routes>
            <Route exact path="/:lang" element={<Home />} />
            <Route path="/:lang/about" element={<WhoWeAre />} />
            <Route path="/:lang/work" element={<WhatWeDo />} />
            {/* <Route path={t("routes.issues")} element={<Issues />} />
            <Route path={t("routes.issues_meat")} element={<IssuesMeat />} />
            <Route path={t("routes.issues_dairy")} element={<IssuesDairy />} />
            <Route path={t("routes.issues_eggs")} element={<IssuesEggs />} />
            <Route path={t("routes.issues_fish")} element={<IssuesFish />} />
            <Route path={t("routes.get_involved")} element={<GetInvolved />} />
            <Route path={t("routes.resources")} element={<Resources />} /> */}
          </Routes>
        </AppLayout>
      </LocalizedRouter>
    </BrowserRouter>
  );
}

export default App;
