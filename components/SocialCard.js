import React from "react";

const SocialCard = ({ frontCard, backCard, alt }) => (
  <>
    <h4>Social</h4>
    <div className="card">
      <img src={frontCard} alt={alt} />
      <img src={backCard} alt={alt} />
    </div>
  </>
);
export default SocialCard;
