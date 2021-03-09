import React from "react";

const Logo = ({ pattern, alt }) => (
  <>
    <h2>Pattern</h2>
    <img src={pattern} alt={alt} />
  </>
);
export default Logo;
