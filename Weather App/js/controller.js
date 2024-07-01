import { getWeatherData } from "./model.js";

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
