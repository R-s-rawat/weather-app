// // This code will:

// // Define the base route /
// // Return Express on Vercel when it’s called
// // And start the Express.js server running on port 3000

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel rohit "));


// app.listen(3000, () => {
//     setTimeout(() => {
//         console.log("Server ready on port.");
//     }, 1000); // Delay of 1 second
    
// })
// .on('error', (err) => {
//     console.error('Error starting server:', err);
// });

// module.exports = app;


const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/weather', async (req, res) => {
  const apiKey = '00b9dc2d3909d3edf8c282c367c9a9d0'; // Replace with your OpenWeatherMap API key
  const city = req.query.city;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
