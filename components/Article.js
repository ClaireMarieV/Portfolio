import React from "react";

const Article = ({ children, title, className, id }) => (
  <>
    <div className={"article" + (className || "")} id={id}>
      <h2>{title}</h2>
      <div>{children}</div>

      <style jsx global>{`
        .article {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-template-rows: auto;
          margin: auto;
          width: 80vw;
          grid-gap: 4rem;
        }
      `}</style>
    </div>
  </>
);

export default Article;
