import React from "react";

const SocialCard = ({ frontCard, backCard, alt }) => (
  <>
    <h4>Social</h4>
    <div className="card">
      <img src={frontCard} alt="social card recto" />
      <img src={backCard} alt="social card verso" />
    </div>
  </>
);
export default SocialCard;
