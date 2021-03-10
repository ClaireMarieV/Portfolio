import React from "react";
import Parallax from "./Parallax";
const Concept = ({ project }) => (
  <div>
    <Parallax>
      <h4>Concept</h4>
    </Parallax>
    <img src={project.concept} />
  </div>
);

export default Concept;
