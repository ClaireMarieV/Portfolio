import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="name">
        <h2>CLAIRE MARIE VANEY</h2>
        <h3>Developpeuse front-end</h3>
        <h3>UX/UI</h3>
      </div>
      <Picture picture="pictures/FaceBis.png" />
      <div className="img">
        <Picture picture="pictures/arrow.svg" />
      </div>
      <div>
        <p>
          Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
          me the designer's methodology and the different processes. More than
          two years ago, i'm retraining in web development after learned Java
          alone. After traineeship and first job in web development, i learned
          React independently.
        </p>
        <h3>MY SKILLS</h3>
        <form>
          <button>Download CV</button>
        </form>
      </div>
      <Picture picture="" />
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        margin: 2rem;
      }
      .name {
        justify-self: center;
      }
      .img {
        width: 20rem;
      }
      h2 {
        align-self: center;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
