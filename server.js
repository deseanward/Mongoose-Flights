// ***** Imports ***** //
const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();
const Flight = require("./models/flight");

const app = express();
const PORT = 3000;

// ***** Configure the Server ***** //

// ***** Middleware ***** //
// Encode and Parse JSON Data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ***** View Routes ***** //
app.get("/", async (req, res) => {
  try {
    const allFlights = await Flight.find({});
    res.send("<h1>Hello World!</h1>");
  } catch (err) {
    console.log("There was an error: ", error);
  }
});

// **** Connect to the database ***** //
connectDB();

// ***** Listen On The Port ***** //
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
