import React from "react";
import RNavbar from "./RNavbar";
import Footer from "./Footer";
import "./index.css";
import { Link } from "react-router-dom";

const Rbody = () => {
  return (
    <>
      <RNavbar />
      <div>
        <main className="contant" style={{ minHeight: "80vh" }}>
          <div className="container-fluid homepage-bgimage">
            <div className="px-4 py-5  text-center">
              <img
                className="d-block mx-auto mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1Lv_BC4p3R4kKrEfuHCzG0T13Vvb7z3_Oopsz8MxIg&shttps://m.media-amazon.com/images/M/MV5BMTNmZmRjMjgtNzkwZC00MGE3LWI1ZjktZjQyNzIzOGIyNjhjXkEyXkFqcGdeQXVyMjIyNDUxNzY@._V1_.jpg"
                alt="logo"
                width={72}
                height={57}
              />
              <div className="hero-heading ">
                <h1 className="display-5 fw-bold text-warning">
                  Flavors of Pune
                </h1>
              </div>
              <div className="hero-heading bg-black mt-10 bg-opacity-50">
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4 text-white p-6">
                    Welcome to Flavors of Pune , your ultimate guide to Pune's
                    culinary scene! Explore renowned restaurants offering
                    traditional Maharashtrian and international cuisines. Embark
                    on a flavorful journey with us to discover hidden gems and
                    iconic eateries. Start your unforgettable culinary adventure
                    today! Join us as we celebrate the flavors, aromas, and
                    traditions that make dining in Pune an unforgettable
                    experience!.
                  </p>
                </div>
              </div>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link
                  to="/"
                  type="button"
                  className="btn btn-primary btn-lg px-4 gap-3"
                >
                  HOMEPAGE
                </Link>
                <Link
                  to={"/contact"}
                  type="button"
                  className="btn btn-danger btn-lg px-4"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Rbody;
