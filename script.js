const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');

const apiKey = '00b9dc2d3909d3edf8c282c367c9a9d0'; // Replace with your OpenWeatherMap API key

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    cityElement.textContent = data.name;
    temperatureElement.textContent = `${data.main.temp}°C`;
    descriptionElement.textContent = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Handle error, e.g., display an error message to the user
  }
}
