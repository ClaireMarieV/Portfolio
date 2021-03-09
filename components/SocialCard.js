import React from "react";

const SocialCard = ({ frontCard, backCard, alt }) => (
  <>
    <h2>Social</h2>
    <div className="card">
      <img src={frontCard} alt={alt} />
      <img src={backCard} alt={alt} />
    </div>
  </>
);
export default SocialCard;
