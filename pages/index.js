import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import AnimatedWords from "../components/AnimatedWords";
import Content from "../components/Content";
import ContentGrid from "../components/ContentGrid";
import Move from "../components/Move";
import Svg from "../components/Svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <div className="animated-words">
        <AnimatedWords text="HELLO,"></AnimatedWords>
        <AnimatedWords text="I'M A FREELANCE FRONT-END"></AnimatedWords>
        <AnimatedWords text="DEVELOPER AND UI/UX DESIGNER"></AnimatedWords>
      </div>
      <Move>
        <div className="img">
          <img src="pictures/photoAEBis.png" alt="profil picture" />
        </div>
      </Move>

      <ContentGrid>
        <div id="title">
          <h2>
            For several years, I have loved design whether it's fashion, product
            or web.
          </h2>
          <h2>
            Creating, modeling and composing a design that will convey an
            emotion. Living in Nancy, France; I'll gladly tell you more.
          </h2>
        </div>
        <div className="content-button">
          <Move>
            <a download="CVclaireMarieVaney" href="CV02.2021.pdf">
              <button>
                <span>Download my CV</span>
              </button>
            </a>
          </Move>
        </div>
      </ContentGrid>
      <Svg />
      <div className="titles">
        <div>
          <h1>LESS IS MORE, MAKE IT SIMPLE</h1>
        </div>
        <div>
          <h2>I chose front-development and UX/UI.</h2>
          <h2>To mix both is to mix logic and creation.</h2>
        </div>
      </div>
    </Content>

    <style jsx>{`
      .content-button {
        justify-self: self-end;
        align-self: end;
      }
      .content-button span {
        font-weight: 600;
      }
      .img {
        width: 35vw;
        display: flex;
        margin: auto;
        margin-bottom: 4rem;
        margin-top: 4rem;
        transform: matrix(1, 0, 0, 1, 0);
        will-change: transform;
      }
      h2 {
        margin-bottom: 5rem;
        letter-spacing: 0.05em;
        transform: translate3d(0, 0, 0);
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      h2::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 55%;
        height: 0.8rem;
        left: 0.05em;
        top: 1.25em;
        background: #dedbeb;
        transform: scale3d(1, 1, 1);
        transform-origin: 100% 50%;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .animated-words {
        padding: 3rem;
      }
      .titles {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;
      }
      .titles h2 {
        font-weight: 700;
      }
      #title {
        margin: 0 auto;
        width: 24vw;
        text-transform: uppercase;
      }

      @media (max-width: 800px) {
        #title {
          width: 100%;
        }
        .titles {
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 600px) {
        .content-button {
          justify-self: center;
        }
        .img {
          width: 100%;
          margin: 0;
        }
        .animated-words {
          padding: 0;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
