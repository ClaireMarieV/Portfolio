const LogoGrid = ({ project, alt }) => (
  <section className="sentences">
    <h3>You've got a project? An idea?</h3>
    <h3>Let's talk about it and create a solid identity</h3>
    <div className="arrow-mail">
      <svg
        id="arrow"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="-6 0 40 60"
      >
        <path
          className="arrow"
          d="M3.9,0.7C-4,8.5,14,2.2,8.6,8.3C-2.7,21,12.7,23.2,20.2,16.1"
        />
        <path
          className="arrow"
          d="M19.4,19.8c0.3-1.2,0.5-2.5,0.8-3.7c-1.5,0-2.9,0-4.4,0"
        />
        <path className="arrow" d="M5.9,13.2" />
      </svg>
      <div className="mail">
        <a href="mailto:claire.marie.vaney@gmail.com">
          <i>
            <h3>Keep in touch by mail</h3>
          </i>
        </a>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="150px"
          y="35px"
          viewBox="0 0 150 35"
        >
          <path className="line__graphic" d="M4.5,5.5c76,8,167-4,176-2" />
        </svg>
      </div>
    </div>
    <style jsx>{`
      .sentences h3 {
        font-weight: 400;
        font-size: 3rem;
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
        stroke: #f7c289;
        stroke-width: 0.8;
        width: 8%;
      }
      .arrow-mail {
        display: flex;
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
export default LogoGrid;
