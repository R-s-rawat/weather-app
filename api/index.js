// This code will:

// Define the base route /
// Return Express on Vercel when it’s called
// And start the Express.js server running on port 3000

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(8001, () => console.log("Server ready on port 80001."));

module.exports = app;