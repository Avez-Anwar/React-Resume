import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../logo.png";
//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img className="logo" alt="logo" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item active"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              Link
              to="about"
              spy={true}
              smooth={true}
              className="nav-item"
              to="/about"
            >
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
              >
                about
              </Link>
            </li>

            <li className="nav-item" to="/services">
              <Link
                className="nav-link"
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
              >
                services
              </Link>
            </li>
            <li className="nav-item" to="/">
              <Link
                className="nav-link"
                activeClass="active"
                to="how-work"
                spy={true}
                smooth={true}
              >
                how work
              </Link>
            </li>
            <li className="nav-item" to="/portfolio">
              <Link
                className="nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item" to="/contact">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
