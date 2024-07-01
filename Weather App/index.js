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

function getWeatherEmoji(weatherId) {}

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
}

const getJSON = function (url, errorMsg = "Something went wrong..") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// Richmond Weather API
// https://reg.bom.gov.au/fwo/IDN60901/IDN60901.95753.json
