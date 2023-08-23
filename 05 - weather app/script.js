const apiKey ="24417bf7df7ec7b003f0d4660a17da8f"
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather (city){
    const url = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    if (url.status == 404) {
        alert("❌Invalid city name")
    }
    else if(city === ""){
        alert("Entre city name😉")
    }
    else{
        var data = await url.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/h" ;
        if (data.weather[0].main == "Clouds") {
            weatherImg.src ="images/clouds.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherImg.src ="images/rain.png"
        }
        else if(data.weather[0].main == "Clear") {
            weatherImg.src ="images/clear.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherImg.src ="images/mist.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherImg.src ="images/drizzle.png"
        }
        document.querySelector("#weather").style.display ="block"
       
    }
   

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
