import React from "react";
import Link from "next/link";
import Picture from "./Picture.js";

const Header = () => (
  <header>
    <div className="header">
      <div className="name">
        <Link href="/">
          <a>
            <h3>Claire Marie Vaney </h3>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/about">
            <a>
              <span>ABOUT</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about#skills">
            <a>
              <span>MY SKILLS</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              <span>MY PROJECT</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .header {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin: 1rem 1rem 2rem 1rem;
      }
      .header > .name,
      .header > ul {
        align-self: center;
      }

      ul {
        display: flex;
        justify-self: self-end;
      }
      ul > li {
        margin: 1rem;
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
