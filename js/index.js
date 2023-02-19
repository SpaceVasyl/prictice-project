const apiKey = 'ad7a9e4a75ffbc2d7dd9d4572f7e9b33';
const query = 'https://api.openweathermap.org/data/3.0/onecall';
const weather = function fetchWeather(query) {
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={33.44}&lon={-94.04}&exclude={current}&appid=ad7a9e4a75ffbc2d7dd9d4572f7e9b33`)
    .then((res)=> res.json())
    .then((res)=>console.log(res))
    .catch((error)=> Notiflix.Notify.error("Oops, something gone wrong"));
  }

