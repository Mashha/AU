import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Issues from "./pages/Issues/Issues";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Resources from "./pages/Resources/Resources";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  // const routePath = currentLanguage === 'en' ? translationEN : translationSI

  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route exact path={t("routes.home")} element={<Home />} />
         <Route path={t('routes.about_us')} element={<WhoWeAre />} />
         <Route path={t('routes.what_we_do')} element={<WhatWeDo />} />
         <Route path={t('routes.issues')} element={<Issues />} />
         <Route path={t('routes.get_involved')} element={<GetInvolved />} />
         <Route path={t('routes.resources')} element={<Resources />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
