let apiKey = "7c5045a654c3d0179e532c286cb90c68" 
let baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchBtn = document.querySelector("#search-btn")
let input = document.querySelector("#input")
let weather = document.querySelector("#weather")
let error1 = document.querySelector("#error")
let emoji = document.querySelector("#emoji")


function error(){
  weather.style.display = "none";
  error1.style.display = "block"
}

async function getWeatherData(city){
  let response = await fetch(baseUrl+ city +`&appid=${apiKey}`);
  let data =  await response.json();
  console.log(data)
  if(!response.ok || response ==""){
   error();
  } else {
    weather.style.display = "block";
    error1.style.display = "none"
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#desc").innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector("#h-value").innerHTML = data.main.humidity + " %";
    document.querySelector("#speed").innerHTML = data.wind.speed + " Km/Hr";
  }

 if (data.weather[0].main === "Clear") {
   emoji.src = "assets/mostly-sunny_5370426.png";
  } else if (data.weather[0].main === "Clouds"){
    emoji.src = "assets/cloudy.png";
  } else if (data.weather[0].main === "Rain"){
    emoji.src = "assets/rainy3-removebg-preview.png";
  } else if (data.weather[0].main === "Thunderstorm"){
    emoji.src = "assets/t3.png"
  } else if (data.weather[0].main === "Drizzle"){
    emoji.src = "assets/drizzle.png";
  } else if (data.weather[0].main === "Haze" || data.weather[0].main === "Mist" || data.weather[0].main === "Smoke"){
    emoji.src = "assets/misty.png"
  }
}

searchBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeatherData(input.value);
})
