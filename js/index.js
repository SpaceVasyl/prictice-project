

const query = "London";
const j = async function fetchWeather(query) {
    return await fetch(`http://api.weatherapi.com/v1/current.json?key=be66b75c9aaf490dbaf162029231902&q=${query}&aqi=no`);
  }
