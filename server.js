// ***** Imports ***** //
const express = require("express");
const connectDB = require("./config/database");
const jsxEngine = require("jsx-view-engine");
require("dotenv").config();
const Flight = require("./models/flight");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;

// ***** Configure the App ***** //
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// ***** Middleware ***** //
// Encode and Parse JSON Data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

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

// ----- Show Flight Details ----- //
app.get("/flights/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const flight = await Flight.findById(id);
    // res.send(flight);
    res.render("Show", { flight });
  } catch (error) {
    console.log("Error fetching the flight:", error);
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

// Update Flight Info
app.put("/api/flights/:id", async (req, res) => {
  const { id } = req.params;
  // const { destination } = req.body;
  console.log(req.body);
  try {
    const flightToUpdate = await Flight.findById(id);
    flightToUpdate.destinations.push(req.body);

    const updatedFlight = await Flight.findByIdAndUpdate(id, flightToUpdate, {
      new: true,
    });

    console.log(updatedFlight);
    res.redirect(`/flights/${id}`);
  } catch (error) {
    console.log("An error occurred: ", error);
  }
});

// **** Connect to the database ***** //
connectDB();

// ***** Listen On The Port ***** //
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
