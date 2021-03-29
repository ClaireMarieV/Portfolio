import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import AnimatedWords from "../components/AnimatedWords";
import Content from "../components/Content";
import ContentGrid from "../components/ContentGrid";
import Move from "../components/Move";
import Svg from "../components/Svg";
import Contour from "../components/Contour";
import Mail from "../components/Mail";

const IndexPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <section className="animated-words">
          <AnimatedWords text="HELLO I'M CLAIRE,"></AnimatedWords>
          <AnimatedWords text="A FRENCH FREELANCE FRONT-END"></AnimatedWords>
          <AnimatedWords text="DEVELOPER AND UI/UX DESIGNER"></AnimatedWords>
        </section>
        <Move>
          <div className="img">
            <img src="pictures/pictureProfil.png" alt="profil picture" />
          </div>
        </Move>

        <ContentGrid>
          <section id="titles">
            <span>
              {router.locale === "fr"
                ? `Depuis plusieurs années, j'aime le design qu'il soit de mode, de produit ou web.`
                : `For several years, I have loved design whether it's fashion, product or web.`}
            </span>
            <div className="surrounded-words">
              <h2>
                {router.locale === "fr"
                  ? `Créer, modeler et composer un design, y transmettre une `
                  : `Creating, shaping and composing a design, conveying an`}
                <Contour text="emotion" />
              </h2>
              <h2>
                {router.locale === "fr"
                  ? `est de la recherche mais on y met aussi un peu de soi. Je serai ravie de vous en dire plus si vous le souhaitez. `
                  : ` is research but also a bit of ourselves. I would gladly tell you more.`}
              </h2>
            </div>
          </section>
          <div className="content-button">
            <a download="CVclaireMarieVaney" href="CV02.2021.pdf">
              <button>
                <span>
                  {router.locale === "fr"
                    ? `Télécharger mon CV`
                    : `Download my CV`}
                </span>
              </button>
            </a>
          </div>
        </ContentGrid>
        <section className="titles">
          <div className="less">
            <h2>
              {router.locale === "fr"
                ? `LESS IS MORE, MAKE IT SIMPLE`
                : `LESS IS MORE, MAKE IT SIMPLE`}
            </h2>
          </div>
          <div>
            <h2>
              {router.locale === "fr"
                ? `J'ai choisi le front et l'UX/UI`
                : `I chose front-development and UX/UI.`}
            </h2>
            <div className="content-sentences">
              <h2>
                {router.locale === "fr"
                  ? `Allier les deux c'est allier`
                  : `To mix both is to mix`}
              </h2>
              <Contour text="logic and creation." />
            </div>
          </div>
        </section>
        <Mail />
      </Content>

      <style jsx global>{`
        #titles span {
          text-transform: uppercase;
          font-weight: 400;
          font-size: 1.2rem;
          letter-spacing: 0.05rem;
        }
        .content-button {
          justify-self: center;
        }
        .content-button span {
          font-weight: 600;
        }
        .img {
          width: 35vw;
          margin: 4rem auto 4rem auto;
          transform: matrix(1, 0, 0, 1, 0);
          will-change: transform;
        }
        h2 {
          letter-spacing: 0.05em;
          transform: translate3d(0, 0, 0);
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .less h2 {
          font-size: 4rem;
        }
        #title {
          width: 50vw;
        }

        .animated-words {
          padding: 3rem;
        }
        .titles {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 4rem;
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
};

export default IndexPage;
