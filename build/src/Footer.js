import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Footer = () => {
  return (
    <div className="foot">
      <div className="border border-secondary">
        <div className="footer bg-white border-dark">
          <h1 className="text-center">All Right Reserved &copy; Rohit Bagal</h1>
          <p className="text-center mt-3 navbar-light ">
            <Link to="/about">About</Link>|<Link to="/contact">contact</Link>|
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
