import React from "react";

const Article = ({ children, img, title, className, id }) => (
  <>
    <div className={"article" + (className || "")} id={id}>
      <div className="title-project">
        <img className="logo" src={img} />
        <h1>{title}</h1>
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
        .article h1 {
          font-size: 4rem;
        }
        .title-project {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: baseline;
        }

        img.logo {
          width: 10rem;
        }
      `}</style>
    </div>
  </>
);

export default Article;
