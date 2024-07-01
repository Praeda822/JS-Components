import { getJSON } from "./helpers/api.js";

const API_KEY = "47a27afd0c72eed8a8b35d8efa569251"; // Open Weather API Key

/**
 * Fetches weather data from the OpenWeather API.
 * @param {string} city - The city to fetch weather data for.
 * @returns {Promise<Object>} The weather data.
 * @throws {Error} If the fetch fails.
 */
export async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  return getJSON(url);
}
