function updateTime() {
  let displayedCities = document.querySelectorAll(".city");
  displayedCities.forEach((city) => updateCity(city));
}

function updateCities(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone) {
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector(".cities");
    cities.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
    </div>
    <div>
    <a href="/world-clock.html" target="" rel="noopener noreferrer">
        Back to all cities</a
      ></div>
  `;
  }
}

function updateCity(city) {
  let cityName = city.querySelector("h2").innerHTML;
  cityToTimezone = {
    "Los Angeles": "America/Los_Angeles",
    "New York": "America/New_York",
    "Sao Paulo": "America/Sao_Paulo",
    Reykjavik: "Atlantic/Reykjavik",
    Lisbon: "Europe/Lisbon",
    Paris: "Europe/Paris",
    Vienna: "Europe/Vienna",
    Kyiv: "Europe/Kyiv",
    Bangkok: "Asia/Bangkok",
    "Hong Kong": "Asia/Hong_Kong",
    Tokyo: "Asia/Tokyo",
    Sydney: "Australia/Sydney",
  };
  if (cityToTimezone[cityName]) {
    let cityDateElement = city.querySelector(".date");
    let cityTimeElement = city.querySelector(".time");
    let cityTZ = moment().tz(cityToTimezone[cityName]);
    cityDateElement.innerHTML = cityTZ.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTZ.format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCities);
