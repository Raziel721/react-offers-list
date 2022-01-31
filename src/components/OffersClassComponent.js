import React, { Component } from "react";
import data from "../data/data.js"; // importing offers from local javascript file
import "./Offers.css";

// using Class component with props to handle the data
export class OffersClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const dataOffers = data[0].offers;

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
              //   displaying all the offers in a grid based layout
              <div className="box" key={carId}>
                <img src={carImage} alt="Auto" />
                <h4 className="text-center">{carName}</h4>
                <p className="text-center">
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
}

export default OffersClassComponent;
