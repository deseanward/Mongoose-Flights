// ***** Imports ***** //
const express = require("express");
const connectDB = require("./config/database");
const jsxEngine = require("jsx-view-engine");
require("dotenv").config();
const Flight = require("./models/flight");

const app = express();
const PORT = 3000;

// ***** Configure the App ***** //
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// ***** Middleware ***** //
// Encode and Parse JSON Data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ***** View Routes ***** //
app.get("/", (req, res) => {
  res.render("Landing");
});

// ---- Get all flights ---- //
app.get("/flights", async (req, res) => {
  try {
    const allFlights = await Flight.find({}).sort({
      departs: 1,
    });
    res.render("Index", { allFlights });
  } catch (err) {
    console.log("There was an error: ", err);
  }
});

// ----- Create a New Flight ----- //
app.get("/flights/new", (req, res) => {
  try {
    res.render("New", {});
  } catch (error) {
    console.log("Error creating the flight:", error);
  }
});

// ***** API ROUTES ***** //
// Add The Flight to the database
app.post("/api/flights", async (req, res) => {
  let aError = null;
  let fError = null;

  // Get the day from the Flight form
  const date = new Date(req.body.departs);

  // Update the 'Departs' date 1 year from the created date
  req.body.departs = date.setFullYear(date.getFullYear() + 1);

  // Veriry the airline name based on lowercase
  req.body.airline = req.body.airline.toLowerCase();

  try {
    const createdFlight = await Flight.create(req.body);

    res.redirect("/flights");
  } catch (error) {
    console.log(error.errors);

    if (error.errors.airline) {
      aError = "Please enter American, Southwest, or United";
    }

    if (error.errors.flightNo) {
      fError = "Please enter a valid number (10 - 9999)";
    }
    res.render("New", {
      airlineErr: aError,
      flightErr: fError,
    });
  }
});

// **** Connect to the database ***** //
connectDB();

// ***** Listen On The Port ***** //
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
