import React from "react";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Footer from "./Footer/Footer";

const AppLayout = ({ children }) => {
  
  return (
  <div>
    <Navigation />
    <LanguageSwitcher />
    <main>{children}</main>
    <Footer />
  </div>
)}

export default AppLayout;
