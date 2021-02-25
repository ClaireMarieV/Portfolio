import React from "react";
import Link from "next/link";
import Picture from "./Picture.js";

const Header = () => (
  <header>
    <div className="header">
      <div className="name">
        <ul>
          <li>
            <Link href="/">
              <a>
                <span>claire marie vaney</span>
              </a>
            </Link>
          </li>
          <span>____</span>
          <li>
            <Link href="/contact">
              <a>
                <span>contact </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ul">
        <Link href="/projects">
          <a>
            <span>PROJECTS</span>
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
      }

      ul {
        display: flex;
        justify-self: self-end;
        align-items: center;
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

export default Header;
