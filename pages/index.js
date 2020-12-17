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
        <h1>ABOUT</h1>
        <h1>_ME</h1>
      </div>

      <Img>
        <div className="face">
          <Picture picture="pictures/FaceTres.png" />
        </div>
      </Img>

      <h3>What I like</h3>
      <TranslateRight id="translate-right">
        <p>
          Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
          me the designer's methodology and the different processes. More than
          two years ago, i'm retraining in web development after learned Java
          alone. After traineeship where i worked with Symfony and first job in
          web development Fullstack, i learned React independently .
        </p>
      </TranslateRight>

      <h3>Why I became a developer</h3>
      <TranslateRight id="translate-right">
        <h2>I choose front-development and UX/UI.</h2>
        <h2>Mix the both is to mix logic and creation.</h2>

        <p>
          Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
          me the designer's methodology and the different processes. More than
          two years ago, i'm retraining in web development after learned Java
          alone. After traineeship where i worked with Symfony and first job in
          web development Fullstack, i learned React independently .
        </p>
      </TranslateRight>

      <div id="skills">
        <h3>My main advantages</h3>
      </div>
      <button>
        <span>Download my CV</span>
      </button>
      <div className="skills">
        <TranslateRight>
          <Icon picture="svg/computerBis.svg" title="WEB DEVELOPMENT" />
          <Icon picture="svg/responsiveBis.svg" title="RESPONSIVE" />
        </TranslateRight>
        <TranslateRight>
          <Icon picture="svg/UX.svg" title="UX/UI" />
        </TranslateRight>
      </div>
    </div>

    <div className="skills"></div>

    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: auto;
        margin: 2rem;
      }
      .content h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      .name {
        justify-self: center;
      }
      #skills h2,
      .img {
        max-width: 50vh;
      }

      .face {
        box-shadow: -1px -1px 18px 2px rgba(0, 0, 0, 0.2);
      }

      .arrow {
        max-width: 57vh !important;
      }
      #skills {
        display: flex;
        justify-content: space-evenly;
      }
      .skills {
        grid-column: 2/3;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
