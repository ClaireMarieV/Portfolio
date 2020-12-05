import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import Icon from "../components/Icon.js";
import Img from "../components/Img.js";
import TranslateRight from "../components/TranslateRight.js";
import TranslateLeft from "../components/TranslateLeft.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="name">
        <h2>Hello</h2>
        <h3> I'm front-end developer </h3>
        <h3>UX/UI</h3>
      </div>
      <Img>
        <div className="face">
          <Picture picture="pictures/FaceTres.png" />
        </div>
      </Img>
      <div className="arrow">
        <Picture picture="svg/arrow.svg" />
      </div>
      <TranslateRight>
        <p>
          Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
          me the designer's methodology and the different processes. More than
          two years ago, i'm retraining in web development after learned Java
          alone. After traineeship where i worked with Symfony and first job in
          web development Fullstack, i learned React independently .
        </p>
      </TranslateRight>
      <TranslateLeft>
        <Picture picture="svg/skills.svg" />
      </TranslateLeft>
    </div>

    <div id="skills">
      <Icon picture="svg/responsiveBis.svg" title="RESPONSIVE" />
      <Icon picture="svg/computerBis.svg" title="WEB DEVELOPMENT" />
    </div>
    <div className="skills">
      <Icon picture="svg/UX.svg" title="UX/UI" />
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        margin: 2rem;
      }

      .img {
        max-width: 50vh;
      }

      .face {
        box-shadow: -1px -1px 18px 2px rgba(0, 0, 0, 0.2);
      }
      #skills {
        display: flex;
        justify-content: space-evenly;
      }
      .arrow {
        max-width: 57vh !important;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
