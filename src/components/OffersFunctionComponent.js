import React from "react";
import data from "../data/data.json";
// get offers from local json file
const dataOffers = data[0].offers;
function Offers() {
  return (
    <>
      <div className="offers">
        {dataOffers.map((offer) => {
          // looping through all the offers from the json file
          // declaring all the necessary variables
          const carId = offer.id;
          const carName = offer.carGroupInfo.modelExample.name;
          const carImage = offer.carGroupInfo.modelExample.imageUrl;
          const carPrice = offer.prices.totalPrice.amount.value;
          const carCurreny = offer.prices.totalPrice.amount.currency;

          return (
            // displaying all the offers in a grid based layout
            <div className="box" key={carId}>
              <div className="car-title">
                <h3>{carName}</h3>
              </div>
              <img className="image" src={carImage} alt="Auto" />
              <div className="car-price">
                <p>
                  {carPrice}&nbsp;
                  {carCurreny}&nbsp; pro Monat *
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Offers;
