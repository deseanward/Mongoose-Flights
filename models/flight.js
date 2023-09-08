const mongoose = require("mongoose");

const destinationsSchema = mongoose.Schema({
  airport: {
    type: String,
    enum: ["aus", "dal", "lax", "san", "sean"],
  },

  arrival: {
    type: Date,
  },
});

const flightSchemma = new mongoose.Schema({
  airport: {
    type: String,
    enum: ["aus", "dal", "lax", "san", "sea"],
    default: "san",
  },

  destinations: [destinationsSchema],

  airline: {
    type: String,
    enum: ["american", "southwest", "united"],
    require: true,
  },

  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },

  departs: {
    type: Date,
    expires: null,
  },
});

const Flight = mongoose.model("Flight", flightSchemma);

module.exports = Flight;
