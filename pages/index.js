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
    <div className="content-grid">
      <div id="name">
        <h2>Hello, i'm claire marie Vaney</h2>
        <h2>Freelance front- end developer </h2>
        <h2>and UX/UI designer</h2>
      </div>

      <Img>
        <div className="face">
          <Picture picture="pictures/FaceTres.png" />
        </div>
      </Img>

      <h3>What I like</h3>
      <TranslateRight id="translate-right">
        <p>
          For release me, I pratice sport (dance, workout or boxe). For several
          years, I love design. I like the design whether it is fashion,
          product, space or web. This is why I love web development so much.
        </p>
        <h2>I choose front-development and UX/UI.</h2>
        <h2>Mix the both is to mix logic and creation.</h2>
      </TranslateRight>

      <h3>Why I became a developer</h3>
      <TranslateRight id="translate-right">
        <p>
          Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
          me the designer's methodology and the different processes. More than
          two years ago, i'm retraining in web development after learned Java
          alone. After traineeship where i worked with Symfony and first job in
          web development Fullstack, i learned React independently .
        </p>
      </TranslateRight>
      <h3 id="skills">My main advantages</h3>

      <button download="CV">Download my CV</button>
    </div>

    <TranslateLeft>
      <Icon picture="svg/computerBis.svg" title="WEB DEVELOPMENT" />
      <Icon picture="svg/responsiveBis.svg" title="RESPONSIVE" />
      <Icon picture="svg/UX.svg" title="UX/UI" />
    </TranslateLeft>
    <style jsx>{`
      .content-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: auto;
        grid-gap: 3rem;
        margin: 2rem;
      }
      .content-grid h3 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #name h2 {
        font-size: 2rem;
      }
      #name {
        justify-self: center;
        align-self: center;
      }
      .img {
        max-width: 50vh;
      }

      .face {
        box-shadow: -1px -1px 18px 2px rgba(0, 0, 0, 0.1);
      }

      .arrow {
        max-width: 57vh !important;
      }
      #skills {
        display: flex;
        justify-content: space-evenly;
      }
      .content-grid h2 {
        letter-spacing: 0.05em;
        transform: translate3d(-0.5em, 0, 0);
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .content-grid h2::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 55%;
        height: 0.5rem;
        left: 0.05em;
        top: 1.25em;
        background: #f6e056;
        transform: scale3d(1, 1, 1);
        transform-origin: 100% 50%;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }

      @media (max-width: 700px) {
        .content-grid {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);
export default IndexPage;
