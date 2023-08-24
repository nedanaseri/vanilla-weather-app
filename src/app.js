function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#weather-description");
  let feelsLikeElement = document.querySelector("#feels-like");
  let humidityElement = document.querySelector("#humidity-level");
  let windElement = document.querySelector("#wind-speed");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  feelsLikeElement.innerHTML = Math.round(response.data.temperature.feels_like);
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "a31b0012587tao35f4af0fb35a58b69f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Paris}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
