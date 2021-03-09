import React from "react";

const Project = ({ children, img, category, title, className, id }) => (
  <>
    <div className={"project" + (className || "")} id={id}>
      <div className="title-project">
        <h1>{title}</h1>
        <span>{category}</span>
      </div>

      <div>{children}</div>

      <style jsx global>{`
        .project {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-template-rows: auto;
          margin: 2rem;
        }
        .project h1 {
          font-size: 4rem;
          text-transform: uppercase;
        }
        .title-project {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: baseline;
        }

        img.logo {
          width: 25rem;
        }
      `}</style>
    </div>
  </>
);

export default Project;
