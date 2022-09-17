const API =    `9c039a5ae1ee4a0f06d515979875d38d`;

const loadTemparature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
}
const displayTemp = data =>{
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    const weatherMain = document.getElementById('weather-main');
    weatherMain.innerText = data.weather[0].main;
}

document.getElementById('btn-search').addEventListener("click", function(){
    const searchField = document.getElementById("search-field");
    const cityInput = searchField.value ;
    const city = cityInput.toLowerCase();
    loadTemparature(city);
    

})