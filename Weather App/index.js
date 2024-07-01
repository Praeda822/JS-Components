const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const API_KEY = "47a27afd0c72eed8a8b35d8efa569251"; // Open Weather API Key

// Refactored event listeners
document.addEventListener("DOMContentLoaded", () => {
  const weatherForm = document.querySelector(".weather-form");
  weatherForm.addEventListener("submit", handleWeatherFormSubmit);
});

/**
 * Handles the weather form submission.
 * @param {Event} e - The form submission event.
 */
async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  const cityInput = document.querySelector(".weather-form__input");
  const city = cityInput.value.trim();

  if (city) {
    try {
      const data = await getWeatherData(city);
      displayWeatherInfo(data);
    } catch (err) {
      console.error(err);
      displayError(err.message);
    }
  } else {
    displayError("Please Enter a city!");
  }
}

async function getWeatherData(city) {
  return getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
}

/**
 * Returns a weather emoji based on the weather ID.
 * @param {number} weatherId - The weather condition ID.
 * @returns {string} The corresponding weather emoji.
 */
function getWeatherEmoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈"; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 500) {
    return "🌧"; // Drizzle
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌦"; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return "❄"; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌫"; // Atmosphere (fog, mist, etc.)
  } else if (weatherId === 800) {
    return "☀"; // Clear
  } else if (weatherId > 800 && weatherId < 900) {
    return "☁"; // Clouds
  } else {
    return "🌈"; // Default
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  // Remember to clear input fields!!!!
  card.innerHTML = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

/**
 * Displays weather information on the screen.
 * @param {Object} data - The weather data object.
 */
function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  console.log(data);

  const card = document.querySelector(".weather-card");
  card.innerHTML = `
    <h1 class="weather-card__city">${city}</h1>
    <p class="weather-card__temp">${(temp - 273.15).toFixed(1)}°C</p>
    <p class="weather-card__humidity">Humidity: ${humidity}%</p>
    <p class="weather-card__desc">${description}</p>
    <p class="weather-card__emoji">${getWeatherEmoji(id)}</p>
  `;
  card.style.display = "flex";
}

/**
 * Fetches JSON data from the specified URL.
 *
 * @param {string} url - The URL to fetch the JSON data from.
 * @param {string} [errorMsg="Something went wrong.."] - The error message to display if the fetch fails.
 * @returns {Promise} A promise that resolves to the JSON data.
 * @throws {Error} If the fetch fails, an error is thrown with the specified error message and status code.
 */
const getJSON = function (url, errorMsg = "Something went wrong..") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// Richmond Weather API
// https://reg.bom.gov.au/fwo/IDN60901/IDN60901.95753.json
