function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windspeedElement = document.querySelector("#windspeed");
    let timeElement = document.querySelectorAll("#time");
    let date = new Date (response.data.time * 1000);

    console.log(response.data.condition.description);

    cityElement.innerHTML = searchInput.value;
    timeElement.innerHTML = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
    descriptionElement.innerHTML = response.data.description.condition;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML
    temperatureElement.innerHTML = Math.round(temperature);
    

    
}

function formatDate { 
    let day = getDay ();
    let hours = getHours ();
    let minutes = getMinUtes ();
        return "Tuesday 18:48";
}

function searchCity (city){
    // make the api call and update interface
let apiKEY = "e2ctfac817c6d3a98601of8420b16363";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
axios.get(apiURL).then(refreshWeather);

}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
   
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  searchCity("paris")