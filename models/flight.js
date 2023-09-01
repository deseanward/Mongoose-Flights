const mongoose = require("mongoose");

const flightSchemma = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    require: true,
  },

  fightNo: {
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
