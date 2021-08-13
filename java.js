function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind")
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.windElement.speed;
}

let apiKey = "b19af43e62b4a3c076b585af4be814dd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);


