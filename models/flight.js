const mongoose = require("mongoose");

const destinationsSchema = mongoose.Schema({
  airport: {
    type: String,
    enum: ["SAN", "DAL", "LAX", "SAN", "SEA"],
  },

  arrival: {
    type: Date,
  },
});

const flightSchemma = new mongoose.Schema({
  airport: {
    type: String,
    enum: ["SAN", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
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
