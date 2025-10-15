// IMPORTANT: Replace with your actual API key from OpenWeatherMap
const API_KEY = "9ac3be8a00acb18ea8e31a84c818e586";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Get DOM elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const errorMessage = document.getElementById("error-message");
const loading = document.getElementById("loading");
const weatherDisplay = document.getElementById("weather-display");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

// Event listeners
searchBtn.addEventListener("click", searchWeather);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather();
  }
});

// Main function to search weather
async function searchWeather() {
  const city = cityInput.value.trim();

  // Validate input
  if (!city) {
    showError("Please enter a city name");
    return;
  }

  // Check if API key is set
  if (API_KEY === "YOUR_API_KEY_HERE") {
    showError("Please add your OpenWeatherMap API key");
    return;
  }

  // Hide previous results and errors
  hideError();
  hideWeather();
  showLoading();

  try {
    // Fetch weather data from API
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    // Check if request was successful
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found");
      } else if (response.status === 401) {
        throw new Error("Invalid API key");
      } else {
        throw new Error("Failed to fetch weather data");
      }
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    showError(error.message);
  } finally {
    hideLoading();
  }
}

// Display weather data
function displayWeather(data) {
  // Update text content
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} m/s`;

  // Update weather icon
  const iconCode = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = data.weather[0].description;

  // Change background based on weather condition
  changeBackground(data.weather[0].main.toLowerCase());

  // Show weather display
  showWeather();
}

// Change background based on weather condition
function changeBackground(condition) {
  // Remove all weather classes
  document.body.classList.remove(
    "clear",
    "clouds",
    "rain",
    "drizzle",
    "thunderstorm",
    "snow",
    "mist",
    "fog",
    "haze"
  );

  // Add appropriate class
  document.body.classList.add(condition);
}

// Show/hide functions
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
}

function hideError() {
  errorMessage.classList.remove("show");
}

function showLoading() {
  loading.classList.add("show");
}

function hideLoading() {
  loading.classList.remove("show");
}

function showWeather() {
  weatherDisplay.classList.add("show");
}

function hideWeather() {
  weatherDisplay.classList.remove("show");
}
