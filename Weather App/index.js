const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector("cityInput");
const card = document.querySelector(".card");
const API_KEY = "47a27afd0c72eed8a8b35d8efa569251"; // Open Weather API
weatherForm.addEventListener("submit", async (event) => {});

async function getWeatherData(city) {}

const getJSON = function (url, errorMsg = "Something went wrong..") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

function displayWeatherData(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  try {
  } catch (err) {
    console.err(err);
  }
}

// Richmond Weather API
// https://reg.bom.gov.au/fwo/IDN60901/IDN60901.95753.json
