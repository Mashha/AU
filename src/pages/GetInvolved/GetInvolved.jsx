import React from "react";
import "./getInvolved.css";
import donateImg from "../../images/donate.jpg"
import joinUs from "../../images/join-us.jpg"

function GetInvolved() {
  return (
    <div className="get-ivolved">
      <div className="get-involved-hero">
        <div className="overlay">
          <div className="get-involved-inner">
            <h1>Let's help the animals</h1>
          </div>
        </div>
      </div>

      <div className="get-involved-how">
        <h2>How can I help?</h2>
        <p>
          Firstly I would like to thank all of you for the support we are already
          getting, together we are creating a more compassionate world for the
          animals.
        </p>
      </div>

      <div className="get-involved-donate">
        <div className="donate-image">
          <img src={donateImg} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="donate-para">
          <p>Support us in what we are already doing and help us protect as many animals as possible.</p>
          <button className="get-involved-btn">
            <a href="">Donate</a>
          </button>
        </div>
      </div>

      <div className="get-involved-veg">
        <div className="veg-image">
          <img src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="veg-para">
          <p>Compassion begins on your plate. Remember you have a choice, animals don't.</p>
          <p>Eating vegan is the easiest thing to do.</p>
          <button className="get-involved-btn">
            <a href="">Try veg</a>
          </button>
        </div>
      </div>

      <div className="get-involved-join">
        <div className="join-image">
          <img src={joinUs} alt="" />
          <div className="color-overlay"></div>
        </div>
        <div className="join-para">
          <p>Join us and become the voice for the animals.</p>
          <button className="get-involved-btn">
            <a href="">Join us</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
