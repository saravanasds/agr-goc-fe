import React from "react";
import "./howitworks.css";

function HowItWorks() {
  return (
    <div className="works">
      <div className="works-head">
        <h1>How It Works</h1>
      </div>

      <div className="work-content">
        <div className="works-main">
          <div className="matrix">
            <h1>3x Matrix Plan</h1>
            <img src="/assets/scheme/plan1.png" alt="" />
            <p>
              MLM Matrix Plan is also known as ladder Plan or Forced Matrix Plan
              in Multi-level marketing companies which is like to pyramid.
              Members are organized in a particular width and depth that
              compensated when they have achieved a set level.{" "}
            </p>
          </div>
          <div className="matrix-img">
            <img src="/assets/scheme/mlm.jpg" alt="" />
          </div>
        </div>
        <div className="works-main">
          <div className="matrix-img">
            <img src="/assets/scheme/plan3.jpg" alt="" />
          </div>
          <div className="matrix">
            <h1>Referral Bonus</h1>
            <img src="/assets/scheme/plan1.png" alt="" />
            <p>
              MLM Matrix Plan is also known as ladder Plan or Forced Matrix Plan
              in Multi-level marketing companies which is like to pyramid.
              Members are organized in a particular width and depth that
              compensated when they have achieved a set level.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
