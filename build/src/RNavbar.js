import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";
const RNavbar = () => {
  return (
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
            <NavLink to="/rbody" className="navbar-brand" href="#">
              Flavors Of Pune
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/restaurant/1"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Atmosphere-6
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/3"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Villege
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/2"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Cocoparra
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/4"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Addah
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/5"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  George
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/6"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Hyatt Pune
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/restaurant/7"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Copper Chimney
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RNavbar;
