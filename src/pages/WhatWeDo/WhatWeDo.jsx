import React from "react";
import "./whatWeDo.css";
import street_activism_one from "../../images/street_activism1.jpg";
import street_activism_two from "../../images/street_activism2.jpg";

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="overlay">
        <div className="what-we-do-inner">
          <h1>Building a better future</h1>
        </div>
      </div>

      <div className="what-we-focus-on">
        <h2>What we focus on</h2>
        <p>
          Our two main focuses are peaceful street activism and education of the
          public.
        </p>
        <p>
          With your support and kind heart we can save milions of animals from
          suffering and death.
        </p>
      </div>

      <div className="street-activism">
        <div className="activism-image">
          <img src={street_activism_two} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="activism-para center">
          <p>
            With street activism we try to reach as many people as possible and
            show them the reality of what lives of farm animals really look
            like.
          </p>
        </div>
      </div>
      <div className="education">
        <div className="education-image">
          <img src={street_activism_one} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="education-para center">
          <p>
            We use various materials to provide people with information about
            what is going on. We use videos, articles and images.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
