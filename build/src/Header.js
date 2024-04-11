import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./index.css";
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg  navbar-light bg-white p-4 border border-dark nav-tabs">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <NavLink to="/" className="navbar-brand" href="#">
                Hidden brand
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/rbody"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Resutarants
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
