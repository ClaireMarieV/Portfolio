import React from "react";
import Parallax from "./Parallax";
const Concept = ({ project }) => (
  <div>
    <img src={project.concept} />
    <Parallax>
      <h4>Concept</h4>
    </Parallax>
  </div>
);

export default Concept;
