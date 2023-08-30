let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let dayNumber = date.getDate();
let months = [
  "Januaray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[date.getMonth()];
let year = date.getFullYear();
let hours = date.getHours();

let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
if (hours < 10) {
  hours = `0${hours}`;
}
let h2 = document.querySelector("h2");

if (
  (hours > 6 && ampm == "PM") ||
  (hours < 6 && ampm == "AM") ||
  (hours == 12 && ampm == "AM")
) {
  let formControl = document.querySelector("#city-input");
  formControl.classList.add("nightmode");
}

if (
  (hours > 6 && ampm == "PM") ||
  (hours < 6 && ampm == "AM") ||
  (hours == 12 && ampm == "AM")
) {
  let searchButton = document.querySelector("#search-button");
  searchButton.classList.add("nightmode");
}
if (
  (hours > 6 && ampm == "PM") ||
  (hours < 6 && ampm == "AM") ||
  (hours == 12 && ampm == "AM")
) {
  let locationButton = document.querySelector("#location-button");
  locationButton.classList.add("nightmode");
  let locationIcon = document.querySelector("#location-icon");
  locationIcon.setAttribute("src", `icons/location-dark.svg`);
}

if (
  (hours > 6 && ampm == "PM") ||
  (hours < 6 && ampm == "AM") ||
  (hours == 12 && ampm == "AM")
) {
  let weatherForecast = document.querySelector(".weather-forecast");
  weatherForecast.classList.add("nightmode");
}

if (
  (hours > 6 && ampm == "PM") ||
  (hours < 6 && ampm == "AM") ||
  (hours == 12 && ampm == "AM")
) {
  let weatherBackground = document.querySelector(".weather-app");
  weatherBackground.classList.add("nightmode");
}

h2.innerHTML = `${day}, ${dayNumber} ${month} ${year} | ${hours} : ${minutes} ${ampm}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#weather-description");
  let feelsLikeElement = document.querySelector("#feels-like");
  let humidityElement = document.querySelector("#humidity-level");
  let windElement = document.querySelector("#wind-speed");
  let iconELement = document.querySelector("#weather-icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  switch (response.data.weather[0].icon) {
    case "01d":
      iconELement.setAttribute("src", `icons/01d.svg`);
      break;
    case "01n":
      iconELement.setAttribute("src", `icons/01n.svg`);
      break;
    case "02d":
      iconELement.setAttribute("src", `icons/02d.svg`);
      break;
    case "02n":
      iconELement.setAttribute("src", `icons/02n.svg`);
      break;
    case "03d":
      iconELement.setAttribute("src", `icons/03d.svg`);
      break;
    case "03n":
      iconELement.setAttribute("src", `icons/03d.svg`);
      break;
    case "04d":
      iconELement.setAttribute("src", `icons/04d.svg`);
      break;
    case "04n":
      iconELement.setAttribute("src", `icons/04n.svg`);
      break;
    case "09d":
      iconELement.setAttribute("src", `icons/09d.svg`);
      break;
    case "09n":
      iconELement.setAttribute("src", `icons/09n.svg`);
      break;
    case "10d":
      iconELement.setAttribute("src", `icons/10d.svg`);
      break;
    case "10n":
      iconELement.setAttribute("src", `icons/10n.svg`);
      break;
    case "11d":
      iconELement.setAttribute("src", `icons/11d.svg`);
      break;
    case "11n":
      iconELement.setAttribute("src", `icons/11n.svg`);
      break;
    case "13d":
      iconELement.setAttribute("src", `icons/13d.svg`);
      break;
    case "13n":
      iconELement.setAttribute("src", `icons/13n.svg`);
      break;
    case "50d":
      iconELement.setAttribute("src", `icons/50d.svg`);
      break;
    case "50n":
      iconELement.setAttribute("src", `icons/50n.svg`);
      break;
    default:
      iconELement.setAttribute("src", `icons/01d.svg`);
      break;
  }

  iconELement.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let weekDays = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];

  let forecastHTML = `<div class="row">`;

  weekDays.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
            <div class="col weekdays">
              <h4>${day}</h4>
              <img src="icons/50d.svg" alt="" class="weekday-weather" />
              <p class="forecast-temp">
                <span class="forecast-temp-max">31°</span> -
                <span class="forecast-temp-min">28°</span>
              </p>
              <p class="weather-type">Fog</p>
            </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}

function search(city) {
  let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function getPosition(position) {
  let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiuslink.classList.remove("active");
  fahrenheitlink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiuslink.classList.add("active");
  fahrenheitlink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentLocation = document.querySelector("#location-button");
currentLocation.addEventListener("click", getLocation);

let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayFahrenheitTemperature);

let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", displayCelsiusTemperature);

search("Tehran");
displayForecast();
