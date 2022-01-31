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
            //   displaying all the offers in a grid
            <div key={carId}>
              <h4>{carName}</h4>
              <img src={carImage} alt="Auto" />
              <p>
                Total Price:&nbsp;
                {carPrice}&nbsp;
                {carCurreny}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Offers;
