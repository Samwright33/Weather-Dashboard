// created variables
var searchForm = document.querySelector('#search-form');
var resultText = document.querySelector('#result-text');
var resultData = document.querySelector('#result-data');
var displayAllDates = document.querySelector('#date-display');

// prevents default search
function FormSubmitEvent(event) {
    event.preventDefault();

    var inputValue = document.querySelector('#search-input').value;

  if (!inputValue) {
    alert('Try again. Type in a city');
    return;
  }
searchApi(inputValue)

}

// Pulls the city name data from api query using lon and lat
function searchApi(cityName){
    console.log(cityName);
    
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q='+ cityName +'&appid=278ef12c3c0cbe734aac8a1adc875368')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // created variables for lat and lon
            var lat = data[0].lat
            var lon = data[0].lon

            currentWeather(lat, lon)
        
        })

}

// pulls weather specs from api
function currentWeather(lat, lon){
    fetch ('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon+'&appid=278ef12c3c0cbe734aac8a1adc875368')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // var date = displayAllDates
            var icon = data[0].weather.id
            var temp = data[0].main.temp
            var wind = data[0].wind.speed
            var humidity = data[0].humidity

        for (var i = 0; i < 5; i++) {
        console.log("Weather for: " + i + "cityName");
}
        var stats = ["icon", "date", "temp", "humidity"];

        for (var i = 0; i < currentWeather.length; i++) { 
        console.log("Weather for" + currentWeather[i] + ".");
        }
        })
}

searchForm.addEventListener('submit', FormSubmitEvent);


    

