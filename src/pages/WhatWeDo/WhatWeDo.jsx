import React from "react";
import "./whatWeDo.css";
import street_activism_one from "../../images/street_activism1.jpg";
import street_activism_two from "../../images/street_activism2.jpg";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const {t} = useTranslation();
  
  return (
    <div className="what-we-do">
      <div className="what-we-do-hero">
        <div className="overlay">
          <div className="what-we-do-inner">
            <h1>{t("hero-what-we-do.title")}</h1>
          </div>
        </div>
      </div>

      <div className="what-we-focus-on">
        <h2>{t("hero-what-we-do.title_one")}</h2>
        <p>{t("hero-what-we-do.para_one")}</p>
        <p>{t("hero-what-we-do.para_two")}</p>
      </div>

      <div className="cube">
        <div className="cube-image">
          <img src={street_activism_two} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="cube-para center">
          <h2>Cube of truth</h2>
          <p>A cube of truth is a peaceful street activism demonstration that employs direct action with the public. Our outreach team engages with the public by asking interested onlookers questions about the footage they are looking at. The footage shown and the outreach in our helps bring the power of change back to the individual, shedding light from the victim's point of view. </p>
        </div>
      </div>

      <div className="street-activism">
        <div className="activism-image">
          <img src={street_activism_two} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="activism-para center">
          <h2>Street activism</h2>
          <p>Through conversation, people can learn there is no humane way to exploit, enslave or murder an animal. Bystanders have all their questions and objections handled directly. This allows activists to give a clear representation of veganism.</p>
        </div>
      </div>

      <div className="education">
        <div className="education-image">
          <img src={street_activism_one} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="education-para center">
          <h2>Why the mask?</h2>
          <p>By wearing the mask, activists are together with the trillions of animals unnecessarily exploited and killed every year by the globalised animal-food industries.</p>
          <p>The mask stands for stamping out oppression. It represents the fight for truth and is against all injustice and discrimination, including speciesism.</p>
        </div>
      </div>

      <div className="join-the-movement">
        <button>Join us</button>
      </div>
    </div>
  );
}

export default WhatWeDo;
