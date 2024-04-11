import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

const About = () => {
  return (
    <>
      <Header />
      <div className=" bg-info bg-opacity-10">
        <main style={{ minHeight: "80vh" }}>
          <div className="row contactus ">
            <div className="col-md-6 ">
              <img
                src="/about.jpeg"
                alt="contactus"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-md-4">
              <p className="text-justify mt-2">
                At Flavors of Pune, we're passionate about Pune's culinary
                scene. Our curated selection of restaurants reflects the city's
                diverse food culture, from traditional Maharashtrian fare to
                international cuisines. We're more than a directory; we're
                storytellers, sharing the narratives behind each culinary gem.
                Join us in celebrating Pune's flavors, cultures, and dining
                traditions. Let Flavors of Pune be your guide to unforgettable
                culinary experiences in Pune.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
