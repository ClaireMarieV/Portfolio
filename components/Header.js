import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="name">
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span>CLAIRE MARIE VANEY</span>
                </a>
              </Link>
            </li>
            <li className="projects">
              <Link href="/projects">
                <a>
                  <svg
                    className="line__graphic"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="150px"
                    y="75px"
                    viewBox="0 0 210 120"
                  >
                    <path
                      d="M106.9,11.7c0.8-1.9-1.9-3.8-5.5-4.7c-3.6-0.9-7.9-1-12-1C58.1,6.4,29.7,15.1,9.1,26.1c-3,1.6-6.1,3.6-4.8,5.7
        c1.5,2.4,8,3.2,13.4,3.3c21.2,0.3,41.6-3.4,61.7-6.7c4.1-0.7,8.4-1.3,12.7-1.1"
                    />
                  </svg>
                  <span>PROJECTS</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/" locale="fr">
            <a>
              <span>French</span>
            </a>
          </Link>
          <Link href="/" locale="en">
            <a>
              <span>English</span>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          margin: 1rem 1rem 2rem 1rem;
        }
        .header > .name,
        .header > div {
          align-self: center;
          text-transform: uppercase;
        }
        span {
          cursor: pointer;
        }
        ul {
          display: flex;
          align-items: center;
        }
        .ul {
          align-items: center;
          justify-self: center;
        }
        a {
          display: inline-flex;
          padding: 15px 20px;
        }
        .projects {
          position: relative;
        }
        .projects svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          z-index: -1;
        }

        path {
          fill: none;
          stroke: #000000;
          stroke-width: 1;
          stroke-dasharray: 200.49;
          stroke-dashoffset: 200.49;
          transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
        }
        .projects:hover path {
          stroke-dasharray: 200.49;
          stroke-dashoffset: 0;
          transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
          transition-duration: 0.5s;
        }

        @media screen and (max-height: 300px) {
          ul {
            margin-top: 40px;
          }
        }
        @media (max-width: 600px) {
          .header {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
