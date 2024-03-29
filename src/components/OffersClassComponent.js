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
  // adding an event, fallback image placeholder
  addDefaultSrc(ev) {
    ev.target.src = "https://via.placeholder.com/350x250";
  }
  render() {
    const dataOffers = data[0].offers;
    console.log(dataOffers);

    return (
      <>
        <div className="headline">
          <h1>Lease a car</h1>
        </div>
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
                <div className="car-title">
                  <h3>{carName}</h3>
                </div>
                <img
                  className="image"
                  src={carImage}
                  onError={this.addDefaultSrc}
                  alt="Auto"
                />
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
}

export default OffersClassComponent;
