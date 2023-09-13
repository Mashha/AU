import React from "react";
import "./sectionTwo.css";

function SectionTwo() {
  return (
    <>
      <div className="section-two grid">
        <img
          className="third-img"
          src="https://images.unsplash.com/photo-1470328946075-85a4ce900838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="mission center">
          <h2>Our mission</h2>
          <p>
            We strive to raise awareness, inspire change and, drive action to
            create a world where non-human animals are treated as equals, with
            compassion, respect, and dignity.
          </p>
        </div>
        <img
          className="first-img"
          src="https://images.unsplash.com/photo-1594731884638-8197c3102d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80"
          alt=""
        />
        <div className="values center">
          <h2>Our values</h2>
          <p>Our core values are kindness, respect and compassion.</p>
        </div>
        <img
          className="second-img"
          src="https://images.unsplash.com/photo-1589923188651-268a9765e432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
    </>
  );
}

export default SectionTwo;
