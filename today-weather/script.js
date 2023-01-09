
document.getElementById("submit-btn").addEventListener("click",()=>{
    temperature();
})
temperature();
function temperature() {
    const apiKey = `a5aefe154a2d559586a012d7f4f080de`;
    const inputCity = document.getElementById("city-name");
    const cityValue = inputCity.value;
    const displayCityName = document.getElementById("display");
    const displayTemperature = document.getElementById("temperature");
    const temperatureType = document.getElementById("description");
    const weatherIcon = document.getElementById("icon")
    // cityName.value = '';
    if (cityValue == '') {
        alert("Please Write Your City Name")
    }
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&APPID=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            displayCityName.innerText = data.name;
            displayTemperature.innerText = data.main.temp;
            temperatureType.innerText = data.weather[0].main;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
    }
}






















// const cityName = document.getElementById("city-name");
// const cityValue = cityName.value;

// let getWeather = ()=>{

//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }

// window.addEventListener("load", getWeather);