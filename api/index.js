// This code will:

// Define the base route /
// Return Express on Vercel when it’s called
// And start the Express.js server running on port 3000

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel rohit "));

app.listen(3000, () => {
    console.log("Server ready on port.");
})
.on('error', (err) => {
    console.error('Error starting server:', err);
});

module.exports = app;