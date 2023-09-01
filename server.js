// ***** Imports ***** //
const express = require("express");

const app = express();
const PORT = 3000;

// ***** Configure the Server ***** //

// ***** Middleware ***** //



// ***** View Routes ***** //
app.get('/', (req, res) => {
    try {
        res.send('<h1>Hello World!</h1>')
    } catch (err) {
        console.log('There was an error: ', error)
    }
})

// ***** Listen On The Port ***** //
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
