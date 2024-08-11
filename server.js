const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '00b9dc2d3909d3edf8c282c367c9a9d0';

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
