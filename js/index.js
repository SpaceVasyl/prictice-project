const apiKey = 'ad7a9e4a75ffbc2d7dd9d4572f7e9b33';
const query = 'https://api.openweathermap.org/data/3.0/onecall';


function fetchWeather() {
    return fetch(`http://api.weatherapi.com/v1/current.json?key=be66b75c9aaf490dbaf162029231902&q=London&aqi=no`)
    .then((res)=> res.json)
    .catch((error)=> Notiflix.Notify.error("Oops, something gone wrong"));
  }

