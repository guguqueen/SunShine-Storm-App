function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    temperatureElement.innerHTML = Math.round(temperature);

    
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