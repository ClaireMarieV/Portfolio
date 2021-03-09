import React from "react";

const Logo = ({ pattern, alt }) => (
  <>
    <h4>Pattern</h4>
    <img src={pattern} alt={alt} />
  </>
);
export default Logo;
