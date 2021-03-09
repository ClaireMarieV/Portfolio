import React from "react";

const Project = ({ children, img, category, title, className, id }) => (
  <>
    <div className={"project" + (className || "")} id={id}>
      <div className="title-project">
        <h2>{title}</h2>
        <h3>{category}</h3>
      </div>

      <div>{children}</div>

      <style jsx global>{`
        .title-project {
          display: flex;
          flex-direction: column;
          align-items: baseline;
        }
      `}</style>
    </div>
  </>
);

export default Project;
