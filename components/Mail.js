import { useRouter } from "next/router";

const LogoGrid = ({ project, alt }) => {
  const router = useRouter();

  return (
    <section className="sentences">
      <h3>
        {router.locale === "fr"
          ? `Vous avez un projet? Une idée?`
          : `You've got a project? An idea?`}
      </h3>
      <h3>
        {router.locale === "fr"
          ? `Parlons-en et créons ensemble votre identité`
          : `Let's talk about it and create a solid identity`}
      </h3>
      <div className="arrow-mail">
        <div className="mail">
          <a href="mailto:claire.marie.vaney@gmail.com">
            <i>
              <h3>
                {router.locale === "fr"
                  ? `Restons en contact par email`
                  : `Keep in touch by mail`}
              </h3>
            </i>
          </a>
        </div>
      </div>
      <style jsx>{`
        .sentences h3 {
          font-weight: 400;
          font-size: 2.5rem;
        }
        .sentences .line__graphic {
          fill: none;
          stroke: #000000;
          stroke-width: 0.5;
          stroke-dasharray: 200.49;
          stroke-dashoffset: 200.49;
          transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
        }
        .sentences:hover .line__graphic {
          stroke-dasharray: 200.49;
          stroke-dashoffset: 0;
          transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
          transition-duration: 0.5s;
        }
        .sentences .mail {
          display: inline-block;
        }
        #arrow {
          width: 15%;
        }
        .arrow {
          fill: none;
          stroke: #fad7b2;
          stroke-width: 0.8;
          width: 8%;
        }
        .arrow-mail {
          display: flex;
        }
        .mail {
          position: relative;
          transition: 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .mail h3::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.8rem;
          z-index: -1;
          opacity: 0.8;
          background: #f7c289;
          transform: scale3d(0.3, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        /* Hover */

        .mail a:hover h3::before,
        .mail a:focus h3::before {
          transform: scale3d(1, 1, 1);
        }
        @media (max-width: 600px) {
          .sentences h3 {
            font-size: 2rem;
          }
          #arrow {
            width: 25%;
          }
        }
        @media (max-width: 400px) {
          #arrow {
            width: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoGrid;
