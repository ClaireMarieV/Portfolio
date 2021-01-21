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
                <h3>claire marie vaney</h3>
              </a>
            </Link>
          </li>
          <span>____</span>
          <li>
            <Link href="/contact">
              <a>
                <h3>contact </h3>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ul">
        <ul>
          <li>
            <Link href="/#skills">
              <a>
                <span>SKILLS</span>
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
      .header {
        // width: 100vw;
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
      ul > li {
        position: relative;
      }

      a {
        display: inline-flex;
        padding: 15px 20px;
      }
      .ul a:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: white;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      .ul a:hover:after {
        width: 100%;
        left: 0;
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
