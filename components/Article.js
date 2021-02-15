import React from "react";

const Article = ({ children, img, title, className, id }) => (
  <>
    <div className={"article" + (className || "")} id={id}>
      <div className="logo">
        <img src={img} />
        <h2>{title}</h2>
      </div>
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
        .logo {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: flex-end;
        }
        .logo img {
          width: 10rem;
        }
      `}</style>
    </div>
  </>
);

export default Article;
