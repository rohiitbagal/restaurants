import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "./index.css";
const Contact = () => {
  return (
    <>
      <Header />
      <div className=" bg-info bg-opacity-10">
        <main style={{ minHeight: "80vh" }}>
          {" "}
          <div className="row contactus ">
            <div className="col-md-6 ">
              <img
                src="/contactus.jpeg"
                alt="contactus"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-4 border border-secondary">
              <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
              <p className="text-justify mt-2">
                Any query and info about Restaurant feel free to call anytime we
                24X7 vaialible
              </p>
              <p className="mt-3">
                <BiMailSend /> : www.help@Flavors of Pune.com
              </p>
              <p className="mt-3">
                <BiPhoneCall /> : 012-3456789
              </p>
              <p className="mt-3">
                <BiSupport /> : 1800-0000-0000 (toll free)
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
