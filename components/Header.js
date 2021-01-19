import React from "react";
import Link from "next/link";
import Picture from "./Picture.js";

const Header = () => (
  <header>
    <div className="header">
      <div className="name">
        <Link href="/">
          <a>
            <h3>CMV </h3>
          </a>
        </Link>
      </div>
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
        <li>
          <Link href="/contact">
            <a>
              <span>CONTACT</span>
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
        position: relative;
      }

      a {
        display: inline-flex;
        padding: 15px 20px;
      }
      a:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #d6d6d6;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      a:hover:after {
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
