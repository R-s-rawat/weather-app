// This code will:

// Define the base route /
// Return Express on Vercel when it’s called
// And start the Express.js server running on port 3000

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel rohit 3001"));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;