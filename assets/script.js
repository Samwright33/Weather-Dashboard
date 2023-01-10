var searchForm = document.querySelector('#search-form');
var resultText = document.querySelector('#result-text');
var resultData = document.querySelector('#result-data');
var displayAllDates = document.querySelector('#date-display');

function FormSubmitEvent(event) {
    event.preventDefault();

    var inputValue = document.querySelector('#search-input').value;

  if (!inputValue) {
    alert('Try again. Type in a city');
    return;
  }
searchApi(inputValue)

}


function searchApi(cityName){
    console.log(cityName);
    
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q='+ cityName +'&appid=278ef12c3c0cbe734aac8a1adc875368')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // create variables for lat and lon
            var lat = data[0].lat
            var lon = data[0].lon

            currentWeather(lat, lon)
        
        })

}

function currentWeather(lat, lon){
    fetch ('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon+'&appid=278ef12c3c0cbe734aac8a1adc875368')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // var date = displayAllDates
            var icon = data[0].icon
            // var temp = data[0]
            // var wind = data[0]
            // var humidity = data[0]

            // We use a for-loop to execute code more than once
        for (var i = 0; i < 5; i++) {
        // This is the block of code that will run each time
        console.log("This is the current value of i: " + i + ".");
}

        // For-loops are often used to iterate over arrays
        var specs = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
        for (var i = 0; i < zooAnimals.length; i++) { 
        console.log("I am going to zoo to see " + zooAnimals[i] + ".");

        
            weatherSpecs(icon)
        }
        })
}


searchForm.addEventListener('submit', FormSubmitEvent);



//         //Getting the min and max values for each day
//         for(i = 0; i<5; i++){
//             document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
//             //Number(1.3450001).toFixed(2); // 1.35
//         }
    
//         for(i = 0; i<5; i++){
//             document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
//         }
//         //------------------------------------------------------------
    
//         //Getting Weather Icons
//          for(i = 0; i<5; i++){
//             document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
//             data.list[i].weather[0].icon
//             +".png";
//         }
//         //------------------------------------------------------------
//         console.log(data)

//     })

// const form = document.querySelector('form')
// // Added event listener to attempt to save the submitted event in local storage
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const fd = new FormData(form);
//   const obj = object.fromEntries(fd);

//   const json = JSON.stringify(obj);
//   localStorage.setItem('form', json);
// })
