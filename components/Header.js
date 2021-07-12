import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

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
                  <span>{router.locale === "fr" ? `PROJETS` : `PROJECTS`}</span>
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
