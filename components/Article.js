import React from "react";

const Article = ({ children, title, className, id }) => (
  <>
    <div className={"article" + (className || "")} id={id}>
      <h3>{title}</h3>
      <div>{children}</div>

      <style jsx global>{`
        // .article {
        //   display: grid;
        //   grid-template-columns: repeat(1, minmax(0, 1fr));
        //   margin: auto;
        // }
        // @media (max-width: 700px) {
        //   .article {
        //     width: auto;
        //   }
        // }
      `}</style>
    </div>
  </>
);

export default Article;
