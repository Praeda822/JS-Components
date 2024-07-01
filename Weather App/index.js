const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const API_KEY = "47a27afd0c72eed8a8b35d8efa569251"; // Open Weather API Key

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

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
});

async function getWeatherData(city) {
  return getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
}

function displayWeatherData(data) {}

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

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  console.log(data);

  // Chuck it on the screen
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidity.Display");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
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
