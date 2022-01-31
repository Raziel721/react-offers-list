const data = [
  {
    info: {
      rentalInformationUrl:
        "https://www.sixt.de/php/terms/view?language=de_DE\u0026view=EPP\u0026liso=DE\u0026uci=11\u0026style=typo3",
      termsAndConditionsUrl:
        "https://www.sixt.de/fileadmin/sys/agb/sixt_DE_de.pdf",
      dataPrivacyUrl: "https://www.sixt.de/fileadmin/sys/agb/DSGVO_DE_de.pdf",
      taxInformation: "Preisübersicht",
      specialApplied: false,
      corporateDiscountNumber: 0,
      corporateCustomerNumber: 0,
      pickupStationId: "11",
      returnStationId: "11",
      pickupDate: "2021-02-09T12:30:00Z",
      returnDate: "2021-02-12T08:30:00Z",
      vehicleType: "car",
    },
    offers: [
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Audi A3 Sedan oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A3 Sedan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A3 Sedan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "SDMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 166.33,
              display: "166,33",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 166.33,
            trackingNet: 139.77,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 209.96,
              display: "209,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 209.96,
            trackingNet: 176.44,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 69.99, display: "69,99", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 69.99,
            trackingNet: 58.81,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 237.96,
              display: "237,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 237.96,
            trackingNet: 199.97,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 79.32, display: "79,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 79.32,
            trackingNet: 66.66,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a3-limousine-4d-blau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a3-limousine-4d-blau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a3-limousine-4d-blau-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 209.96,
                  display: "209,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 209.96,
                trackingNet: 176.44,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 55,44)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 166.33,
                      display: "166,33",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 166.33,
                    trackingNet: 139.77,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 41.85,
                          display: "41,85",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 41.85,
                        trackingNet: 35.17,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 209.96,
                      display: "209,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 209.96,
                    trackingNet: 176.44,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 237.96,
                  display: "237,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 237.96,
                trackingNet: 199.97,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 254.96,
                  display: "254,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 254.96,
                trackingNet: 214.25,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 45,
                  display: "45,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 45,
                trackingNet: 37.81,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 67,45)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 202.35,
                      display: "202,35",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 202.35,
                    trackingNet: 170.04,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 50.82,
                          display: "50,82",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 50.82,
                        trackingNet: 42.71,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 254.96,
                      display: "254,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 254.96,
                    trackingNet: 214.25,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 0,
          price: 13,
          popularity: 220,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi A3 Sedan",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline: "Audi A3 Sedan oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Audi A4 Avant oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A4 Avant",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
            additionalExamples: ["BMW 3 Series Touring"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A4 Avant",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
            additionalExamples: ["BMW 3 Series Touring"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        acrissCode: "FWMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 183.96,
              display: "183,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 183.96,
            trackingNet: 154.59,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 231.99,
              display: "231,99",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 231.99,
            trackingNet: 194.95,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 77.33, display: "77,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 77.33,
            trackingNet: 64.98,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 268.95,
              display: "268,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 268.95,
            trackingNet: 226.01,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 89.65, display: "89,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 89.65,
            trackingNet: 75.34,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3er-kombi-grau-2019.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3er-kombi-grau-2019.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3er-kombi-grau-2019.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3er-kombi-grau-2019.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3er-kombi-grau-2019.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a4-kombi-brown-2016.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a4-kombi-brown-2016.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a4-kombi-brown-2016.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 231.99,
                  display: "231,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 231.99,
                trackingNet: 194.95,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 61,32)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 183.96,
                      display: "183,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 183.96,
                    trackingNet: 154.59,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 46.24,
                          display: "46,24",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 46.24,
                        trackingNet: 38.86,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 231.99,
                      display: "231,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 231.99,
                    trackingNet: 194.95,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 268.95,
                  display: "268,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 268.95,
                trackingNet: 226.01,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 281.98,
                  display: "281,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 281.98,
                trackingNet: 236.96,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 49.99,
                  display: "49,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 49.99,
                trackingNet: 42.01,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 74,66)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 223.98,
                      display: "223,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 223.98,
                    trackingNet: 188.22,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 56.22,
                          display: "56,22",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 56.22,
                        trackingNet: 47.24,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 281.98,
                      display: "281,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 281.98,
                    trackingNet: 236.96,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 1,
          price: 20,
          popularity: 196,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi A4 Avant",
          shortSubline: "oder ähnlich | Premium Kombi",
          longSubline:
            "Audi A4 Avant, BMW 3 Series Touring oder ähnlich | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Audi A4 Avant Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A4 Avant Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
            additionalExamples: ["Mercedes-Benz C-Class Estate Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A4 Avant Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
            additionalExamples: ["Mercedes-Benz C-Class Estate Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        acrissCode: "FWAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 196.74,
              display: "196,74",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 196.74,
            trackingNet: 165.33,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 247.96,
              display: "247,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 247.96,
            trackingNet: 208.37,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 82.65, display: "82,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 82.65,
            trackingNet: 69.46,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 286.97,
              display: "286,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 286.97,
            trackingNet: 241.15,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 95.66, display: "95,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 95.66,
            trackingNet: 80.38,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a4-kombi-brown-2016.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a4-kombi-brown-2016.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a4-kombi-brown-2016.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 247.96,
                  display: "247,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 247.96,
                trackingNet: 208.37,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 65,58)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 196.74,
                      display: "196,74",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 196.74,
                    trackingNet: 165.33,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 49.43,
                          display: "49,43",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 49.43,
                        trackingNet: 41.54,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 247.96,
                      display: "247,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 247.96,
                    trackingNet: 208.37,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 286.97,
                  display: "286,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 286.97,
                trackingNet: 241.15,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 301.95,
                  display: "301,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 301.95,
                trackingNet: 253.74,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 53.99,
                  display: "53,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 53.99,
                trackingNet: 45.37,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 79,99)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 239.98,
                      display: "239,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 239.98,
                    trackingNet: 201.66,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 60.19,
                          display: "60,19",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 60.19,
                        trackingNet: 50.58,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 301.95,
                      display: "301,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 301.95,
                    trackingNet: 253.74,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 2,
          price: 22,
          popularity: 182,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi A4 Avant Aut.",
          shortSubline: "oder ähnlich | Premium Kombi",
          longSubline:
            "Audi A4 Avant Aut., Mercedes-Benz C-Class Estate Aut. oder ähnlich | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-PSAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Audi A5 40 Coupé/Sportback oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A5 40 Coupé/Sportback",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b1c94caec9b28d25e2b839df6690d068438832b5.jpeg",
            additionalExamples: ["BMW 420 Coupé/Gran Coupé"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A5 40 Coupé/Sportback",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b1c94caec9b28d25e2b839df6690d068438832b5.jpeg",
            additionalExamples: ["BMW 420 Coupé/Gran Coupé"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 1 },
        },
        acrissCode: "PSAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 219.2,
              display: "219,20",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 219.2,
            trackingNet: 184.2,
          },
          totalPrice: {
            prefix: "",
            amount: { value: 276, display: "276,00", currency: "EUR" },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 276,
            trackingNet: 231.93,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 92, display: "92,00", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 92,
            trackingNet: 77.31,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 319.97,
              display: "319,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 319.97,
            trackingNet: 268.88,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 106.66,
              display: "106,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 106.66,
            trackingNet: 89.63,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-coupe-2d-2021-mf-06.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-06.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-coupe-2d-2021-mf-06.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-coupe-2d-2021-mf-06.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-coupe-2d-2021-mf-06.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-sportback-sedan-4d-2021-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-sportback-sedan-4d-2021-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-sportback-sedan-4d-2021-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-sportback-sedan-4d-2021-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-sportback-sedan-4d-2021-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-sportback-sedan-4d-2021-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-sportback-sedan-4d-2021-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-sportback-sedan-4d-2021-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-sportback-sedan-4d-2021-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-sportback-sedan-4d-2021-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-sportback-sedan-4d-2021-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-sportback-sedan-4d-2021-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a5-sportback-sedan-4d-2021-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a5-sportback-sedan-4d-2021-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a5-sportback-sedan-4d-2021-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a5-sportback-sedan-4d-2021-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a5-coupe-2d-grau-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a5-coupe-2d-grau-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a5-coupe-2d-grau-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,38 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 276,
                  display: "276,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 276,
                trackingNet: 231.93,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 73,07)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 219.2,
                      display: "219,20",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 219.2,
                    trackingNet: 184.2,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 55.01,
                          display: "55,01",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 55.01,
                        trackingNet: 46.23,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 276,
                      display: "276,00",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 276,
                    trackingNet: 231.93,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 319.97,
                  display: "319,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 319.97,
                trackingNet: 268.88,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 335.97,
                  display: "335,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 335.97,
                trackingNet: 282.33,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 59.97,
                  display: "59,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 59.97,
                trackingNet: 50.4,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 89,07)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 267.21,
                      display: "267,21",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 267.21,
                    trackingNet: 224.55,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 66.97,
                          display: "66,97",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 66.97,
                        trackingNet: 56.28,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 335.97,
                      display: "335,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 335.97,
                    trackingNet: 282.33,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 3,
          price: 25,
          popularity: 168,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi A5 40 Coupé/Sportback",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "Audi A5 40 Coupé/Sportback, BMW 420 Coupé/Gran Coupé oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-PWAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Audi A6 Avant Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A6 Avant Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/52438026dee2bb21212d4cb6f65b87b70b093512.jpeg",
            additionalExamples: ["BMW 520 Touring Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi A6 Avant Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/52438026dee2bb21212d4cb6f65b87b70b093512.jpeg",
            additionalExamples: ["BMW 520 Touring Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        acrissCode: "PWAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 222.38,
              display: "222,38",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 222.38,
            trackingNet: 186.87,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 279.97,
              display: "279,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 279.97,
            trackingNet: 235.27,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 93.32, display: "93,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 93.32,
            trackingNet: 78.42,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 322.95,
              display: "322,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 322.95,
            trackingNet: 271.39,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 107.65,
              display: "107,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 107.65,
            trackingNet: 90.46,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-t-model-estate-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-t-model-estate-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-t-model-estate-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-t-model-estate-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-t-model-estate-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-t-model-estate-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-t-model-estate-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-t-model-estate-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-t-model-estate-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-t-model-estate-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a6-kombi-blau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a6-kombi-blau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a6-kombi-blau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,35 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 279.97,
                  display: "279,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 279.97,
                trackingNet: 235.27,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 74,13)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 222.38,
                      display: "222,38",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 222.38,
                    trackingNet: 186.87,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 55.81,
                          display: "55,81",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 55.81,
                        trackingNet: 46.9,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 279.97,
                      display: "279,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 279.97,
                    trackingNet: 235.27,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 322.95,
                  display: "322,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 322.95,
                trackingNet: 271.39,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 339.95,
                  display: "339,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 339.95,
                trackingNet: 285.67,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 59.98,
                  display: "59,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 59.98,
                trackingNet: 50.4,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 90,13)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 270.39,
                      display: "270,39",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 270.39,
                    trackingNet: 227.22,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 67.77,
                          display: "67,77",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 67.77,
                        trackingNet: 56.95,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 339.95,
                      display: "339,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 339.95,
                    trackingNet: 285.67,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 4,
          price: 27,
          popularity: 188,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi A6 Avant Aut.",
          shortSubline: "oder ähnlich | Premium Kombi",
          longSubline:
            "Audi A6 Avant Aut., BMW 520 Touring Aut. oder ähnlich | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LCAR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Audi S5 Sportback oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S5 Sportback",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/871ec184f8a632854c6dc49cec1cd616b4637853.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S5 Sportback",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/871ec184f8a632854c6dc49cec1cd616b4637853.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        acrissCode: "LCAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 343.26,
              display: "343,26",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 343.26,
            trackingNet: 288.45,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 430.95,
              display: "430,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 430.95,
            trackingNet: 362.14,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 143.65,
              display: "143,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 143.65,
            trackingNet: 120.71,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5_sb-lx-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5_sb-lx-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5_sb-lx-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5_sb-lx-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5_sb-lx-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5_sb-lx-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5_sb-lx-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5_sb-lx-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5_sb-lx-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5_sb-lx-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5-lx-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5-lx-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5-lx-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5-lx-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5-lx-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5-lx-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5-lx-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5-lx-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5-lx-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s5-lx-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s5-lx-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s5-lx-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s5-lx-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-s5-sportback-5d-blau-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-s5-sportback-5d-blau-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-s5-sportback-5d-blau-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 430.95,
                  display: "430,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 430.95,
                trackingNet: 362.14,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 114,42)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 343.26,
                      display: "343,26",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 343.26,
                    trackingNet: 288.45,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 85.91,
                          display: "85,91",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 85.91,
                        trackingNet: 72.19,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 430.95,
                      display: "430,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 430.95,
                    trackingNet: 362.14,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 5,
          price: 37,
          popularity: 97,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi S5 Sportback",
          shortSubline: "garantiertes Modell | Premium Limousine",
          longSubline: "garantiertes Modell | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LDAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Audi S6 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S6",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a4673a457b660e2d73587fa4ffc1f973551aee36.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S6",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a4673a457b660e2d73587fa4ffc1f973551aee36.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        acrissCode: "LDAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 382.49,
              display: "382,49",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 382.49,
            trackingNet: 321.42,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 479.95,
              display: "479,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 479.95,
            trackingNet: 403.32,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 159.98,
              display: "159,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 159.98,
            trackingNet: 134.44,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-4d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-4d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-4d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-4d-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/fleet_default.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/fleet_default.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/fleet_default.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 479.95,
                  display: "479,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 479.95,
                trackingNet: 403.32,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 127,50)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 382.49,
                      display: "382,49",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 382.49,
                    trackingNet: 321.42,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 95.68,
                          display: "95,68",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 95.68,
                        trackingNet: 80.4,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 479.95,
                      display: "479,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 479.95,
                    trackingNet: 403.32,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 6,
          price: 44,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi S6",
          shortSubline: "garantiertes Modell | Premium Limousine",
          longSubline: "garantiertes Modell | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LWMR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Audi S6 Avant oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi S6 Avant",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/6d1cfd3104cc014589f578d8688b2f9e8b2431a7.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Audi S6 Avant",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/6d1cfd3104cc014589f578d8688b2f9e8b2431a7.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LWMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 382.49,
              display: "382,49",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 382.49,
            trackingNet: 321.42,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 479.95,
              display: "479,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 479.95,
            trackingNet: 403.32,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 159.98,
              display: "159,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 159.98,
            trackingNet: 134.44,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s6-avant-estate-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s6-avant-estate-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s6-avant-estate-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s6-avant-estate-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s6-avant-estate-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s6-avant-estate-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s6-avant-estate-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s6-avant-estate-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s6-avant-estate-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s6-avant-estate-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-s6-kombi-blau-2015.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-s6-kombi-blau-2015.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-s6-kombi-blau-2015.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 479.95,
                  display: "479,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 479.95,
                trackingNet: 403.32,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 127,50)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 382.49,
                      display: "382,49",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 382.49,
                    trackingNet: 321.42,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 95.68,
                          display: "95,68",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 95.68,
                        trackingNet: 80.4,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 479.95,
                      display: "479,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 479.95,
                    trackingNet: 403.32,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 7,
          price: 45,
          popularity: 92,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi S6 Avant",
          shortSubline: "garantiertes Modell | Premium Kombi",
          longSubline: "garantiertes Modell | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XCAR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Audi S8 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S8",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d60bb92aa7761a332ad05303d3379c4b85f83484.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi S8",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d60bb92aa7761a332ad05303d3379c4b85f83484.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XCAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 612.29,
              display: "612,29",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 612.29,
            trackingNet: 514.53,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 766.98,
              display: "766,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 766.98,
            trackingNet: 644.52,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 255.66,
              display: "255,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 255.66,
            trackingNet: 214.84,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-s8-4d-sedan-wht-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s8-4d-sedan-wht-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-s8-4d-sedan-wht-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-s8-4d-sedan-wht-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-s8-4d-sedan-wht-2020-60.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-s8-4d-white-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-s8-4d-white-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-s8-4d-white-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 766.98,
                  display: "766,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 766.98,
                trackingNet: 644.52,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 204,10)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 612.29,
                      display: "612,29",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 612.29,
                    trackingNet: 514.53,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 152.9,
                          display: "152,90",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 152.9,
                        trackingNet: 128.49,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 766.98,
                      display: "766,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 766.98,
                    trackingNet: 644.52,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 8,
          price: 56,
          popularity: 52,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi S8",
          shortSubline: "garantiertes Modell | Premium Limousine",
          longSubline: "garantiertes Modell | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SSAX",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Audi TTS Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi TTS Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e286e5b7ef2e54ab80c454358329a08ba8045fbf.jpeg",
            additionalExamples: ["BMW M240i Coupé"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 0 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Audi TTS Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e286e5b7ef2e54ab80c454358329a08ba8045fbf.jpeg",
            additionalExamples: ["BMW M240i Coupé"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 0 },
        },
        acrissCode: "SSAX",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 294.42,
              display: "294,42",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 294.42,
            trackingNet: 247.41,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 369.95,
              display: "369,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 369.95,
            trackingNet: 310.88,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 123.32,
              display: "123,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 123.32,
            trackingNet: 103.63,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-2-coupe-2d-wht-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-2d-wht-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-2d-wht-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-2-coupe-2d-wht-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-2-coupe-2d-wht-2020-60.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-tt-rs-coupe-2d-blau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-tt-rs-coupe-2d-blau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-tt-rs-coupe-2d-blau-2020.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 369.95,
                  display: "369,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 369.95,
                trackingNet: 310.88,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 98,14)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 294.42,
                      display: "294,42",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 294.42,
                    trackingNet: 247.41,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 73.74,
                          display: "73,74",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 73.74,
                        trackingNet: 61.97,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 369.95,
                      display: "369,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 369.95,
                    trackingNet: 310.88,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 9,
          price: 34,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Audi TTS Coupé",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "Audi TTS Coupé, BMW M240i Coupé oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CPMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 1 Series oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 1 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5e25e372be4d6763928630f1b84df5979df0ff77.jpeg",
            additionalExamples: ["Audi A3 Sportback", "Mercedes-Benz A-Class"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 1 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5e25e372be4d6763928630f1b84df5979df0ff77.jpeg",
            additionalExamples: ["Audi A3 Sportback", "Mercedes-Benz A-Class"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "CPMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 155.9,
              display: "155,90",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 155.9,
            trackingNet: 131.01,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 196.95,
              display: "196,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 196.95,
            trackingNet: 165.5,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 65.65, display: "65,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 65.65,
            trackingNet: 55.17,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 222.98,
              display: "222,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 222.98,
            trackingNet: 187.38,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 74.33, display: "74,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 74.33,
            trackingNet: 62.46,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-1-hatch-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-1-hatch-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-1-hatch-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-1-hatch-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-3d-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-3d-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-3d-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-3d-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-3d-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-3d-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-a-hatch-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-a-hatch-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-a-hatch-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-a-hatch-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-a-hatch-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-a-hatch-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-a-hatch-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-a-hatch-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-a-hatch-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-a-hatch-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-a-hatch-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-a-hatch-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-a-hatch-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-1er-5d-weiss-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-1er-5d-weiss-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-1er-5d-weiss-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 196.95,
                  display: "196,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 196.95,
                trackingNet: 165.5,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 51,97)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 155.9,
                      display: "155,90",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 155.9,
                    trackingNet: 131.01,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 39.26,
                          display: "39,26",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 39.26,
                        trackingNet: 32.99,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 196.95,
                      display: "196,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 196.95,
                    trackingNet: 165.5,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 222.98,
                  display: "222,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 222.98,
                trackingNet: 187.38,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 238.95,
                  display: "238,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 238.95,
                trackingNet: 200.8,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 42,
                  display: "42,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 42,
                trackingNet: 35.3,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 63,18)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 189.53,
                      display: "189,53",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 189.53,
                    trackingNet: 159.27,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 47.64,
                          display: "47,64",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 47.64,
                        trackingNet: 40.03,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 238.95,
                      display: "238,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 238.95,
                    trackingNet: 200.8,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 10,
          price: 7,
          popularity: 226,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 1 Series",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 1 Series, Audi A3 Sportback, Mercedes-Benz A-Class oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CPAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 1 Series Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 1 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5e25e372be4d6763928630f1b84df5979df0ff77.jpeg",
            additionalExamples: ["Audi A3 Sportback Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 1 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5e25e372be4d6763928630f1b84df5979df0ff77.jpeg",
            additionalExamples: ["Audi A3 Sportback Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "CPAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 171.15,
              display: "171,15",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 171.15,
            trackingNet: 143.82,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 215.99,
              display: "215,99",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 215.99,
            trackingNet: 181.5,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 72, display: "72,00", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 72,
            trackingNet: 60.5,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 244.97,
              display: "244,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 244.97,
            trackingNet: 205.86,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 81.66, display: "81,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 81.66,
            trackingNet: 68.62,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-1-hatch-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-1-hatch-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-1-hatch-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-1-hatch-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-1-hatch-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-3d-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-3d-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-3d-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-3d-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a3-3d-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a3-3d-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-3d-mf-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-1er-5d-weiss-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-1er-5d-weiss-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-1er-5d-weiss-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 215.99,
                  display: "215,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 215.99,
                trackingNet: 181.5,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 57,05)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 171.15,
                      display: "171,15",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 171.15,
                    trackingNet: 143.82,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 43.05,
                          display: "43,05",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 43.05,
                        trackingNet: 36.18,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 215.99,
                      display: "215,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 215.99,
                    trackingNet: 181.5,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 244.97,
                  display: "244,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 244.97,
                trackingNet: 205.86,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 262,
                  display: "262,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 262,
                trackingNet: 220.17,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 46.01,
                  display: "46,01",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 46.01,
                trackingNet: 38.67,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 69,33)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 207.99,
                      display: "207,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 207.99,
                    trackingNet: 174.78,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 52.23,
                          display: "52,23",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 52.23,
                        trackingNet: 43.89,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 262,
                      display: "262,00",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 262,
                    trackingNet: 220.17,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 11,
          price: 16,
          popularity: 206,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 1 Series Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 1 Series Aut., Audi A3 Sportback Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-ILMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 2 Series oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ed617d40237bfccaf82fc7d1f5e6ee9d5acbc381.jpeg",
            additionalExamples: ["Opel Insignia"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ed617d40237bfccaf82fc7d1f5e6ee9d5acbc381.jpeg",
            additionalExamples: ["Opel Insignia"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "ILMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 158.33,
              display: "158,33",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 158.33,
            trackingNet: 133.05,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 199.98,
              display: "199,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 199.98,
            trackingNet: 168.05,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 66.66, display: "66,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 66.66,
            trackingNet: 56.02,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 226.96,
              display: "226,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 226.96,
            trackingNet: 190.72,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 75.65, display: "75,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 75.65,
            trackingNet: 63.57,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-passat-sedan-4d-2019-pixabay-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-passat-sedan-4d-2019-pixabay-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/opel-insignia-limousine-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-2er-activ-tourer-schwarz-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-2er-activ-tourer-schwarz-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-2er-activ-tourer-schwarz-2018.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 199.98,
                  display: "199,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 199.98,
                trackingNet: 168.05,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 52,78)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 158.33,
                      display: "158,33",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 158.33,
                    trackingNet: 133.05,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 39.87,
                          display: "39,87",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 39.87,
                        trackingNet: 33.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 199.98,
                      display: "199,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 199.98,
                    trackingNet: 168.05,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 226.96,
                  display: "226,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 226.96,
                trackingNet: 190.72,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 243.94,
                  display: "243,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 243.94,
                trackingNet: 204.99,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 43.96,
                  display: "43,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 43.96,
                trackingNet: 36.94,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 64,51)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 193.53,
                      display: "193,53",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 193.53,
                    trackingNet: 162.63,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 48.62,
                          display: "48,62",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 48.62,
                        trackingNet: 40.86,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 243.94,
                      display: "243,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 243.94,
                    trackingNet: 204.99,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 12,
          price: 9,
          popularity: 198,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 2 Series",
          shortSubline: "oder ähnlich | Limousine",
          longSubline: "BMW 2 Series, Opel Insignia oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-ILAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 2 Series Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ed617d40237bfccaf82fc7d1f5e6ee9d5acbc381.jpeg",
            additionalExamples: ["Opel Insignia Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ed617d40237bfccaf82fc7d1f5e6ee9d5acbc381.jpeg",
            additionalExamples: ["Opel Insignia Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "ILAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 169.54,
              display: "169,54",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 169.54,
            trackingNet: 142.47,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 213.97,
              display: "213,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 213.97,
            trackingNet: 179.81,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 71.32, display: "71,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 71.32,
            trackingNet: 59.94,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 242.96,
              display: "242,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 242.96,
            trackingNet: 204.17,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 80.99, display: "80,99", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 80.99,
            trackingNet: 68.06,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-passat-sedan-4d-2019-pixabay-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-passat-sedan-4d-2019-pixabay-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-passat-sedan-4d-2019-pixabay-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-passat-sedan-4d-2019-pixabay-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/opel-insignia-limousine-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/opel-insignia-limousine-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-2er-activ-tourer-schwarz-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-2er-activ-tourer-schwarz-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-2er-activ-tourer-schwarz-2018.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 213.97,
                  display: "213,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 213.97,
                trackingNet: 179.81,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 56,51)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 169.54,
                      display: "169,54",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 169.54,
                    trackingNet: 142.47,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 42.65,
                          display: "42,65",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 42.65,
                        trackingNet: 35.84,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 213.97,
                      display: "213,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 213.97,
                    trackingNet: 179.81,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 242.96,
                  display: "242,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 242.96,
                trackingNet: 204.17,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 259.99,
                  display: "259,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 259.99,
                trackingNet: 218.48,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 46.02,
                  display: "46,02",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 46.02,
                trackingNet: 38.67,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 68,79)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 206.38,
                      display: "206,38",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 206.38,
                    trackingNet: 173.43,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 51.82,
                          display: "51,82",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 51.82,
                        trackingNet: 43.55,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 259.99,
                      display: "259,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 259.99,
                    trackingNet: 218.48,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 13,
          price: 14,
          popularity: 48,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 2 Series Aut.",
          shortSubline: "oder ähnlich | Limousine",
          longSubline:
            "BMW 2 Series Aut., Opel Insignia Aut. oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SSMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 2 Series Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f07393c2ea4ca83ead56963f72a7fec097f5e3a0.jpg",
            additionalExamples: ["Audi TT"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 2 Series Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f07393c2ea4ca83ead56963f72a7fec097f5e3a0.jpg",
            additionalExamples: ["Audi TT"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        acrissCode: "SSMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 174.32,
              display: "174,32",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 174.32,
            trackingNet: 146.49,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 219.95,
              display: "219,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 219.95,
            trackingNet: 184.83,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 73.32, display: "73,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 73.32,
            trackingNet: 61.61,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 248.98,
              display: "248,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 248.98,
            trackingNet: 209.23,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 82.99, display: "82,99", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 82.99,
            trackingNet: 69.74,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-2-coupe-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-2-coupe-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-2-coupe-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-2-coupe-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-2-coupe-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-2-coupe-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-2-coupe-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-tt-coupe-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-tt-coupe-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-tt-coupe-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-tt-coupe-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-2er-coupe-2d-blau-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-2er-coupe-2d-blau-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-2er-coupe-2d-blau-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,31 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 219.95,
                  display: "219,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 219.95,
                trackingNet: 184.83,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 58,11)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 174.32,
                      display: "174,32",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 174.32,
                    trackingNet: 146.49,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 43.84,
                          display: "43,84",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 43.84,
                        trackingNet: 36.84,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 219.95,
                      display: "219,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 219.95,
                    trackingNet: 184.83,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 248.98,
                  display: "248,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 248.98,
                trackingNet: 209.23,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 266.95,
                  display: "266,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 266.95,
                trackingNet: 224.33,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 47,
                  display: "47,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 47,
                trackingNet: 39.5,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 70,65)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 211.95,
                      display: "211,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 211.95,
                    trackingNet: 178.11,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 53.22,
                          display: "53,22",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 53.22,
                        trackingNet: 44.72,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 266.95,
                      display: "266,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 266.95,
                    trackingNet: 224.33,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 14,
          price: 17,
          popularity: 100,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 2 Series Coupé",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "BMW 2 Series Coupé, Audi TT oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FDMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 3 Series oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 3 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e84c2289d5010484c914e72249415a5112ab9e1f.jpeg",
            additionalExamples: ["Audi A4", "Mercedes-Benz C-Class"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 3 Series",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e84c2289d5010484c914e72249415a5112ab9e1f.jpeg",
            additionalExamples: ["Audi A4", "Mercedes-Benz C-Class"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "FDMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 179.93,
              display: "179,93",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 179.93,
            trackingNet: 151.2,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 226.96,
              display: "226,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 226.96,
            trackingNet: 190.72,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 75.65, display: "75,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 75.65,
            trackingNet: 63.57,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 261.95,
              display: "261,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 261.95,
            trackingNet: 220.13,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 87.32, display: "87,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 87.32,
            trackingNet: 73.38,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-3-4d-sedan-wht-2020-60.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-3-4d-sedan-wht-2020-60.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-3-4d-sedan-wht-2020-60.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 226.96,
                  display: "226,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 226.96,
                trackingNet: 190.72,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 59,98)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 179.93,
                      display: "179,93",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 179.93,
                    trackingNet: 151.2,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 45.24,
                          display: "45,24",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 45.24,
                        trackingNet: 38.02,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 226.96,
                      display: "226,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 226.96,
                    trackingNet: 190.72,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 261.95,
                  display: "261,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 261.95,
                trackingNet: 220.13,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 275.96,
                  display: "275,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 275.96,
                trackingNet: 231.9,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 49,
                  display: "49,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 49,
                trackingNet: 41.18,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 73,05)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 219.16,
                      display: "219,16",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 219.16,
                    trackingNet: 184.17,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 55.01,
                          display: "55,01",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 55.01,
                        trackingNet: 46.23,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 275.96,
                      display: "275,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 275.96,
                    trackingNet: 231.9,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 15,
          price: 19,
          popularity: 216,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 3 Series",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 3 Series, Audi A4, Mercedes-Benz C-Class oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FDAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 3 Series Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 3 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e84c2289d5010484c914e72249415a5112ab9e1f.jpeg",
            additionalExamples: ["Audi A4 Aut.", "Mercedes-Benz C-Class Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 3 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e84c2289d5010484c914e72249415a5112ab9e1f.jpeg",
            additionalExamples: ["Audi A4 Aut.", "Mercedes-Benz C-Class Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "FDAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 191.96,
              display: "191,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 191.96,
            trackingNet: 161.31,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 241.97,
              display: "241,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 241.97,
            trackingNet: 203.34,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 80.66, display: "80,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 80.66,
            trackingNet: 67.78,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 279.97,
              display: "279,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 279.97,
            trackingNet: 235.27,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 93.32, display: "93,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 93.32,
            trackingNet: 78.42,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a4-sedan-4d-2021-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a4-sedan-4d-2021-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a4-sedan-4d-2021-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-c-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-c-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-c-sedan-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-3-4d-sedan-wht-2020-60.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-3-4d-sedan-wht-2020-60.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-3-4d-sedan-wht-2020-60.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 241.97,
                  display: "241,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 241.97,
                trackingNet: 203.34,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 63,99)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 191.96,
                      display: "191,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 191.96,
                    trackingNet: 161.31,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 48.23,
                          display: "48,23",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 48.23,
                        trackingNet: 40.53,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 241.97,
                      display: "241,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 241.97,
                    trackingNet: 203.34,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 279.97,
                  display: "279,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 279.97,
                trackingNet: 235.27,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 294.95,
                  display: "294,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 294.95,
                trackingNet: 247.86,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 52.98,
                  display: "52,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 52.98,
                trackingNet: 44.52,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 78,12)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 234.37,
                      display: "234,37",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 234.37,
                    trackingNet: 196.95,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 58.8,
                          display: "58,80",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 58.8,
                        trackingNet: 49.41,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 294.95,
                      display: "294,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 294.95,
                    trackingNet: 247.86,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 16,
          price: 21,
          popularity: 192,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 3 Series Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 3 Series Aut., Audi A4 Aut., Mercedes-Benz C-Class Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LSAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 430/435 Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 430/435 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/612cebc6e1618de2055e1d89f4055241e818166f.jpeg",
            additionalExamples: ["BMW 430/435 Gran Coupé"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 430/435 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/612cebc6e1618de2055e1d89f4055241e818166f.jpeg",
            additionalExamples: ["BMW 430/435 Gran Coupé"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LSAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 231.98,
              display: "231,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 231.98,
            trackingNet: 194.94,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 291.97,
              display: "291,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 291.97,
            trackingNet: 245.35,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 97.32, display: "97,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 97.32,
            trackingNet: 81.78,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 347.97,
              display: "347,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 347.97,
            trackingNet: 292.41,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 115.99,
              display: "115,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 115.99,
            trackingNet: 97.47,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-coupe-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-coupe-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-coupe-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-coupe-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-4-gran-coupe-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-4-gran-coupe-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-4-gran-coupe-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-4-gran-coupe-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-4er-coupe-2d-silber-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-4er-coupe-2d-silber-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-4er-coupe-2d-silber-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,38 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 291.97,
                  display: "291,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 291.97,
                trackingNet: 245.35,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 77,33)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 231.98,
                      display: "231,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 231.98,
                    trackingNet: 194.94,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 58.2,
                          display: "58,20",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 58.2,
                        trackingNet: 48.91,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 291.97,
                      display: "291,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 291.97,
                    trackingNet: 245.35,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 347.97,
                  display: "347,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 347.97,
                trackingNet: 292.41,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 354.97,
                  display: "354,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 354.97,
                trackingNet: 298.29,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 63,
                  display: "63,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 63,
                trackingNet: 52.94,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 94,14)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 282.42,
                      display: "282,42",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 282.42,
                    trackingNet: 237.33,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 70.76,
                          display: "70,76",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 70.76,
                        trackingNet: 59.46,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 354.97,
                      display: "354,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 354.97,
                    trackingNet: 298.29,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 17,
          price: 29,
          popularity: 158,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 430/435 Coupé",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "BMW 430/435 Coupé, BMW 430/435 Gran Coupé oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LDAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 530/540 Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 530/540 Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/982e53f6d710cc015bdb2efa23910720b7dad2c7.jpeg",
            additionalExamples: ["Audi A6 45/50 Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 530/540 Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/982e53f6d710cc015bdb2efa23910720b7dad2c7.jpeg",
            additionalExamples: ["Audi A6 45/50 Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LDAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 218.38,
              display: "218,38",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 218.38,
            trackingNet: 183.51,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 274.97,
              display: "274,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 274.97,
            trackingNet: 231.07,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 91.66, display: "91,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 91.66,
            trackingNet: 77.02,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 326.96,
              display: "326,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 326.96,
            trackingNet: 274.76,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 108.99,
              display: "108,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 108.99,
            trackingNet: 91.59,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-5er-4d-weiss-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-5er-4d-weiss-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-5er-4d-weiss-2017.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,35 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 274.97,
                  display: "274,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 274.97,
                trackingNet: 231.07,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 72,79)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 218.38,
                      display: "218,38",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 218.38,
                    trackingNet: 183.51,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 54.81,
                          display: "54,81",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 54.81,
                        trackingNet: 46.06,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 274.97,
                      display: "274,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 274.97,
                    trackingNet: 231.07,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 326.96,
                  display: "326,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 326.96,
                trackingNet: 274.76,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 333.97,
                  display: "333,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 333.97,
                trackingNet: 280.65,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 59,
                  display: "59,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 59,
                trackingNet: 49.58,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 88,54)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 265.61,
                      display: "265,61",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 265.61,
                    trackingNet: 223.2,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 66.58,
                          display: "66,58",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 66.58,
                        trackingNet: 55.95,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 333.97,
                      display: "333,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 333.97,
                    trackingNet: 280.65,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 18,
          price: 24,
          popularity: 214,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 530/540 Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 530/540 Aut., Audi A6 45/50 Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LWAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 530/540 Touring Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 530/540 Touring Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/bfed60153b357e7d5498666b940f12695c0da278.jpeg",
            additionalExamples: ["Audi A6 45/50 Avant Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW 530/540 Touring Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/bfed60153b357e7d5498666b940f12695c0da278.jpeg",
            additionalExamples: ["Audi A6 45/50 Avant Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        acrissCode: "LWAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 219.98,
              display: "219,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 219.98,
            trackingNet: 184.86,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 276.98,
              display: "276,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 276.98,
            trackingNet: 232.76,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 92.33, display: "92,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 92.33,
            trackingNet: 77.59,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 329.95,
              display: "329,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 329.95,
            trackingNet: 277.27,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 109.98,
              display: "109,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 109.98,
            trackingNet: 92.42,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-touring-estate-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-touring-estate-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-touring-estate-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-touring-estate-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a6-avant-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a6-avant-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a6-avant-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a6-avant-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-5er-kombi-silber-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-5er-kombi-silber-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-5er-kombi-silber-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,35 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 276.98,
                  display: "276,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 276.98,
                trackingNet: 232.76,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 73,33)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 219.98,
                      display: "219,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 219.98,
                    trackingNet: 184.86,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 55.22,
                          display: "55,22",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 55.22,
                        trackingNet: 46.4,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 276.98,
                      display: "276,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 276.98,
                    trackingNet: 232.76,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 329.95,
                  display: "329,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 329.95,
                trackingNet: 277.27,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 335.97,
                  display: "335,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 335.97,
                trackingNet: 282.33,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 58.99,
                  display: "58,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 58.99,
                trackingNet: 49.57,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 89,07)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 267.21,
                      display: "267,21",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 267.21,
                    trackingNet: 224.55,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 66.97,
                          display: "66,97",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 66.97,
                        trackingNet: 56.28,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 335.97,
                      display: "335,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 335.97,
                    trackingNet: 282.33,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 19,
          price: 26,
          popularity: 200,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 530/540 Touring Aut.",
          shortSubline: "oder ähnlich | Premium Kombi",
          longSubline:
            "BMW 530/540 Touring Aut., Audi A6 45/50 Avant Aut. oder ähnlich | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XSAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 630/640 GT oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW 630/640 GT",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/cedb0197b29887c97e8a60f82aa1a59428e27360.jpg",
            additionalExamples: ["Audi A7", "Mercedes-Benz CLS350/400/450"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW 630/640 GT",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/cedb0197b29887c97e8a60f82aa1a59428e27360.jpg",
            additionalExamples: ["Audi A7", "Mercedes-Benz CLS350/400/450"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XSAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 354.47,
              display: "354,47",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 354.47,
            trackingNet: 297.87,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 444.95,
              display: "444,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 444.95,
            trackingNet: 373.91,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 148.32,
              display: "148,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 148.32,
            trackingNet: 124.64,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 530.97,
              display: "530,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 530.97,
            trackingNet: 446.19,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 176.99,
              display: "176,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 176.99,
            trackingNet: 148.73,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a7-sportback-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a7-sportback-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a7-sportback-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a7-sportback-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a7-sportback-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a7-sportback-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a7-sportback-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a7-sportback-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a7-sportback-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a7-sportback-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-6-gran-tursimo-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-6-gran-tursimo-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-6-gran-tursimo-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-6-gran-tursimo-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-6-gran-tursimo-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-6-gran-tursimo-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-6-gran-tursimo-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-6-gran-tursimo-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-6-gran-tursimo-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-6-gran-tursimo-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-cls-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-cls-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-cls-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-cls-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-cls-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-cls-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-cls-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-cls-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-cls-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-cls-mf-06.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-06.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-cls-mf-06.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-cls-mf-06.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-cls-mf-06.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-6er-gt-4d-silber-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-6er-gt-4d-silber-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-6er-gt-4d-silber-2018.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 444.95,
                  display: "444,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 444.95,
                trackingNet: 373.91,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 118,16)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 354.47,
                      display: "354,47",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 354.47,
                    trackingNet: 297.87,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 88.7,
                          display: "88,70",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 88.7,
                        trackingNet: 74.54,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 444.95,
                      display: "444,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 444.95,
                    trackingNet: 373.91,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 530.97,
                  display: "530,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 530.97,
                trackingNet: 446.19,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 541.97,
                  display: "541,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 541.97,
                trackingNet: 455.44,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 97.02,
                  display: "97,02",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 97.02,
                trackingNet: 81.53,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 144,05)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 432.15,
                      display: "432,15",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 432.15,
                    trackingNet: 363.15,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 108.04,
                          display: "108,04",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 108.04,
                        trackingNet: 90.79,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 541.97,
                      display: "541,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 541.97,
                    trackingNet: 455.44,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 20,
          price: 41,
          popularity: 124,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 630/640 GT",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "BMW 630/640 GT, Audi A7, Mercedes-Benz CLS350/400/450 oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XDAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW 7 Series Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW 7 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/50b3c63af0f3c2c925cf007eac4c0539d4245d44.jpg",
            additionalExamples: ["Audi A8 Aut.", "Mercedes-Benz S-Class Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW 7 Series Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/50b3c63af0f3c2c925cf007eac4c0539d4245d44.jpg",
            additionalExamples: ["Audi A8 Aut.", "Mercedes-Benz S-Class Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XDAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 344.86,
              display: "344,86",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 344.86,
            trackingNet: 289.8,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 432.96,
              display: "432,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 432.96,
            trackingNet: 363.83,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 144.32,
              display: "144,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 144.32,
            trackingNet: 121.28,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 515.98,
              display: "515,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 515.98,
            trackingNet: 433.6,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 171.99,
              display: "171,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 171.99,
            trackingNet: 144.53,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a8-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a8-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a8-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a8-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a8-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a8-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a8-4d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-a8-4d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-a8-4d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-a8-4d-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-7er-4d-grau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-7er-4d-grau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-7er-4d-grau-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,40 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 432.96,
                  display: "432,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 432.96,
                trackingNet: 363.83,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 114,95)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 344.86,
                      display: "344,86",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 344.86,
                    trackingNet: 289.8,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 86.31,
                          display: "86,31",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 86.31,
                        trackingNet: 72.53,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 432.96,
                      display: "432,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 432.96,
                    trackingNet: 363.83,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 515.98,
                  display: "515,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 515.98,
                trackingNet: 433.6,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 526.96,
                  display: "526,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 526.96,
                trackingNet: 442.82,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 94,
                  display: "94,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 94,
                trackingNet: 78.99,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 140,04)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 420.12,
                      display: "420,12",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 420.12,
                    trackingNet: 353.04,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 105.05,
                          display: "105,05",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 105.05,
                        trackingNet: 88.28,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 526.96,
                      display: "526,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 526.96,
                    trackingNet: 442.82,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 21,
          price: 38,
          popularity: 176,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW 7 Series Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW 7 Series Aut., Audi A8 Aut., Mercedes-Benz S-Class Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CCAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M135i oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M135i",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/761cbfde16a2330cafcf318979b91061e0195829.jpg",
            additionalExamples: ["BMW X2 M35i"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M135i",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/761cbfde16a2330cafcf318979b91061e0195829.jpg",
            additionalExamples: ["BMW X2 M35i"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "CCAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 284.81,
              display: "284,81",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 284.81,
            trackingNet: 239.34,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 357.95,
              display: "357,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 357.95,
            trackingNet: 300.8,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 119.32,
              display: "119,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 119.32,
            trackingNet: 100.27,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m140-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m140-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m140-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m140-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m140-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m140-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m140-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m140-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m140-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m140-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m140-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m140-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m140-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m140i-5d-schwarz-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m140i-5d-schwarz-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m140i-5d-schwarz-2018.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 357.95,
                  display: "357,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 357.95,
                trackingNet: 300.8,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 94,94)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 284.81,
                      display: "284,81",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 284.81,
                    trackingNet: 239.34,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 71.35,
                          display: "71,35",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 71.35,
                        trackingNet: 59.96,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 357.95,
                      display: "357,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 357.95,
                    trackingNet: 300.8,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 22,
          price: 33,
          popularity: 128,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M135i",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW M135i, BMW X2 M35i oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FCAR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M340 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M340",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/05bf40dd934fe5c5c931775aa307c84d4e17d401.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M340",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/05bf40dd934fe5c5c931775aa307c84d4e17d401.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "FCAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 318.44,
              display: "318,44",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 318.44,
            trackingNet: 267.6,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 399.96,
              display: "399,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 399.96,
            trackingNet: 336.1,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 133.32,
              display: "133,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 133.32,
            trackingNet: 112.03,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M340i-4d-schwarz-2019.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M340i-4d-schwarz-2019.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M340i-4d-schwarz-2019.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M340i-4d-schwarz-2019.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M340i-4d-schwarz-2019.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-M340i-4d-schwarz-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-M340i-4d-schwarz-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-M340i-4d-schwarz-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 399.96,
                  display: "399,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 399.96,
                trackingNet: 336.1,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 106,15)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 318.44,
                      display: "318,44",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 318.44,
                    trackingNet: 267.6,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 79.73,
                          display: "79,73",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 79.73,
                        trackingNet: 67,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 399.96,
                      display: "399,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 399.96,
                    trackingNet: 336.1,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 23,
          price: 35,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M340",
          shortSubline: "garantiertes Modell | Premium Limousine",
          longSubline: "garantiertes Modell | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWAX",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M340 Touring oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M340 Touring",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/4554ded80bbbe77df0c4815a84b04e7d54cad98c.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M340 Touring",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/4554ded80bbbe77df0c4815a84b04e7d54cad98c.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "FWAX",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 318.44,
              display: "318,44",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 318.44,
            trackingNet: 267.6,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 399.96,
              display: "399,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 399.96,
            trackingNet: 336.1,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 133.32,
              display: "133,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 133.32,
            trackingNet: 112.03,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-3-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-3-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-3-4d-2019-mf-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m340i-kombi-schwarz-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m340i-kombi-schwarz-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m340i-kombi-schwarz-2020.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 399.96,
                  display: "399,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 399.96,
                trackingNet: 336.1,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 106,15)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 318.44,
                      display: "318,44",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 318.44,
                    trackingNet: 267.6,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 79.73,
                          display: "79,73",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 79.73,
                        trackingNet: 67,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 399.96,
                      display: "399,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 399.96,
                    trackingNet: 336.1,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 24,
          price: 36,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M340 Touring",
          shortSubline: "garantiertes Modell | Premium Kombi",
          longSubline: "garantiertes Modell | Premium Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LZAR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M4 Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M4 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f1484a89d4d23107c815be85064183e8027e09ea.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M4 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f1484a89d4d23107c815be85064183e8027e09ea.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "LZAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 396.91,
              display: "396,91",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 396.91,
            trackingNet: 333.54,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 497.97,
              display: "497,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 497.97,
            trackingNet: 418.46,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 165.99,
              display: "165,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 165.99,
            trackingNet: 139.49,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M4-coupe-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M4-coupe-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M4-coupe-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M4-coupe-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M4-coupe-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M4-coupe-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M4-coupe-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M4-coupe-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M4-coupe-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M4-coupe-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m4-coupe-rot-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m4-coupe-rot-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m4-coupe-rot-2017.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 497.97,
                  display: "497,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 497.97,
                trackingNet: 418.46,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 132,30)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 396.91,
                      display: "396,91",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 396.91,
                    trackingNet: 333.54,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 99.27,
                          display: "99,27",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 99.27,
                        trackingNet: 83.42,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 497.97,
                      display: "497,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 497.97,
                    trackingNet: 418.46,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 25,
          price: 47,
          popularity: 110,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M4 Coupé",
          shortSubline: "garantiertes Modell | Premium Coupé",
          longSubline: "garantiertes Modell | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XDAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M5 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M5",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/779388a947e35ef9f84089814043459b6fe2243b.jpg",
            additionalExamples: ["Mercedes-AMG E53"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M5",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/779388a947e35ef9f84089814043459b6fe2243b.jpg",
            additionalExamples: ["Mercedes-AMG E53"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "XDAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 553.85,
              display: "553,85",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 553.85,
            trackingNet: 465.42,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 693.98,
              display: "693,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 693.98,
            trackingNet: 583.18,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 231.33,
              display: "231,33",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 231.33,
            trackingNet: 194.39,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-amg-e63-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-amg-e63-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-amg-e63-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-amg-e63-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-amg-e63-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-amg-e63-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-amg-e63-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-amg-e63-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-amg-e63-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-amg-e63-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-amg-e63-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-amg-e63-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-amg-e63-sedan-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m5-4d-grau-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m5-4d-grau-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m5-4d-grau-2018.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 693.98,
                  display: "693,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 693.98,
                trackingNet: 583.18,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 184,62)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 553.85,
                      display: "553,85",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 553.85,
                    trackingNet: 465.42,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 138.35,
                          display: "138,35",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 138.35,
                        trackingNet: 116.26,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 693.98,
                      display: "693,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 693.98,
                    trackingNet: 583.18,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 26,
          price: 54,
          popularity: 89,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M5",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "BMW M5, Mercedes-AMG E53 oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LPAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M550 Sedan oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M550 Sedan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/cb71105a2e98b899afa774f979f04f27912cef9c.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M550 Sedan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/cb71105a2e98b899afa774f979f04f27912cef9c.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LPAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 372.1,
              display: "372,10",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 372.1,
            trackingNet: 312.69,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 466.98,
              display: "466,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 466.98,
            trackingNet: 392.42,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 155.66,
              display: "155,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 155.66,
            trackingNet: 130.81,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m5-lx-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m5-lx-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m5-lx-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m5-lx-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m5-lx-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m5-lx-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m5-lx-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m5-lx-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m5-lx-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m5-lx-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M5-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M5-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M5-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M5-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M5-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M5-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M5-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M5-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M5-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M5-mf-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m550d-4d-blau-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m550d-4d-blau-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m550d-4d-blau-2018.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 466.98,
                  display: "466,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 466.98,
                trackingNet: 392.42,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 124,03)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 372.1,
                      display: "372,10",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 372.1,
                    trackingNet: 312.69,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 93.09,
                          display: "93,09",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 93.09,
                        trackingNet: 78.23,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 466.98,
                      display: "466,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 466.98,
                    trackingNet: 392.42,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 27,
          price: 42,
          popularity: 91,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M550 Sedan",
          shortSubline: "garantiertes Modell | Premium Limousine",
          longSubline: "garantiertes Modell | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XXAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M8 Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 2,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M8 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a6b41a93d015eb77186aba9e30f1f9b4985b83ef.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 0 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 2,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M8 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a6b41a93d015eb77186aba9e30f1f9b4985b83ef.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 0 },
        },
        acrissCode: "XXAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 951.76,
              display: "951,76",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 951.76,
            trackingNet: 799.8,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 1190.98,
              display: "1.190,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 1190.98,
            trackingNet: 1000.82,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 396.99,
              display: "396,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 396.99,
            trackingNet: 333.61,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-05.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-m8-coupe-2d-grau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-m8-coupe-2d-grau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-m8-coupe-2d-grau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 1190.98,
                  display: "1.190,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 1190.98,
                trackingNet: 1000.82,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 317,25)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 951.76,
                      display: "951,76",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 951.76,
                    trackingNet: 799.8,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 237.43,
                          display: "237,43",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 237.43,
                        trackingNet: 199.52,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 1190.98,
                      display: "1.190,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 1190.98,
                    trackingNet: 1000.82,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 28,
          price: 62,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M8 Coupé",
          shortSubline: "garantiertes Modell | Premium Coupé",
          longSubline: "garantiertes Modell | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XXAX",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW M850 Coupé oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M850 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/0977bb735f14329073e18a5e19432865ee368254.jpeg",
            additionalExamples: ["Mercedes-Benz S560 Coupé"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Coupe",
          bodyStyle: "Coupé",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW M850 Coupé",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/0977bb735f14329073e18a5e19432865ee368254.jpeg",
            additionalExamples: ["Mercedes-Benz S560 Coupé"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XXAX",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 677.12,
              display: "677,12",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 677.12,
            trackingNet: 569.01,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 847.95,
              display: "847,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 847.95,
            trackingNet: 712.56,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 282.65,
              display: "282,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 282.65,
            trackingNet: 237.52,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-M850i-coupe-2019-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-M850i-coupe-2019-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-M850i-coupe-2019-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-M850i-coupe-2019-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-8er-grand-coupe-4d-weiss-2020.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-8er-grand-coupe-4d-weiss-2020.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-8er-grand-coupe-4d-weiss-2020.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-8er-grand-coupe-4d-weiss-2020.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-8er-grand-coupe-4d-weiss-2020.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-850i-coupe-2d-blau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-850i-coupe-2d-blau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-850i-coupe-2d-blau-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 847.95,
                  display: "847,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 847.95,
                trackingNet: 712.56,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 225,71)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 677.12,
                      display: "677,12",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 677.12,
                    trackingNet: 569.01,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 169.04,
                          display: "169,04",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 169.04,
                        trackingNet: 142.05,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 847.95,
                      display: "847,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 847.95,
                    trackingNet: 712.56,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 29,
          price: 59,
          popularity: 126,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW M850 Coupé",
          shortSubline: "oder ähnlich | Premium Coupé",
          longSubline:
            "BMW M850 Coupé, Mercedes-Benz S560 Coupé oder ähnlich | Premium Coupé",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SFMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW X1 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW X1",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9f44682ad3af81e513bbd2d0ce171aa20d12cf2c.jpeg",
            additionalExamples: ["Audi Q3"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "BMW X1",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9f44682ad3af81e513bbd2d0ce171aa20d12cf2c.jpeg",
            additionalExamples: ["Audi Q3"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "SFMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 176.72,
              display: "176,72",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 176.72,
            trackingNet: 148.5,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 222.95,
              display: "222,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 222.95,
            trackingNet: 187.35,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 74.32, display: "74,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 74.32,
            trackingNet: 62.45,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 252.95,
              display: "252,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 252.95,
            trackingNet: 212.56,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 84.32, display: "84,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 84.32,
            trackingNet: 70.85,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x1-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x1-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x1-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x1-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x1-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x1-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x1-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x1-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x1-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x1-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q3-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q3-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q3-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q3-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q3-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q3-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q3-SUV-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q3-SUV-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q3-SUV-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q3-SUV-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x1-5d-weiss-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x1-5d-weiss-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x1-5d-weiss-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,31 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 222.95,
                  display: "222,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 222.95,
                trackingNet: 187.35,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 58,91)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 176.72,
                      display: "176,72",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 176.72,
                    trackingNet: 148.5,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 44.45,
                          display: "44,45",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 44.45,
                        trackingNet: 37.35,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 222.95,
                      display: "222,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 222.95,
                    trackingNet: 187.35,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 252.95,
                  display: "252,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 252.95,
                trackingNet: 212.56,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 271.99,
                  display: "271,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 271.99,
                trackingNet: 228.56,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 49.04,
                  display: "49,04",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 49.04,
                trackingNet: 41.21,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 72,00)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 215.99,
                      display: "215,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 215.99,
                    trackingNet: 181.5,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 54.22,
                          display: "54,22",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 54.22,
                        trackingNet: 45.56,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 271.99,
                      display: "271,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 271.99,
                    trackingNet: 228.56,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 30,
          price: 18,
          popularity: 178,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X1",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline: "BMW X1, Audi Q3 oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-PFMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW X3 20 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3 20",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f4260a67fb63f5e3181b091c1cf98b3ce152c47c.jpeg",
            additionalExamples: ["Mercedes-Benz GLC"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3 20",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f4260a67fb63f5e3181b091c1cf98b3ce152c47c.jpeg",
            additionalExamples: ["Mercedes-Benz GLC"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        acrissCode: "PFMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 225.59,
              display: "225,59",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 225.59,
            trackingNet: 189.57,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 283.98,
              display: "283,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 283.98,
            trackingNet: 238.64,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 94.66, display: "94,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 94.66,
            trackingNet: 79.55,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 328.98,
              display: "328,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 328.98,
            trackingNet: 276.45,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 109.66,
              display: "109,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 109.66,
            trackingNet: 92.15,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-glc-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-glc-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-glc-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-glc-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-glc-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-glc-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-glc-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-glc-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-glc-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-glc-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-glc-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-glc-suv-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-glc-suv-4d-2020-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-glc-suv-4d-2020-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-glc-suv-4d-2020-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-glc-suv-4d-2020-mf-05.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x3-5d-grau-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x3-5d-grau-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x3-5d-grau-2018.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "Allradantrieb garantiert" },
          { title: "900 Kilometer, 0,37 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 283.98,
                  display: "283,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 283.98,
                trackingNet: 238.64,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 75,20)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 225.59,
                      display: "225,59",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 225.59,
                    trackingNet: 189.57,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 56.61,
                          display: "56,61",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 56.61,
                        trackingNet: 47.57,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 283.98,
                      display: "283,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 283.98,
                    trackingNet: 238.64,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 328.98,
                  display: "328,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 328.98,
                trackingNet: 276.45,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 345.96,
                  display: "345,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 345.96,
                trackingNet: 290.72,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 61.98,
                  display: "61,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 61.98,
                trackingNet: 52.08,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 91,74)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 275.21,
                      display: "275,21",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 275.21,
                    trackingNet: 231.27,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 68.96,
                          display: "68,96",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 68.96,
                        trackingNet: 57.95,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 345.96,
                      display: "345,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 345.96,
                    trackingNet: 290.72,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 31,
          price: 28,
          popularity: 164,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X3 20",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline:
            "BMW X3 20, Mercedes-Benz GLC oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LFAJ",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW X3 M40 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3 M40",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d0b75cba387224e4e2b92af26b82b89bdee9c5f9.jpeg",
            additionalExamples: ["BMW X4 M40"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3 M40",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d0b75cba387224e4e2b92af26b82b89bdee9c5f9.jpeg",
            additionalExamples: ["BMW X4 M40"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LFAJ",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 392.09,
              display: "392,09",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 392.09,
            trackingNet: 329.49,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 491.95,
              display: "491,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 491.95,
            trackingNet: 413.4,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 163.98,
              display: "163,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 163.98,
            trackingNet: 137.8,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x3-m40i-5d-schwarz-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x3-m40i-5d-schwarz-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x3-m40i-5d-schwarz-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,74 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 491.95,
                  display: "491,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 491.95,
                trackingNet: 413.4,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 130,70)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 392.09,
                      display: "392,09",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 392.09,
                    trackingNet: 329.49,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 98.07,
                          display: "98,07",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 98.07,
                        trackingNet: 82.41,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 491.95,
                      display: "491,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 491.95,
                    trackingNet: 413.4,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 32,
          price: 46,
          popularity: 67,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X3 M40",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline: "BMW X3 M40, BMW X4 M40 oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LFAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X3M oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d0b75cba387224e4e2b92af26b82b89bdee9c5f9.jpeg",
            additionalExamples: ["Mercedes-AMG GLC63"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: false,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X3M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d0b75cba387224e4e2b92af26b82b89bdee9c5f9.jpeg",
            additionalExamples: ["Mercedes-AMG GLC63"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "LFAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 514.62,
              display: "514,62",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 514.62,
            trackingNet: 432.45,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 644.98,
              display: "644,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 644.98,
            trackingNet: 542,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 214.99,
              display: "214,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 214.99,
            trackingNet: 180.67,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-M40i-4d-suv-2019-mf.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-4d-suv-2019-mf.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-4d-suv-2019-mf.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-M40i-4d-suv-2019-mf.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-M40i-4d-suv-2019-mf.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-M40i-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-M40i-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-M40i-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-M40i-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-M40i-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-M40i-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-M40i-SUV-2019-mf-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x3-m40i-5d-schwarz-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x3-m40i-5d-schwarz-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x3-m40i-5d-schwarz-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 644.98,
                  display: "644,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 644.98,
                trackingNet: 542,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 171,54)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 514.62,
                      display: "514,62",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 514.62,
                    trackingNet: 432.45,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 128.58,
                          display: "128,58",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 128.58,
                        trackingNet: 108.05,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 644.98,
                      display: "644,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 644.98,
                    trackingNet: 542,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 33,
          price: 51,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X3M",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline: "BMW X3M, Mercedes-AMG GLC63 oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-LFAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW X4 30 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X4 30",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/7eef559ac4f65d190a800e6905a1fe69fdc04b46.jpeg",
            additionalExamples: ["BMW X3 30", "Jaguar F-Pace 3.0"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X4 30",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/7eef559ac4f65d190a800e6905a1fe69fdc04b46.jpeg",
            additionalExamples: ["BMW X3 30", "Jaguar F-Pace 3.0"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        acrissCode: "LFAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 241.58,
              display: "241,58",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 241.58,
            trackingNet: 203.01,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 303.96,
              display: "303,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 303.96,
            trackingNet: 255.43,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 101.32,
              display: "101,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 101.32,
            trackingNet: 85.14,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 361.97,
              display: "361,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 361.97,
            trackingNet: 304.18,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 120.66,
              display: "120,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 120.66,
            trackingNet: 101.39,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-suv-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-suv-4d-2020-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-suv-4d-2020-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-suv-4d-2020-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-suv-4d-2020-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x3-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x3-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x3-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x3-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/jaguar-f-pace-suv-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/jaguar-f-pace-suv-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/jaguar-f-pace-suv-4d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/jaguar-f-pace-suv-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/jaguar-f-pace-suv-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/jaguar-f-pace-suv-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/jaguar-f-pace-suv-4d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/jaguar-f-pace-suv-4d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/jaguar-f-pace-suv-4d-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/jaguar-f-pace-suv-4d-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/jaguar-f-pace-suv-4d-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/jaguar-f-pace-suv-4d-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/jaguar-f-pace-suv-4d-2019-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/jaguar-f-pace-suv-4d-2019-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/jaguar-f-pace-suv-4d-2019-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/jaguar-f-pace-suv-4d-2019-mf-05.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x4-m40i-5d-schwarz-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x4-m40i-5d-schwarz-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x4-m40i-5d-schwarz-2019.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Allradantrieb garantiert" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,38 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 303.96,
                  display: "303,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 303.96,
                trackingNet: 255.43,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 80,53)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 241.58,
                      display: "241,58",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 241.58,
                    trackingNet: 203.01,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 60.59,
                          display: "60,59",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 60.59,
                        trackingNet: 50.92,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 303.96,
                      display: "303,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 303.96,
                    trackingNet: 255.43,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 361.97,
                  display: "361,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 361.97,
                trackingNet: 304.18,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 369.95,
                  display: "369,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 369.95,
                trackingNet: 310.88,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 65.99,
                  display: "65,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 65.99,
                trackingNet: 55.45,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 98,14)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 294.42,
                      display: "294,42",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 294.42,
                    trackingNet: 247.41,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 73.74,
                          display: "73,74",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 73.74,
                        trackingNet: 61.97,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 369.95,
                      display: "369,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 369.95,
                    trackingNet: 310.88,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 34,
          price: 30,
          popularity: 166,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X4 30",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline:
            "BMW X4 30, BMW X3 30, Jaguar F-Pace 3.0 oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-PXBR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X4M oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X4M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/7eef559ac4f65d190a800e6905a1fe69fdc04b46.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X4M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/7eef559ac4f65d190a800e6905a1fe69fdc04b46.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "PXBR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 514.62,
              display: "514,62",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 514.62,
            trackingNet: 432.45,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 644.98,
              display: "644,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 644.98,
            trackingNet: 542,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 214.99,
              display: "214,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 214.99,
            trackingNet: 180.67,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x4-M40i-SUV-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x4-M40i-SUV-2019-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x4-m40i-5d-schwarz-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x4-m40i-5d-schwarz-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x4-m40i-5d-schwarz-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 644.98,
                  display: "644,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 644.98,
                trackingNet: 542,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 171,54)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 514.62,
                      display: "514,62",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 514.62,
                    trackingNet: 432.45,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 128.58,
                          display: "128,58",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 128.58,
                        trackingNet: 108.05,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 644.98,
                      display: "644,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 644.98,
                    trackingNet: 542,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 35,
          price: 52,
          popularity: 0,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X4M",
          shortSubline: "garantiertes Modell | Premium SUV",
          longSubline: "garantiertes Modell | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XFAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "BMW X5 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/224fe6c917333fcf32929c65a9e558a834e96746.jpeg",
            additionalExamples: ["Mercedes-Benz GLE", "VW Touareg"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 4, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/224fe6c917333fcf32929c65a9e558a834e96746.jpeg",
            additionalExamples: ["Mercedes-Benz GLE", "VW Touareg"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 4, suitcases: 4 },
        },
        acrissCode: "XFAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 348.08,
              display: "348,08",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 348.08,
            trackingNet: 292.5,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 436.97,
              display: "436,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 436.97,
            trackingNet: 367.2,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 145.66,
              display: "145,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 145.66,
            trackingNet: 122.4,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 520.97,
              display: "520,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 520.97,
            trackingNet: 437.79,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 173.66,
              display: "173,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 173.66,
            trackingNet: 145.93,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-suv-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gle-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gle-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gle-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gle-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gle-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gle-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gle-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gle-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gle-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gle-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gle-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gle-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gle-suv-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touareg-SUV-2019-dirico-06.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-06.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touareg-SUV-2019-dirico-06.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touareg-SUV-2019-dirico-06.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touareg-SUV-2019-dirico-06.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x5-5d-weiss-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x5-5d-weiss-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x5-5d-weiss-2018.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "Allradantrieb garantiert" },
          { title: "900 Kilometer, 0,42 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 436.97,
                  display: "436,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 436.97,
                trackingNet: 367.2,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 116,03)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 348.08,
                      display: "348,08",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 348.08,
                    trackingNet: 292.5,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 87.11,
                          display: "87,11",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 87.11,
                        trackingNet: 73.2,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 436.97,
                      display: "436,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 436.97,
                    trackingNet: 367.2,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 520.97,
                  display: "520,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 520.97,
                trackingNet: 437.79,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 531.99,
                  display: "531,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 531.99,
                trackingNet: 447.05,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 95.02,
                  display: "95,02",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 95.02,
                trackingNet: 79.85,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 141,38)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 424.15,
                      display: "424,15",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 424.15,
                    trackingNet: 356.43,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 106.05,
                          display: "106,05",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 106.05,
                        trackingNet: 89.12,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 531.99,
                      display: "531,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 531.99,
                    trackingNet: 447.05,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 36,
          price: 39,
          popularity: 162,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X5",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline:
            "BMW X5, Mercedes-Benz GLE, VW Touareg oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XZAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X5M oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ceed293b1c257ef2449a8b1a406e57cba03b9583.jpg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5M",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ceed293b1c257ef2449a8b1a406e57cba03b9583.jpg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        acrissCode: "XZAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 624.29,
              display: "624,29",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 624.29,
            trackingNet: 524.61,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 781.96,
              display: "781,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 781.96,
            trackingNet: 657.11,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 260.65,
              display: "260,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 260.65,
            trackingNet: 219.04,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-M50d-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-M50d-SUV-2019-mf-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x5-m40i-5d-blau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x5-m40i-5d-blau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x5-m40i-5d-blau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 781.96,
                  display: "781,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 781.96,
                trackingNet: 657.11,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 208,10)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 624.29,
                      display: "624,29",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 624.29,
                    trackingNet: 524.61,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 155.89,
                          display: "155,89",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 155.89,
                        trackingNet: 131,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 781.96,
                      display: "781,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 781.96,
                    trackingNet: 657.11,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 37,
          price: 57,
          popularity: 71,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X5M",
          shortSubline: "garantiertes Modell | Premium SUV",
          longSubline: "garantiertes Modell | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XJAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X5M 50D oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5M 50D",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ceed293b1c257ef2449a8b1a406e57cba03b9583.jpg",
            additionalExamples: ["BMW X6M 50D"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X5M 50D",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/ceed293b1c257ef2449a8b1a406e57cba03b9583.jpg",
            additionalExamples: ["BMW X6M 50D"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        acrissCode: "XJAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 502.58,
              display: "502,58",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 502.58,
            trackingNet: 422.34,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 629.95,
              display: "629,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 629.95,
            trackingNet: 529.37,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 209.98,
              display: "209,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 209.98,
            trackingNet: 176.46,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-M50d-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-M50d-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x5-M50d-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x5-M50d-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x6m-lx-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-lx-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-lx-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x6m-lx-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x6m-lx-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x6m-lx-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-lx-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-lx-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x6m-lx-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x6m-lx-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x6m-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x6m-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x6m-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x6m-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x6m-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x6m-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x6m-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x6m-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x6m-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x6m-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x5-m40i-5d-blau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x5-m40i-5d-blau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x5-m40i-5d-blau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 629.95,
                  display: "629,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 629.95,
                trackingNet: 529.37,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 167,53)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 502.58,
                      display: "502,58",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 502.58,
                    trackingNet: 422.34,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 125.58,
                          display: "125,58",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 125.58,
                        trackingNet: 105.53,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 629.95,
                      display: "629,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 629.95,
                    trackingNet: 529.37,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 38,
          price: 50,
          popularity: 84,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X5M 50D",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline: "BMW X5M 50D, BMW X6M 50D oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XFAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X7 30d oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X7 30d",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8f277069704aaf3a5c6b6c18313b486ca211430d.jpg",
            additionalExamples: ["Audi Q7 7 Seater"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X7 30d",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8f277069704aaf3a5c6b6c18313b486ca211430d.jpg",
            additionalExamples: ["Audi Q7 7 Seater"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        acrissCode: "XFAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 574.66,
              display: "574,66",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 574.66,
            trackingNet: 482.91,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 719.97,
              display: "719,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 719.97,
            trackingNet: 605.02,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 239.99,
              display: "239,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 239.99,
            trackingNet: 201.67,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gls-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gls-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gls-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gls-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gls-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gls-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gls-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gls-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gls-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-gls-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-gls-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-gls-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-gls-suv-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-SUV-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-SUV-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-SUV-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-SUV-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-SUV-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-SUV-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-SUV-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q7-suv-4d-2021-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q7-suv-4d-2021-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q7-suv-4d-2021-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q7-suv-4d-2021-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q7-suv-4d-2021-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q7-suv-4d-2021-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q7-suv-4d-2021-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q7-suv-4d-2021-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q7-suv-4d-2021-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/audi-q7-suv-4d-2021-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/audi-q7-suv-4d-2021-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/audi-q7-suv-4d-2021-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/audi-q7-suv-4d-2021-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x7-5d-grau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x7-5d-grau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x7-5d-grau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 719.97,
                  display: "719,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 719.97,
                trackingNet: 605.02,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 191,55)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 574.66,
                      display: "574,66",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 574.66,
                    trackingNet: 482.91,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 143.53,
                          display: "143,53",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 143.53,
                        trackingNet: 120.61,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 719.97,
                      display: "719,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 719.97,
                    trackingNet: 605.02,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 39,
          price: 55,
          popularity: 104,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X7 30d",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline:
            "BMW X7 30d, Audi Q7 7 Seater oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XJAR",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "BMW X7 M50 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 6,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X7 M50",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8fdf2597a2fa6af7952d8e0d4cb708e93dc87ac4.jpg",
            additionalExamples: ["Audi SQ7"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 6,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "BMW X7 M50",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8fdf2597a2fa6af7952d8e0d4cb708e93dc87ac4.jpg",
            additionalExamples: ["Audi SQ7"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 4, suitcases: 4 },
        },
        acrissCode: "XJAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 637.1,
              display: "637,10",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 637.1,
            trackingNet: 535.38,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 797.97,
              display: "797,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 797.97,
            trackingNet: 670.56,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 265.99,
              display: "265,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 265.99,
            trackingNet: 223.52,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-M50d-SUV-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-M50d-SUV-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-M50d-SUV-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-M50d-SUV-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-M50d-SUV-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-M50d-SUV-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-M50d-SUV-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-M50d-SUV-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-M50d-SUV-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-x7-M50d-SUV-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-x7-M50d-SUV-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-x7-M50d-SUV-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-x7-M50d-SUV-2019-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x7-m50d-5d-white-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x7-m50d-5d-white-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/bmw-x7-m50d-5d-white-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 797.97,
                  display: "797,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 797.97,
                trackingNet: 670.56,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 212,37)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 637.1,
                      display: "637,10",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 637.1,
                    trackingNet: 535.38,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 159.08,
                          display: "159,08",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 159.08,
                        trackingNet: 133.68,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 797.97,
                      display: "797,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 797.97,
                    trackingNet: 670.56,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 40,
          price: 58,
          popularity: 82,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "BMW X7 M50",
          shortSubline: "oder ähnlich | Premium SUV",
          longSubline: "BMW X7 M50, Audi SQ7 oder ähnlich | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-IWMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Ford Mondeo Estate oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford Mondeo Estate",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9b0dae408054ebc8393cab5cd58db91bc663ffef.jpeg",
            additionalExamples: ["VW Passat Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford Mondeo Estate",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9b0dae408054ebc8393cab5cd58db91bc663ffef.jpeg",
            additionalExamples: ["VW Passat Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 3 },
        },
        acrissCode: "IWMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 159.9,
              display: "159,90",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 159.9,
            trackingNet: 134.37,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 201.94,
              display: "201,94",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 201.94,
            trackingNet: 169.7,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 67.31, display: "67,31", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 67.31,
            trackingNet: 56.57,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 228.96,
              display: "228,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 228.96,
            trackingNet: 192.4,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 76.32, display: "76,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 76.32,
            trackingNet: 64.13,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-mondeo-turnier-stationwagon-5d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-mondeo-turnier-stationwagon-5d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-mondeo-turnier-stationwagon-5d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-mondeo-turnier-stationwagon-5d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-mondeo-turnier-stationwagon-5d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-mondeo-turnier-stationwagon-5d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-mondeo-turnier-stationwagon-5d-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-passat-variant-stationwagon-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-variant-stationwagon-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-passat-variant-stationwagon-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-passat-variant-stationwagon-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-passat-variant-stationwagon-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/ford-mondeo-turnier-estate-blu-2020-60.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/ford-mondeo-turnier-estate-blu-2020-60.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/ford-mondeo-turnier-estate-blu-2020-60.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 201.94,
                  display: "201,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 201.94,
                trackingNet: 169.7,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 53,30)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 159.9,
                      display: "159,90",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 159.9,
                    trackingNet: 134.37,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 40.26,
                          display: "40,26",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 40.26,
                        trackingNet: 33.83,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 201.94,
                      display: "201,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 201.94,
                    trackingNet: 169.7,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 228.96,
                  display: "228,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 228.96,
                trackingNet: 192.4,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 245.95,
                  display: "245,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 245.95,
                trackingNet: 206.68,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 44.01,
                  display: "44,01",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 44.01,
                trackingNet: 36.98,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 65,05)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 195.14,
                      display: "195,14",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 195.14,
                    trackingNet: 163.98,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 49.03,
                          display: "49,03",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 49.03,
                        trackingNet: 41.2,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 245.95,
                      display: "245,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 245.95,
                    trackingNet: 206.68,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 41,
          price: 11,
          popularity: 222,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Ford Mondeo Estate",
          shortSubline: "oder ähnlich | Kombi",
          longSubline:
            "Ford Mondeo Estate, VW Passat Estate oder ähnlich | Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CCMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Ford Puma oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford Puma",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8e1f350077352d59199751752aeec8fe7a7b8deb.jpeg",
            additionalExamples: ["Opel Crossland X", "Ford Ecosport"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford Puma",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/8e1f350077352d59199751752aeec8fe7a7b8deb.jpeg",
            additionalExamples: ["Opel Crossland X", "Ford Ecosport"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "CCMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 131.91,
              display: "131,91",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 131.91,
            trackingNet: 110.85,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 166.98,
              display: "166,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 166.98,
            trackingNet: 140.32,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 55.66, display: "55,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 55.66,
            trackingNet: 46.77,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 190.97,
              display: "190,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 190.97,
            trackingNet: 160.48,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 63.66, display: "63,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 63.66,
            trackingNet: 53.49,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-puma-suv-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-puma-suv-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-puma-suv-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-puma-suv-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-puma-suv-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-puma-suv-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-puma-suv-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-puma-suv-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-puma-suv-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-puma-suv-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/opel-crossland-x-5d-weiss-2018.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/opel-crossland-x-5d-weiss-2018.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/opel-crossland-x-5d-weiss-2018.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/opel-crossland-x-5d-weiss-2018.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/opel-crossland-x-5d-weiss-2018.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-ecosport-suv-5d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-ecosport-suv-5d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-ecosport-suv-5d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-ecosport-suv-5d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-ecosport-suv-5d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-ecosport-suv-5d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-ecosport-suv-5d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-ecosport-suv-5d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-ecosport-suv-5d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-ecosport-suv-5d-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/ford-puma-5d-weiss-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/ford-puma-5d-weiss-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/ford-puma-5d-weiss-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 166.98,
                  display: "166,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 166.98,
                trackingNet: 140.32,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 43,97)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 131.91,
                      display: "131,91",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 131.91,
                    trackingNet: 110.85,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 33.28,
                          display: "33,28",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 33.28,
                        trackingNet: 27.97,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 166.98,
                      display: "166,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 166.98,
                    trackingNet: 140.32,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 190.97,
                  display: "190,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 190.97,
                trackingNet: 160.48,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 202.97,
                  display: "202,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 202.97,
                trackingNet: 170.56,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 35.99,
                  display: "35,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 35.99,
                trackingNet: 30.24,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 53,57)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 160.72,
                      display: "160,72",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 160.72,
                    trackingNet: 135.06,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 40.46,
                          display: "40,46",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 40.46,
                        trackingNet: 34,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 202.97,
                      display: "202,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 202.97,
                    trackingNet: 170.56,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 42,
          price: 2,
          popularity: 218,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Ford Puma",
          shortSubline: "oder ähnlich | Limousine",
          longSubline:
            "Ford Puma, Opel Crossland X, Ford Ecosport oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SWMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Ford S-Max Turnier oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford S-Max Turnier",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/12ee64614ab73bb1bf9967c51f987d82e89a4e77.jpeg",
            additionalExamples: ["Skoda Superb Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Ford S-Max Turnier",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/12ee64614ab73bb1bf9967c51f987d82e89a4e77.jpeg",
            additionalExamples: ["Skoda Superb Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 3, suitcases: 3 },
        },
        acrissCode: "SWMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 171.11,
              display: "171,11",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 171.11,
            trackingNet: 143.79,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 215.94,
              display: "215,94",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 215.94,
            trackingNet: 181.46,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 71.98, display: "71,98", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 71.98,
            trackingNet: 60.49,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 244.97,
              display: "244,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 244.97,
            trackingNet: 205.86,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 81.66, display: "81,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 81.66,
            trackingNet: 68.62,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-s-max-van-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-s-max-van-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-s-max-van-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-s-max-van-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-s-max-van-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-s-max-van-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-s-max-van-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-s-max-van-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-s-max-van-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-s-max-van-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-s-max-van-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-s-max-van-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-s-max-van-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-superb-combi-stationwagon-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-superb-combi-stationwagon-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-superb-combi-stationwagon-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-superb-combi-stationwagon-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-superb-combi-stationwagon-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/ford-s-max-van-4d-white-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/ford-s-max-van-4d-white-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/ford-s-max-van-4d-white-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 215.94,
                  display: "215,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 215.94,
                trackingNet: 181.46,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 57,04)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 171.11,
                      display: "171,11",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 171.11,
                    trackingNet: 143.79,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 43.04,
                          display: "43,04",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 43.04,
                        trackingNet: 36.17,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 215.94,
                      display: "215,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 215.94,
                    trackingNet: 181.46,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 244.97,
                  display: "244,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 244.97,
                trackingNet: 205.86,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 261.95,
                  display: "261,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 261.95,
                trackingNet: 220.13,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 46.01,
                  display: "46,01",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 46.01,
                trackingNet: 38.67,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 69,32)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 207.95,
                      display: "207,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 207.95,
                    trackingNet: 174.75,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 52.22,
                          display: "52,22",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 52.22,
                        trackingNet: 43.88,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 261.95,
                      display: "261,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 261.95,
                    trackingNet: 220.13,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 43,
          price: 15,
          popularity: 170,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Ford S-Max Turnier",
          shortSubline: "oder ähnlich | Kombi",
          longSubline:
            "Ford S-Max Turnier, Skoda Superb Estate oder ähnlich | Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CCCC",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Lucky Dip Car oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Lucky Dip Car",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e1e538fba31d34825135e5b3cd82ce8e5e0c4c98.jpg",
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Lucky Dip Car",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e1e538fba31d34825135e5b3cd82ce8e5e0c4c98.jpg",
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        acrissCode: "CCCC",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 137.48,
              display: "137,48",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 137.48,
            trackingNet: 115.53,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 173.94,
              display: "173,94",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 173.94,
            trackingNet: 146.17,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 57.98, display: "57,98", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 57.98,
            trackingNet: 48.72,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 196.95,
              display: "196,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 196.95,
            trackingNet: 165.5,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 65.65, display: "65,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 65.65,
            trackingNet: 55.17,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/gluecksauto.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/gluecksauto.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/gluecksauto.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 173.94,
                  display: "173,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 173.94,
                trackingNet: 146.17,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 45,83)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 137.48,
                      display: "137,48",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 137.48,
                    trackingNet: 115.53,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 34.68,
                          display: "34,68",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 34.68,
                        trackingNet: 29.14,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 173.94,
                      display: "173,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 173.94,
                    trackingNet: 146.17,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 196.95,
                  display: "196,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 196.95,
                trackingNet: 165.5,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 211.97,
                  display: "211,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 211.97,
                trackingNet: 178.13,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 38.03,
                  display: "38,03",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 38.03,
                trackingNet: 31.96,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 55,98)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 167.93,
                      display: "167,93",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 167.93,
                    trackingNet: 141.12,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 42.26,
                          display: "42,26",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 42.26,
                        trackingNet: 35.51,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 211.97,
                      display: "211,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 211.97,
                    trackingNet: 178.13,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 44,
          price: 4,
          popularity: 224,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Lucky Dip Car",
          shortSubline: "oder ähnlich | Limousine",
          longSubline: "Lucky Dip Car oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XPAL",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Mercedes-AMG S63 L oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-AMG S63 L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/fd78633d63cf10c972d5c6b5028e6cad5df720ea.jpg",
            additionalExamples: ["BMW M760L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-AMG S63 L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/fd78633d63cf10c972d5c6b5028e6cad5df720ea.jpg",
            additionalExamples: ["BMW M760L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XPAL",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 722.78,
              display: "722,78",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 722.78,
            trackingNet: 607.38,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 904.98,
              display: "904,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 904.98,
            trackingNet: 760.49,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 301.66,
              display: "301,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 301.66,
            trackingNet: 253.5,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m7-long-lx-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m7-long-lx-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m7-long-lx-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m7-long-lx-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m7-long-lx-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-m7-long-lx-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m7-long-lx-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-m7-long-lx-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-m7-long-lx-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-m7-long-lx-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-s63-4d-weiss-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-s63-4d-weiss-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-s63-4d-weiss-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 904.98,
                  display: "904,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 904.98,
                trackingNet: 760.49,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 240,93)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 722.78,
                      display: "722,78",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 722.78,
                    trackingNet: 607.38,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 180.42,
                          display: "180,42",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 180.42,
                        trackingNet: 151.61,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 904.98,
                      display: "904,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 904.98,
                    trackingNet: 760.49,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 45,
          price: 60,
          popularity: 76,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-AMG S63 L",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "Mercedes-AMG S63 L, BMW M760L oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-PDAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Mercedes-Benz E200/220 Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Mercedes-Benz E200/220 Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5b879ccd050c13b169ad9dd16abce22566bdf65c.jpeg",
            additionalExamples: ["BMW 520 Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Mercedes-Benz E200/220 Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/5b879ccd050c13b169ad9dd16abce22566bdf65c.jpeg",
            additionalExamples: ["BMW 520 Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "PDAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 212.77,
              display: "212,77",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 212.77,
            trackingNet: 178.8,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 267.98,
              display: "267,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 267.98,
            trackingNet: 225.19,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 89.33, display: "89,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 89.33,
            trackingNet: 75.06,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 309.98,
              display: "309,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 309.98,
            trackingNet: 260.49,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 103.33,
              display: "103,33",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 103.33,
            trackingNet: 86.83,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-sedan-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-e-sedan-4d-2020-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-e-sedan-4d-2020-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-e-sedan-4d-2020-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-e-sedan-4d-2020-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-5-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-5-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-5-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-e-klasse-4d-schwarz-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-e-klasse-4d-schwarz-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-e-klasse-4d-schwarz-2020.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,35 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 267.98,
                  display: "267,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 267.98,
                trackingNet: 225.19,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 70,92)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 212.77,
                      display: "212,77",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 212.77,
                    trackingNet: 178.8,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 53.42,
                          display: "53,42",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 53.42,
                        trackingNet: 44.89,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 267.98,
                      display: "267,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 267.98,
                    trackingNet: 225.19,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 309.98,
                  display: "309,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 309.98,
                trackingNet: 260.49,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 325.99,
                  display: "325,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 325.99,
                trackingNet: 273.94,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 58.01,
                  display: "58,01",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 58.01,
                trackingNet: 48.75,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 86,41)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 259.22,
                      display: "259,22",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 259.22,
                    trackingNet: 217.83,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 64.99,
                          display: "64,99",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 64.99,
                        trackingNet: 54.61,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 325.99,
                      display: "325,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 325.99,
                    trackingNet: 273.94,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 46,
          price: 23,
          popularity: 202,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz E200/220 Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "Mercedes-Benz E200/220 Aut., BMW 520 Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XFMX",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Mercedes-Benz G500 oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz G500",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f42a2b25d8787fc744bcd95a9b5e4f70c100d772.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz G500",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/f42a2b25d8787fc744bcd95a9b5e4f70c100d772.jpeg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XFMX",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 737.17,
              display: "737,17",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 737.17,
            trackingNet: 619.47,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 922.95,
              display: "922,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 922.95,
            trackingNet: 775.59,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 307.65,
              display: "307,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 307.65,
            trackingNet: 258.53,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-g-suv-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-g-suv-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-g-suv-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-g-suv-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-g-suv-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-g-suv-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-g-suv-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-g-suv-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-g-suv-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-g-suv-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-g-suv-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-g-suv-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-g-suv-4d-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-g-klasse-5d-grau-2018.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-g-klasse-5d-grau-2018.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-g-klasse-5d-grau-2018.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,23 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 922.95,
                  display: "922,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 922.95,
                trackingNet: 775.59,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 245,72)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 737.17,
                      display: "737,17",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 737.17,
                    trackingNet: 619.47,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 184,
                          display: "184,00",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 184,
                        trackingNet: 154.62,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 922.95,
                      display: "922,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 922.95,
                    trackingNet: 775.59,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 47,
          price: 61,
          popularity: 94,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz G500",
          shortSubline: "garantiertes Modell | Premium SUV",
          longSubline: "garantiertes Modell | Premium SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XCAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Mercedes-Benz S-Class L oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz S-Class L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d9f87042f0b5c1de5fbb24edd9f0ce75b73d5707.jpg",
            additionalExamples: ["BMW 7 Series L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz S-Class L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d9f87042f0b5c1de5fbb24edd9f0ce75b73d5707.jpg",
            additionalExamples: ["BMW 7 Series L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "XCAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 444.14,
              display: "444,14",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 444.14,
            trackingNet: 373.23,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 556.96,
              display: "556,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 556.96,
            trackingNet: 468.03,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 185.65,
              display: "185,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 185.65,
            trackingNet: 156.01,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-sedan-4d-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-sedan-4d-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-sedan-4d-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-sedan-4d-2020-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-05.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-05.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-05.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-05.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-05.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-4d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-4d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-4d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-4d-2019-mf-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-s-klasse-4d-schwarz-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-s-klasse-4d-schwarz-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-s-klasse-4d-schwarz-2017.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 556.96,
                  display: "556,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 556.96,
                trackingNet: 468.03,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 148,05)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 444.14,
                      display: "444,14",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 444.14,
                    trackingNet: 373.23,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 111.03,
                          display: "111,03",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 111.03,
                        trackingNet: 93.3,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 556.96,
                      display: "556,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 556.96,
                    trackingNet: 468.03,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 48,
          price: 48,
          popularity: 99,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz S-Class L",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "Mercedes-Benz S-Class L, BMW 7 Series L oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XLAN",
        status: "available",
        onRequest: true,
        unlimited: false,
        description: "Mercedes-Benz S500 L oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz S500 L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a9282da06633bfbe27bc8983db30fb2ff0408d9a.jpeg",
            additionalExamples: ["Mercedes-Benz S560 L", "BMW 750L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz S500 L",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/a9282da06633bfbe27bc8983db30fb2ff0408d9a.jpeg",
            additionalExamples: ["Mercedes-Benz S560 L", "BMW 750L"],
          },
          premium: true,
          luxury: true,
          baggage: { bags: 2, suitcases: 1 },
        },
        acrissCode: "XLAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 519.4,
              display: "519,40",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 519.4,
            trackingNet: 436.47,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 650.95,
              display: "650,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 650.95,
            trackingNet: 547.02,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 216.98,
              display: "216,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 216.98,
            trackingNet: 182.34,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-long-sedan-4d-2017-lx-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-long-sedan-4d-2017-lx-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-long-sedan-4d-2017-lx-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-long-sedan-4d-2017-lx-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-long-sedan-4d-2017-lx-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-long-sedan-4d-2017-lx-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-long-sedan-4d-2017-lx-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-long-sedan-4d-2017-lx-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-long-sedan-4d-2017-lx-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-s-long-sedan-4d-2017-lx-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-s-long-sedan-4d-2017-lx-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-s-long-sedan-4d-2017-lx-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-s-long-sedan-4d-2017-lx-04.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-long-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-long-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-long-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-long-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-long-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-long-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-long-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-long-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-long-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-7-long-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/bmw-7-long-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/bmw-7-long-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/bmw-7-long-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-s-klasse-4d-schwarz-lang-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-s-klasse-4d-schwarz-lang-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-s-klasse-4d-schwarz-lang-2017.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 650.95,
                  display: "650,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 650.95,
                trackingNet: 547.02,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 173,13)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 519.4,
                      display: "519,40",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 519.4,
                    trackingNet: 436.47,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 129.77,
                          display: "129,77",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 129.77,
                        trackingNet: 109.05,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 650.95,
                      display: "650,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 650.95,
                    trackingNet: 547.02,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 49,
          price: 53,
          popularity: 118,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz S500 L",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "Mercedes-Benz S500 L, Mercedes-Benz S560 L, BMW 750L oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XVAN",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Mercedes-Benz V-Class 8 Seater oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 8,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz V-Class 8 Seater",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b74f1facefc5e0d0b43090b42a30cdc8dfa02dd5.jpg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 3 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: true,
          navigationSystem: true,
          modelGuaranteed: true,
          maxPassengers: 8,
          doors: 5,
          driverRequirements: {
            minAge: 25,
            licenseCategory: "",
            licenseMinYears: 3,
            youngDriverAge: 25,
          },
          modelExample: {
            name: "Mercedes-Benz V-Class 8 Seater",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b74f1facefc5e0d0b43090b42a30cdc8dfa02dd5.jpg",
          },
          premium: true,
          luxury: true,
          baggage: { bags: 1, suitcases: 3 },
        },
        acrissCode: "XVAN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 496.98,
              display: "496,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 496.98,
            trackingNet: 417.63,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 622.95,
              display: "622,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 622.95,
            trackingNet: 523.49,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 207.65,
              display: "207,65",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 207.65,
            trackingNet: 174.5,
          },
          promoLabel: "Sports \u0026 Luxury Car",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-v-mpv-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-v-mpv-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-v-mpv-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-v-mpv-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-v-mpv-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-v-mpv-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-v-mpv-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-v-mpv-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-v-mpv-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-v-mpv-2020-mf-04.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-04.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-v-mpv-2020-mf-04.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-v-mpv-2020-mf-04.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-v-mpv-2020-mf-04.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-v-klasse-van-grau-2014.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-v-klasse-van-grau-2014.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-v-klasse-van-grau-2014.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 1,11 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "pay_on_arrival",
          paymentOptions: [
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 622.95,
                  display: "622,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 622.95,
                trackingNet: 523.49,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 165,66)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 496.98,
                      display: "496,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 496.98,
                    trackingNet: 417.63,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 124.19,
                          display: "124,19",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 124.19,
                        trackingNet: 104.36,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 622.95,
                      display: "622,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 622.95,
                    trackingNet: 523.49,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: false,
        },
        sortIndexes: {
          name: 50,
          price: 49,
          popularity: 132,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz V-Class 8 Seater",
          shortSubline: "garantiertes Modell | Premium Mehrsitzer",
          longSubline: "garantiertes Modell | Premium Mehrsitzer",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FVAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Mercedes-Benz Vito Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 8/9",
          bodyStyle: "Transporter",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 9,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Mercedes-Benz Vito Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/3be1eaa289097dc8c9461291b6d9d7268e6130dd.jpeg",
            additionalExamples: ["VW Caravelle Aut.", "VW T6 Kombi Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 8/9",
          bodyStyle: "Transporter",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 9,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Mercedes-Benz Vito Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/3be1eaa289097dc8c9461291b6d9d7268e6130dd.jpeg",
            additionalExamples: ["VW Caravelle Aut.", "VW T6 Kombi Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "FVAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 380.88,
              display: "380,88",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 380.88,
            trackingNet: 320.07,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 477.95,
              display: "477,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 477.95,
            trackingNet: 401.64,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 159.32,
              display: "159,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 159.32,
            trackingNet: 133.88,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 557.98,
              display: "557,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 557.98,
            trackingNet: 468.89,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 185.99,
              display: "185,99",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 185.99,
            trackingNet: 156.3,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-vito-mpv-2020-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-vito-mpv-2020-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-vito-mpv-2020-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-vito-mpv-2020-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-vito-mpv-2020-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-vito-mpv-2020-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mb-vito-mpv-2020-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mb-vito-mpv-2020-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mb-vito-mpv-2020-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mb-vito-mpv-2020-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-caravelle-van-weiss-2019-fs-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-caravelle-van-weiss-2019-fs-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-caravelle-van-weiss-2019-fs-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-caravelle-van-weiss-2019-fs-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-caravelle-van-weiss-2019-fs-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-t6-passenger-van-2019-pixabay-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-t6-passenger-van-2019-pixabay-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/mb-vito-van-silber-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/mb-vito-van-silber-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/mb-vito-van-silber-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 477.95,
                  display: "477,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 477.95,
                trackingNet: 401.64,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 126,96)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 380.88,
                      display: "380,88",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 380.88,
                    trackingNet: 320.07,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 95.28,
                          display: "95,28",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 95.28,
                        trackingNet: 80.07,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 477.95,
                      display: "477,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 477.95,
                    trackingNet: 401.64,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 557.98,
                  display: "557,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 557.98,
                trackingNet: 468.89,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 581.97,
                  display: "581,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 581.97,
                trackingNet: 489.05,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 104.02,
                  display: "104,02",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 104.02,
                trackingNet: 87.41,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 154,72)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 464.17,
                      display: "464,17",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 464.17,
                    trackingNet: 390.06,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 116.01,
                          display: "116,01",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 116.01,
                        trackingNet: 97.49,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 581.97,
                      display: "581,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 581.97,
                    trackingNet: 489.05,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 51,
          price: 43,
          popularity: 154,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Mercedes-Benz Vito Aut.",
          shortSubline: "oder ähnlich | Transporter",
          longSubline:
            "Mercedes-Benz Vito Aut., VW Caravelle Aut., VW T6 Kombi Aut. oder ähnlich | Transporter",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CDMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Seat Leon oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Seat Leon",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/adbb02afedf4fb835850c8a1f40ae32174d6d8e1.jpeg",
            additionalExamples: ["Skoda Scala", "MINI 3D"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Seat Leon",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/adbb02afedf4fb835850c8a1f40ae32174d6d8e1.jpeg",
            additionalExamples: ["Skoda Scala", "MINI 3D"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 1 },
        },
        acrissCode: "CDMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 135.91,
              display: "135,91",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 135.91,
            trackingNet: 114.21,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 171.98,
              display: "171,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 171.98,
            trackingNet: 144.52,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 57.33, display: "57,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 57.33,
            trackingNet: 48.17,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 193.96,
              display: "193,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 193.96,
            trackingNet: 162.99,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 64.65, display: "64,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 64.65,
            trackingNet: 54.33,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/seat-leon-hatch-5d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/seat-leon-hatch-5d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/seat-leon-hatch-5d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/seat-leon-hatch-5d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/seat-leon-hatch-5d-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-scala-5d-blau-2019.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-scala-5d-blau-2019.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-scala-5d-blau-2019.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-scala-5d-blau-2019.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-scala-5d-blau-2019.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/mini-2door-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/mini-2door-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/mini-2door-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/mini-2door-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/mini-2door-mf-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/seat-leon-5d-schwarz-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/seat-leon-5d-schwarz-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/seat-leon-5d-schwarz-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 171.98,
                  display: "171,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 171.98,
                trackingNet: 144.52,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 45,30)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 135.91,
                      display: "135,91",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 135.91,
                    trackingNet: 114.21,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 34.28,
                          display: "34,28",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 34.28,
                        trackingNet: 28.81,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 171.98,
                      display: "171,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 171.98,
                    trackingNet: 144.52,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 193.96,
                  display: "193,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 193.96,
                trackingNet: 162.99,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 208.94,
                  display: "208,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 208.94,
                trackingNet: 175.58,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 36.96,
                  display: "36,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 36.96,
                trackingNet: 31.06,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 55,17)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 165.51,
                      display: "165,51",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 165.51,
                    trackingNet: 139.08,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 41.65,
                          display: "41,65",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 41.65,
                        trackingNet: 35,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 208.94,
                      display: "208,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 208.94,
                    trackingNet: 175.58,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 52,
          price: 3,
          popularity: 208,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Seat Leon",
          shortSubline: "oder ähnlich | Limousine",
          longSubline:
            "Seat Leon, Skoda Scala, MINI 3D oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CWMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "Skoda Octavia Estate oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Skoda Octavia Estate",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9be638e62949dcc30f5bc1dacebe16f08529a237.jpeg",
            additionalExamples: ["VW Golf Estate", "Seat Leon Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Estate",
          bodyStyle: "Kombi",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "Skoda Octavia Estate",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9be638e62949dcc30f5bc1dacebe16f08529a237.jpeg",
            additionalExamples: ["VW Golf Estate", "Seat Leon Estate"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "CWMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 146.3,
              display: "146,30",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 146.3,
            trackingNet: 122.94,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 184.95,
              display: "184,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 184.95,
            trackingNet: 155.42,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 61.65, display: "61,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 61.65,
            trackingNet: 51.81,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 209.96,
              display: "209,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 209.96,
            trackingNet: 176.44,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 69.99, display: "69,99", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 69.99,
            trackingNet: 58.81,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-octavia-combi-stationwagon-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-octavia-combi-stationwagon-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-octavia-combi-stationwagon-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-octavia-combi-stationwagon-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-octavia-combi-stationwagon-4d-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-golf-avant-wagon-4d-2019-pixabay-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-avant-wagon-4d-2019-pixabay-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-avant-wagon-4d-2019-pixabay-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-golf-avant-wagon-4d-2019-pixabay-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-golf-avant-wagon-4d-2019-pixabay-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/seat-leon-kombi-weiss-2018.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/seat-leon-kombi-weiss-2018.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/seat-leon-kombi-weiss-2018.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/seat-leon-kombi-weiss-2018.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/seat-leon-kombi-weiss-2018.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/skoda-octavia-combi-4d-silber-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/skoda-octavia-combi-4d-silber-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/skoda-octavia-combi-4d-silber-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 184.95,
                  display: "184,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 184.95,
                trackingNet: 155.42,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 48,77)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 146.3,
                      display: "146,30",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 146.3,
                    trackingNet: 122.94,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 36.87,
                          display: "36,87",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 36.87,
                        trackingNet: 30.98,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 184.95,
                      display: "184,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 184.95,
                    trackingNet: 155.42,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 209.96,
                  display: "209,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 209.96,
                trackingNet: 176.44,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 224.95,
                  display: "224,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 224.95,
                trackingNet: 189.03,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 40,
                  display: "40,00",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 40,
                trackingNet: 33.61,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 59,44)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 178.32,
                      display: "178,32",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 178.32,
                    trackingNet: 149.85,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 44.84,
                          display: "44,84",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 44.84,
                        trackingNet: 37.68,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 224.95,
                      display: "224,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 224.95,
                    trackingNet: 189.03,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 53,
          price: 5,
          popularity: 212,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "Skoda Octavia Estate",
          shortSubline: "oder ähnlich | Kombi",
          longSubline:
            "Skoda Octavia Estate, VW Golf Estate, Seat Leon Estate oder ähnlich | Kombi",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CLMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Golf oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Golf",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/abbde86f62df651bebe7e85a0086bf05d6b9b74d.jpg",
            additionalExamples: ["VW Golf Sportsvan", "VW T-Roc"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Golf",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/abbde86f62df651bebe7e85a0086bf05d6b9b74d.jpg",
            additionalExamples: ["VW Golf Sportsvan", "VW T-Roc"],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "CLMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 147.91,
              display: "147,91",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 147.91,
            trackingNet: 124.29,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 186.96,
              display: "186,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 186.96,
            trackingNet: 157.11,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 62.32, display: "62,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 62.32,
            trackingNet: 52.37,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 205.95,
              display: "205,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 205.95,
            trackingNet: 173.07,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 68.65, display: "68,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 68.65,
            trackingNet: 57.69,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-golf-sportsvan-mvp-4d-wht-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-sportsvan-mvp-4d-wht-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-sportsvan-mvp-4d-wht-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-golf-sportsvan-mvp-4d-wht-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-golf-sportsvan-mvp-4d-wht-2020-60.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-t-roc-suv-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-golf-5d-grau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-golf-5d-grau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-golf-5d-grau-2020.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 186.96,
                  display: "186,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 186.96,
                trackingNet: 157.11,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 49,30)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 147.91,
                      display: "147,91",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 147.91,
                    trackingNet: 124.29,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 37.27,
                          display: "37,27",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 37.27,
                        trackingNet: 31.32,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 186.96,
                      display: "186,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 186.96,
                    trackingNet: 157.11,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 205.95,
                  display: "205,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 205.95,
                trackingNet: 173.07,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 227.93,
                  display: "227,93",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 227.93,
                trackingNet: 191.54,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 40.97,
                  display: "40,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 40.97,
                trackingNet: 34.43,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 60,24)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 180.71,
                      display: "180,71",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 180.71,
                    trackingNet: 151.86,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 45.43,
                          display: "45,43",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 45.43,
                        trackingNet: 38.18,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 227.93,
                      display: "227,93",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 227.93,
                    trackingNet: 191.54,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 54,
          price: 6,
          popularity: 230,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Golf",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "VW Golf, VW Golf Sportsvan, VW T-Roc oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CLAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Golf Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Golf Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/abbde86f62df651bebe7e85a0086bf05d6b9b74d.jpg",
            additionalExamples: ["VW T-Roc Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 4,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Golf Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/abbde86f62df651bebe7e85a0086bf05d6b9b74d.jpg",
            additionalExamples: ["VW T-Roc Aut."],
          },
          premium: true,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "CLAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 158.33,
              display: "158,33",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 158.33,
            trackingNet: 133.05,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 199.98,
              display: "199,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 199.98,
            trackingNet: 168.05,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 66.66, display: "66,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 66.66,
            trackingNet: 56.02,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 219.95,
              display: "219,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 219.95,
            trackingNet: 184.83,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 73.32, display: "73,32", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 73.32,
            trackingNet: 61.61,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-golf-5d-hatch-5d-slv-2020-60.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-t-roc-suv-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-t-roc-suv-4d-2019-carkon-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-golf-5d-grau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-golf-5d-grau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-golf-5d-grau-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,25 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 199.98,
                  display: "199,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 199.98,
                trackingNet: 168.05,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 52,78)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 158.33,
                      display: "158,33",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 158.33,
                    trackingNet: 133.05,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 39.87,
                          display: "39,87",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 39.87,
                        trackingNet: 33.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 199.98,
                      display: "199,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 199.98,
                    trackingNet: 168.05,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 219.95,
                  display: "219,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 219.95,
                trackingNet: 184.83,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 242.96,
                  display: "242,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 242.96,
                trackingNet: 204.17,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 42.98,
                  display: "42,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 42.98,
                trackingNet: 36.12,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 64,25)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 192.74,
                      display: "192,74",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 192.74,
                    trackingNet: 161.97,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 48.43,
                          display: "48,43",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 48.43,
                        trackingNet: 40.7,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 242.96,
                      display: "242,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 242.96,
                    trackingNet: 204.17,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 55,
          price: 8,
          popularity: 79,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Golf Aut.",
          shortSubline: "oder ähnlich | Premium Limousine",
          longSubline:
            "VW Golf Aut., VW T-Roc Aut. oder ähnlich | Premium Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-ECMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Polo oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Polo",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b2454f56959e083645d14a1892d99e16a9824eed.jpeg",
            additionalExamples: ["Ford Fiesta", "Renault Clio"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Polo",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/b2454f56959e083645d14a1892d99e16a9824eed.jpeg",
            additionalExamples: ["Ford Fiesta", "Renault Clio"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 1 },
        },
        acrissCode: "ECMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 116.7,
              display: "116,70",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 116.7,
            trackingNet: 98.07,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 147.99,
              display: "147,99",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 147.99,
            trackingNet: 124.36,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 49.33, display: "49,33", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 49.33,
            trackingNet: 41.45,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 170.99,
              display: "170,99",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 170.99,
            trackingNet: 143.69,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 57, display: "57,00", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 57,
            trackingNet: 47.9,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-polo-hatch-4d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-polo-hatch-4d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-polo-hatch-4d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-polo-hatch-4d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-polo-hatch-4d-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-polo-hatch-2019-dirico-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-polo-hatch-2019-dirico-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-polo-hatch-2019-dirico-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-polo-hatch-2019-dirico-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-polo-hatch-2019-dirico-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-fiesta-hatch-5d-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-fiesta-hatch-5d-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-fiesta-hatch-5d-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-fiesta-hatch-5d-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-fiesta-hatch-5d-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-fiesta-hatch-5d-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-fiesta-hatch-5d-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-fiesta-hatch-5d-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-fiesta-hatch-5d-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-fiesta-hatch-5d-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/renault-clio-4d-hatch-wht-2020-13.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/renault-clio-4d-hatch-wht-2020-13.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/renault-clio-4d-hatch-wht-2020-13.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/renault-clio-4d-hatch-wht-2020-13.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/renault-clio-4d-hatch-wht-2020-13.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-polo-5d-weiss-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-polo-5d-weiss-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-polo-5d-weiss-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,23 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 147.99,
                  display: "147,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 147.99,
                trackingNet: 124.36,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 38,90)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 116.7,
                      display: "116,70",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 116.7,
                    trackingNet: 98.07,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 29.5,
                          display: "29,50",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 29.5,
                        trackingNet: 24.79,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 147.99,
                      display: "147,99",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 147.99,
                    trackingNet: 124.36,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 170.99,
                  display: "170,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 170.99,
                trackingNet: 143.69,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 179.95,
                  display: "179,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 179.95,
                trackingNet: 151.22,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 31.96,
                  display: "31,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 31.96,
                trackingNet: 26.86,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 47,43)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 142.3,
                      display: "142,30",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 142.3,
                    trackingNet: 119.58,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 35.87,
                          display: "35,87",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 35.87,
                        trackingNet: 30.14,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 179.95,
                      display: "179,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 179.95,
                    trackingNet: 151.22,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 56,
          price: 1,
          popularity: 228,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Polo",
          shortSubline: "oder ähnlich | Limousine",
          longSubline:
            "VW Polo, Ford Fiesta, Renault Clio oder ähnlich | Limousine",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SVMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Sharan oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Sharan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d2993a76260055f7b9aa6aed3c4ef41976567b3d.jpeg",
            additionalExamples: ["Ford Galaxy", "Citroën Space Tourer"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Sharan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d2993a76260055f7b9aa6aed3c4ef41976567b3d.jpeg",
            additionalExamples: ["Ford Galaxy", "Citroën Space Tourer"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "SVMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 244.79,
              display: "244,79",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 244.79,
            trackingNet: 205.71,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 307.97,
              display: "307,97",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 307.97,
            trackingNet: 258.8,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 102.66,
              display: "102,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 102.66,
            trackingNet: 86.27,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 348.99,
              display: "348,99",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 348.99,
            trackingNet: 293.27,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 116.33,
              display: "116,33",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 116.33,
            trackingNet: 97.76,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-sharan-van-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-sharan-van-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-sharan-van-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-sharan-van-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-sharan-van-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/citroen-spacetourer-van-schwarz-2017.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/citroen-spacetourer-van-schwarz-2017.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/citroen-spacetourer-van-schwarz-2017.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/citroen-spacetourer-van-schwarz-2017.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/citroen-spacetourer-van-schwarz-2017.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-sharan-van-blau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-sharan-van-blau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-sharan-van-blau-2020.png",
        },
        includedCharges: [
          { title: "Wintertaugliche Bereifung" },
          { title: "Haftpflichtversicherung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 307.97,
                  display: "307,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 307.97,
                trackingNet: 258.8,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 81,60)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 244.79,
                      display: "244,79",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 244.79,
                    trackingNet: 205.71,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 61.39,
                          display: "61,39",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 61.39,
                        trackingNet: 51.59,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 307.97,
                      display: "307,97",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 307.97,
                    trackingNet: 258.8,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 348.99,
                  display: "348,99",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 348.99,
                trackingNet: 293.27,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 374.95,
                  display: "374,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 374.95,
                trackingNet: 315.08,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 66.98,
                  display: "66,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 66.98,
                trackingNet: 56.28,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 99,47)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 298.42,
                      display: "298,42",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 298.42,
                    trackingNet: 250.77,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 74.74,
                          display: "74,74",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 74.74,
                        trackingNet: 62.81,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 374.95,
                      display: "374,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 374.95,
                    trackingNet: 315.08,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 57,
          price: 31,
          popularity: 184,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Sharan",
          shortSubline: "oder ähnlich | Mehrsitzer",
          longSubline:
            "VW Sharan, Ford Galaxy, Citroën Space Tourer oder ähnlich | Mehrsitzer",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SVAR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Sharan Aut. oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Sharan Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d2993a76260055f7b9aa6aed3c4ef41976567b3d.jpeg",
            additionalExamples: ["Seat Alhambra Aut.", "Ford Galaxy Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 7",
          bodyStyle: "Mehrsitzer",
          airCondition: true,
          automatic: true,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 7,
          doors: 4,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Sharan Aut.",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/d2993a76260055f7b9aa6aed3c4ef41976567b3d.jpeg",
            additionalExamples: ["Seat Alhambra Aut.", "Ford Galaxy Aut."],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "SVAR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 268.82,
              display: "268,82",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 268.82,
            trackingNet: 225.9,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 337.98,
              display: "337,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 337.98,
            trackingNet: 284.02,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 112.66,
              display: "112,66",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 112.66,
            trackingNet: 94.67,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 383.95,
              display: "383,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 383.95,
            trackingNet: 322.65,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 127.98,
              display: "127,98",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 127.98,
            trackingNet: 107.55,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-sharan-van-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-sharan-van-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-sharan-van-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-sharan-van-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-sharan-van-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/seat-alhambra-van-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/seat-alhambra-van-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/seat-alhambra-van-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/seat-alhambra-van-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/seat-alhambra-van-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-galaxy-van-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-galaxy-van-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-galaxy-van-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-galaxy-van-2019-mf-03.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-sharan-van-blau-2020.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-sharan-van-blau-2020.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-sharan-van-blau-2020.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 337.98,
                  display: "337,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 337.98,
                trackingNet: 284.02,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 89,61)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 268.82,
                      display: "268,82",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 268.82,
                    trackingNet: 225.9,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 67.38,
                          display: "67,38",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 67.38,
                        trackingNet: 56.62,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 337.98,
                      display: "337,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 337.98,
                    trackingNet: 284.02,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 383.95,
                  display: "383,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 383.95,
                trackingNet: 322.65,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 411.95,
                  display: "411,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 411.95,
                trackingNet: 346.18,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 73.97,
                  display: "73,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 73.97,
                trackingNet: 62.16,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 109,35)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 328.05,
                      display: "328,05",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 328.05,
                    trackingNet: 275.67,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 82.12,
                          display: "82,12",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 82.12,
                        trackingNet: 69.01,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 411.95,
                      display: "411,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 411.95,
                    trackingNet: 346.18,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 58,
          price: 32,
          popularity: 148,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Sharan Aut.",
          shortSubline: "oder ähnlich | Mehrsitzer",
          longSubline:
            "VW Sharan Aut., Seat Alhambra Aut., Ford Galaxy Aut. oder ähnlich | Mehrsitzer",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FVMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW T6 Kombi oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 8/9",
          bodyStyle: "Transporter",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 9,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW T6 Kombi",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/2204ae477592ce90f18fdebce35d07f4e3ddaee9.jpg",
            additionalExamples: ["Ford Tourneo"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 4 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 8/9",
          bodyStyle: "Transporter",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 9,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW T6 Kombi",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/2204ae477592ce90f18fdebce35d07f4e3ddaee9.jpg",
            additionalExamples: ["Ford Tourneo"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 4 },
        },
        acrissCode: "FVMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 349.68,
              display: "349,68",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 349.68,
            trackingNet: 293.85,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 438.98,
              display: "438,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 438.98,
            trackingNet: 368.89,
          },
          dayPrice: {
            prefix: "",
            amount: {
              value: 146.33,
              display: "146,33",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 146.33,
            trackingNet: 122.96,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 507.95,
              display: "507,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 507.95,
            trackingNet: 426.85,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: {
              value: 169.32,
              display: "169,32",
              currency: "EUR",
            },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 169.32,
            trackingNet: 142.28,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-t6-passenger-van-2019-pixabay-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-t6-passenger-van-2019-pixabay-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-t6-passenger-van-2019-pixabay-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-tourneo-custom-passengervan-2019-mf-03.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-03.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-03.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-tourneo-custom-passengervan-2019-mf-03.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-tourneo-custom-passengervan-2019-mf-03.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-tourneo-custom-passengervan-2019-mf-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-tourneo-custom-passengervan-2019-mf-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-tourneo-custom-passengervan-2019-mf-02.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/ford-tourneo-custom-passengervan-2019-mf-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/ford-tourneo-custom-passengervan-2019-mf-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/ford-tourneo-custom-passengervan-2019-mf-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/ford-tourneo-custom-passengervan-2019-mf-01.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-t6-van-schwarz-2017.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-t6-van-schwarz-2017.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-t6-van-schwarz-2017.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,32 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 438.98,
                  display: "438,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 438.98,
                trackingNet: 368.89,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 116,56)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 349.68,
                      display: "349,68",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 349.68,
                    trackingNet: 293.85,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 87.51,
                          display: "87,51",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 87.51,
                        trackingNet: 73.54,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 438.98,
                      display: "438,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 438.98,
                    trackingNet: 368.89,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 507.95,
                  display: "507,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 507.95,
                trackingNet: 426.85,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 533.95,
                  display: "533,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 533.95,
                trackingNet: 448.7,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 94.97,
                  display: "94,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 94.97,
                trackingNet: 79.81,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 141,91)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 425.72,
                      display: "425,72",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 425.72,
                    trackingNet: 357.75,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 106.45,
                          display: "106,45",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 106.45,
                        trackingNet: 89.45,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 533.95,
                      display: "533,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 533.95,
                    trackingNet: 448.7,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 59,
          price: 40,
          popularity: 180,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW T6 Kombi",
          shortSubline: "oder ähnlich | Transporter",
          longSubline: "VW T6 Kombi, Ford Tourneo oder ähnlich | Transporter",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-IFMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Tiguan oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Tiguan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9a34b3a5dbf798559d82f08dc8b95a91c5db5127.jpg",
            additionalExamples: ["Peugeot 5008", "Skoda Kodiaq"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Off Road",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Tiguan",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/9a34b3a5dbf798559d82f08dc8b95a91c5db5127.jpg",
            additionalExamples: ["Peugeot 5008", "Skoda Kodiaq"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 1, suitcases: 2 },
        },
        acrissCode: "IFMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 163.93,
              display: "163,93",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 163.93,
            trackingNet: 137.76,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 206.98,
              display: "206,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 206.98,
            trackingNet: 173.93,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 68.99, display: "68,99", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 68.99,
            trackingNet: 57.98,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 233.95,
              display: "233,95",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 233.95,
            trackingNet: 196.6,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 77.98, display: "77,98", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 77.98,
            trackingNet: 65.53,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-tiguan-5d-grau-2019-fs-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-tiguan-5d-grau-2019-fs-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-tiguan-5d-grau-2019-fs-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-tiguan-5d-grau-2019-fs-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-tiguan-5d-grau-2019-fs-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/peugeot-5008-5d-blau-2017.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/peugeot-5008-5d-blau-2017.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/peugeot-5008-5d-blau-2017.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/peugeot-5008-5d-blau-2017.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/peugeot-5008-5d-blau-2017.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-kodiaq-5d-schwarz-2020.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-5d-schwarz-2020.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-5d-schwarz-2020.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-kodiaq-5d-schwarz-2020.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-kodiaq-5d-schwarz-2020.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-kodiaq-suv-4d-2019-dirico-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-suv-4d-2019-dirico-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-suv-4d-2019-dirico-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-kodiaq-suv-4d-2019-dirico-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-kodiaq-suv-4d-2019-dirico-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/skoda-kodiaq-suv-4d-2019-dirico-02.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-suv-4d-2019-dirico-02.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/skoda-kodiaq-suv-4d-2019-dirico-02.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/skoda-kodiaq-suv-4d-2019-dirico-02.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/skoda-kodiaq-suv-4d-2019-dirico-02.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-tiguan-5d-grau-2019.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-tiguan-5d-grau-2019.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-tiguan-5d-grau-2019.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,31 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 206.98,
                  display: "206,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 206.98,
                trackingNet: 173.93,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 54,64)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 163.93,
                      display: "163,93",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 163.93,
                    trackingNet: 137.76,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 41.26,
                          display: "41,26",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 41.26,
                        trackingNet: 34.67,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 206.98,
                      display: "206,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 206.98,
                    trackingNet: 173.93,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 233.95,
                  display: "233,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 233.95,
                trackingNet: 196.6,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 250.95,
                  display: "250,95",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 250.95,
                trackingNet: 210.88,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 43.97,
                  display: "43,97",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 43.97,
                trackingNet: 36.95,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 66,38)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 199.13,
                      display: "199,13",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 199.13,
                    trackingNet: 167.34,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 50.03,
                          display: "50,03",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 50.03,
                        trackingNet: 42.04,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 250.95,
                      display: "250,95",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 250.95,
                    trackingNet: 210.88,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 60,
          price: 12,
          popularity: 186,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Tiguan",
          shortSubline: "oder ähnlich | SUV",
          longSubline:
            "VW Tiguan, Peugeot 5008, Skoda Kodiaq oder ähnlich | SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-IVMR",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Touran oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Multiseater 5",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Touran",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/4da5cccb3db5c45eab3a2577097e2fae149befa5.jpeg",
            additionalExamples: ["Renault Grand Scenic"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Multiseater 5",
          bodyStyle: "SUV",
          airCondition: true,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 5,
          doors: 5,
          driverRequirements: {
            minAge: 21,
            licenseCategory: "",
            licenseMinYears: 2,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Touran",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/4da5cccb3db5c45eab3a2577097e2fae149befa5.jpeg",
            additionalExamples: ["Renault Grand Scenic"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 2 },
        },
        acrissCode: "IVMR",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 158.33,
              display: "158,33",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 158.33,
            trackingNet: 133.05,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 199.98,
              display: "199,98",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 199.98,
            trackingNet: 168.05,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 66.66, display: "66,66", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 66.66,
            trackingNet: 56.02,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 226.96,
              display: "226,96",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 226.96,
            trackingNet: 190.72,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 75.65, display: "75,65", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 75.65,
            trackingNet: 63.57,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-touran-van-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touran-van-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-touran-van-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-touran-van-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-touran-van-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/renault-grand-scenic-5d-silber-2018.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/renault-grand-scenic-5d-silber-2018.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/renault-grand-scenic-5d-silber-2018.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/renault-grand-scenic-5d-silber-2018.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/renault-grand-scenic-5d-silber-2018.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-touran-van-weiss-2016.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-touran-van-weiss-2016.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-touran-van-weiss-2016.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,27 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 199.98,
                  display: "199,98",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 199.98,
                trackingNet: 168.05,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 52,78)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 158.33,
                      display: "158,33",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 158.33,
                    trackingNet: 133.05,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 39.87,
                          display: "39,87",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 39.87,
                        trackingNet: 33.5,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 199.98,
                      display: "199,98",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 199.98,
                    trackingNet: 168.05,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 226.96,
                  display: "226,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 226.96,
                trackingNet: 190.72,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 243.94,
                  display: "243,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 243.94,
                trackingNet: 204.99,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 43.96,
                  display: "43,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 43.96,
                trackingNet: 36.94,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 64,51)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 193.53,
                      display: "193,53",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 193.53,
                    trackingNet: 162.63,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 48.62,
                          display: "48,62",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 48.62,
                        trackingNet: 40.86,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 243.94,
                      display: "243,94",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 243.94,
                    trackingNet: 204.99,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 61,
          price: 10,
          popularity: 194,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Touran",
          shortSubline: "oder ähnlich | SUV",
          longSubline: "VW Touran, Renault Grand Scenic oder ähnlich | SUV",
        },
      },
      {
        id: "2436432a-e1d5-4649-bece-f98834f6ee1d-MCMN",
        status: "available",
        onRequest: false,
        unlimited: false,
        description: "VW Up! oder ähnlich",
        carGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: false,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Up!",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/1ff02d390d2884e3b3cb66c096d199fe1fba0fda.jpg",
            additionalExamples: ["Hyundai i10"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 0 },
        },
        vehicleType: "car",
        vehicleGroupInfo: {
          bodyStyleKey: "Limousine",
          bodyStyle: "Limousine",
          airCondition: false,
          automatic: false,
          navigationSystem: false,
          modelGuaranteed: false,
          maxPassengers: 4,
          doors: 2,
          driverRequirements: {
            minAge: 18,
            licenseCategory: "",
            licenseMinYears: 0,
            youngDriverAge: 23,
          },
          modelExample: {
            name: "VW Up!",
            imageUrl:
              "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/1ff02d390d2884e3b3cb66c096d199fe1fba0fda.jpg",
            additionalExamples: ["Hyundai i10"],
          },
          premium: false,
          luxury: false,
          baggage: { bags: 2, suitcases: 0 },
        },
        acrissCode: "MCMN",
        prices: {
          basePrice: {
            prefix: "",
            amount: {
              value: 115.06,
              display: "115,06",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 115.06,
            trackingNet: 96.69,
          },
          totalPrice: {
            prefix: "",
            amount: {
              value: 145.93,
              display: "145,93",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 145.93,
            trackingNet: 122.63,
          },
          dayPrice: {
            prefix: "",
            amount: { value: 48.64, display: "48,64", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 48.64,
            trackingNet: 40.88,
          },
          crossedOutTotalPrice: {
            prefix: "",
            amount: {
              value: 168.94,
              display: "168,94",
              currency: "EUR",
            },
            unit: "gesamt",
            taxInfo: "inklusive Steuern",
            tracking: 168.94,
            trackingNet: 141.97,
          },
          crossedOutDayPrice: {
            prefix: "",
            amount: { value: 56.31, display: "56,31", currency: "EUR" },
            unit: "Tag",
            taxInfo: "inklusive Steuern",
            tracking: 56.31,
            trackingNet: 47.32,
          },
          promoLabel: "Frühbucher Special",
          youngDriverFeeApplied: false,
          isHourlyBooking: false,
        },
        splashImages: [
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/vw-up-hatch-2d-2019-carkon-01.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/vw-up-hatch-2d-2019-carkon-01.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/vw-up-hatch-2d-2019-carkon-01.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/vw-up-hatch-2d-2019-carkon-01.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/vw-up-hatch-2d-2019-carkon-01.jpg",
          },
          {
            url: "https://cdn.sixt.io/fleet/images/1600x640/hyundai-i10-5d-hatch-wht-2020-60.jpg",
            narrowMedium:
              "https://cdn.sixt.io/fleet/images/750x640/hyundai-i10-5d-hatch-wht-2020-60.jpg",
            narrowLarge:
              "https://cdn.sixt.io/fleet/images/750x640/hyundai-i10-5d-hatch-wht-2020-60.jpg",
            wideMedium:
              "https://cdn.sixt.io/fleet/images/780x312/hyundai-i10-5d-hatch-wht-2020-60.jpg",
            wideLarge:
              "https://cdn.sixt.io/fleet/images/1200x480/hyundai-i10-5d-hatch-wht-2020-60.jpg",
          },
        ],
        images: {
          small:
            "//fileadmin/files/global/user_upload/fleet/png/350x200/vw-up-5d-weiss-2013.png",
          medium:
            "//fileadmin/files/global/user_upload/fleet/png/630x360/vw-up-5d-weiss-2013.png",
          large:
            "//fileadmin/files/global/user_upload/fleet/png/1050x600/vw-up-5d-weiss-2013.png",
        },
        includedCharges: [
          { title: "Haftpflichtversicherung" },
          { title: "Wintertaugliche Bereifung" },
          { title: "900 Kilometer, 0,23 EUR je extra Kilometer" },
        ],
        payment: {
          selectedPaymentOption: "prepaid",
          paymentOptions: [
            {
              id: "prepaid",
              price: {
                prefix: "",
                amount: {
                  value: 145.93,
                  display: "145,93",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 145.93,
                trackingNet: 122.63,
              },
              diffPrice: {
                prefix: "",
                amount: { value: 0, display: "0,00", currency: "EUR" },
                unit: "gesamt",
                taxInfo: "",
                tracking: 0,
                trackingNet: 0,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 38,35)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 115.06,
                      display: "115,06",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 115.06,
                    trackingNet: 96.69,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 29.08,
                          display: "29,08",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 29.08,
                        trackingNet: 24.44,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 145.93,
                      display: "145,93",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 145.93,
                    trackingNet: 122.63,
                  },
                },
              ],
              crossedOutTotalPrice: {
                prefix: "",
                amount: {
                  value: 168.94,
                  display: "168,94",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 168.94,
                trackingNet: 141.97,
              },
              cancellationNote: "Günstigster Preis!",
            },
            {
              id: "pay_on_arrival",
              price: {
                prefix: "",
                amount: {
                  value: 176.96,
                  display: "176,96",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 176.96,
                trackingNet: 148.71,
              },
              diffPrice: {
                prefix: "",
                amount: {
                  value: 31.03,
                  display: "31,03",
                  currency: "EUR",
                },
                unit: "gesamt",
                taxInfo: "inklusive Steuern",
                tracking: 31.03,
                trackingNet: 26.08,
              },
              priceBreakdown: [
                {
                  reference: "rental_period",
                  title: "Mietdauer (3 Tage x 46,64)",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 139.91,
                      display: "139,91",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 139.91,
                    trackingNet: 117.57,
                  },
                },
                {
                  reference: "fees",
                  title: "Gebühren",
                  type: "group",
                  items: [
                    {
                      reference: "Y",
                      title: "Standortzuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 35.27,
                          display: "35,27",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 35.27,
                        trackingNet: 29.64,
                      },
                    },
                    {
                      reference: "U",
                      title: "WLTP Zuschlag",
                      type: "single",
                      price: {
                        prefix: "",
                        amount: {
                          value: 1.79,
                          display: "1,79",
                          currency: "EUR",
                        },
                        unit: "gesamt",
                        taxInfo: "inklusive Steuern",
                        tracking: 1.79,
                        trackingNet: 1.5,
                      },
                    },
                  ],
                },
                {
                  reference: "total_price",
                  title: "Gesamtpreis",
                  type: "single",
                  price: {
                    prefix: "",
                    amount: {
                      value: 176.96,
                      display: "176,96",
                      currency: "EUR",
                    },
                    unit: "gesamt",
                    taxInfo: "inklusive Steuern",
                    tracking: 176.96,
                    trackingNet: 148.71,
                  },
                },
              ],
              cancellationNote: "Jederzeit flexibel umbuchen!",
            },
          ],
          paymentRequired: true,
        },
        sortIndexes: {
          name: 62,
          price: 0,
          popularity: 190,
          datascience: 0,
          subscription: 0,
        },
        mileageInfo: { display: "inkl. 900 km" },
        rentalDays: 3,
        rentalHours: 0,
        headlines: {
          description: "VW Up!",
          shortSubline: "oder ähnlich | Limousine",
          longSubline: "VW Up!, Hyundai i10 oder ähnlich | Limousine",
        },
      },
    ],
    recommendations: null,
    recommendations_v2: null,
  },
];
export default data;
