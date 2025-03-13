const apiKey = ""
const apiUrl = ""


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=&{apiKey}`);
    var data = await response.json();

    console.log(data);

}

checkWeather();

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const temp = document.querySelector(".temperature")