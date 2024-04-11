import React from "react";
import "./index.css";
import Footer from "./Footer";
import RNavbar from "./RNavbar";

function Resutarant({ restaurant }) {
  return (
    <>
      <RNavbar />
      <div className=" bg-info bg-opacity-10">
        <main className="contant " style={{ minHeight: "80vh" }}>
          <div className="side-margin">
            <div className="top-margin bg-warning text-dark p-6 ms-20 bg-opacity-25 ">
              <h2 className="ms-4 text-danger ">{restaurant.name}</h2>
              <p>
                <h4 className="ms-4 text-danger"> </h4>
                <div className="m-4">{restaurant.imageUrl}</div>
              </p>
              <p className="ms-4">Area : {restaurant.addres}</p>
              <p className="ms-4">Dishes : {restaurant.mustHaves}</p>
              <p className="ms-4">CostForTwo : {restaurant.costForTwo}</p>
              <p className="ms-4">Highlights : {restaurant.highlights}</p>

              <p>
                <h3 className="ms-4 text-danger">Address :</h3>
                <div className="m-4"> {restaurant.address}</div>
              </p>
              <p className="ms-4">
                <h4 className="text-danger"> More Info :</h4>{" "}
                {restaurant.description}
              </p>
              <p>
                <h4 className="ms-4 text-danger"> View : </h4>
                <div className="m-4">{restaurant.video}</div>
              </p>
              <p className="ms-4">
                <h4 className="text-danger"> Other Braches : </h4>
                {restaurant.cuisine}
              </p>
              <p className="ms-4">
                <h4 className="text-danger"> Highlights: </h4>
                {restaurant.highlights}
              </p>
              <p className="ms-4">
                <h4 className="text-danger"> Tips : </h4>
                {restaurant.tips}
              </p>
              <p>
                <h4 className="ms-4 text-danger"> Phone : </h4>
                <div className="ms-4">{restaurant.Phone}</div>
              </p>
              <p>
                <h4 className="ms-4 text-danger"> Reservations : </h4>
                <div className="ms-4">{restaurant.Reservations}</div>
              </p>
              <p>
                <h4 className="ms-4 text-danger"> Website : </h4>
                <div className="m-4">{restaurant.url}</div>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Resutarant;
