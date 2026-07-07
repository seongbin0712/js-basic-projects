const myTrainHistory = [
  {
    id: 1,
    dob: {
      daparturedate: "2025-11-06", 
      ticketingdate: "2025-11-03"
    },
    location: {
      pickup: "Busan",
      departuretime: "17:23",
      dropoff: "Seoul",
      arrivaltime: "20:11"
    },
    trainticket: {
      type: "KTX",
      trainname: "KTX 051",
      trainnumber: 18,
      seatnumber: "14C",
      ticketing: true,
      ticketnumber: 82254-1028-11595-47,
      refund: false,
      price: 51700
    }
  },
  {
    id: 2,
    dob: {
      daparturedate: "2025-11-06",
      ticketingdate: "2025-11-03"
    },
    location: {
      pickup: "Suseo",
      departuretime: "19:15",
      dropoff: "Busan",
      arrivaltime: "21:45"
    },
    trainticket: {
      type: "SRT",
      trainname: "SRT 359",
      trainnumber: 14,
      seatnumber: "12B",
      ticketing: false,
      ticketnumber: "81311-0305-11420-46",
      refund: true,
      price: 52000
    }
  },
]