import React from "react";
import Link from "next/link";
import Picture from "./Picture.js";

const Header = () => (
  <header>
    <div className="header">
      <div className="img">
        <Link href="/">
          <a>
            <Picture picture="logoDef.svg" />
          </a>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/about">
              <a>
                <span>ABOUT ME</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>
                <span>PROJECTS</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .header a {
        text-decoration: none;
      }

      .header {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin: 2rem 2rem 4rem 2rem;
        max-height: 50vh;
      }
      div {
        align-self: self-end;
      }
      div {
        display: flex;
        justify-content: flex-end;
      }
      div > ul {
        display: flex;
        border-bottom: 1px solid;
      }
      div ul > li {
        margin: 1rem;
      }
      .img {
        width: 8rem;
      }
      @media (max-width: 600px) {
        .header {
          display: block;
        }
      }
    `}</style>
  </header>
);

export default Header;
