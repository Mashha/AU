import React from "react";
import "./whoWeAre.css";
import values from "../../images/values.jpg"

function WhoWeAre() {
  return (
    <div className="who-we-are-main">
      <div className="who-we-are-hero">
        <div className="overlay">
          <div className="who-we-are-inner">
            <h1>Voice for the animals</h1>
          </div>
        </div>
      </div>

      <div className="who-we-are">
        <h2>Who we are</h2>
        <p>We are a non-profit animal rights organization. A team of committed and passionate people whos speciality is using conversation and real-life footage from animal farms, and educate poeple about it.
          Initialy founded in Ljubljana, Slovenia in early 2023. We are now a global community of like-minded people using our voices for justice for our fellow earthlings.</p>
          <i className="fa-solid fa-heart"></i>
      </div>

      <div className="our-team-values">
        <img src={values} alt="" />
        <h2>Our core values</h2>
        <p>We hold an abolitionist stance against all non-human animal oppression and promote a clear animal rights message. We are an anti-oppression organisation, and within this, our work focuses exclusively on non-human animal rights. 
           We do not tolerate discrimination, bullying or harassment of any kind within our organisation, and we expect every individual representing us to be respectful towards people of all racial, political, religious, cultural and any other groups. We are a non-partisan organisation independent of any political affiliation or religion, and wish no promotion of either at our events or within our communication network.  Any person or group that does not agree to uphold the values and respect the organisational position outlined above is not welcome to represent us as an organiser, volunteer or team member.
           We welcome anyone who respects our choice to focus 100% on non-human animal rights to join us. </p>
      </div>
      
      <div className="our-team">
        <p>team image</p>
        <h2>Our team</h2>
      </div>
    </div>
  );
}

export default WhoWeAre;
