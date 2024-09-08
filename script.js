// Define constants for API key and URL
const apiKey = 'f85e3607f1f85bf1071f01ca6427452e';
const apiURLBase = 'https://api.openweathermap.org/data/2.5/weather';

// Select DOM elements
const t = document.querySelector('.time');
const d = document.querySelector('.date');
const loc = document.querySelector('.location');
const searchBut = document.querySelector('.search');
const tempBox = document.querySelector('.temp');
const windBox = document.querySelector('.wind');
const humidityBox = document.querySelector('.humidity');
const visibilityBox = document.querySelector('.visibility');
const weatherTyp = document.querySelector('.weatherType');
const backdrop = document.querySelector('#back');

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', weekday: 'long' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    t.textContent = `${time}`;
    d.textContent = `${date}`;
}



// Function to fetch weather data
async function fetchWeather(city) {
    const apiURL = `${apiURLBase}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiURL); // Send request to the API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Convert response to JSON
        displayWeather(data); // Call function to display weather
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const temp = data.main.temp; // Get temperature from data
    const weatherType = data.weather[0].main;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const visibility = (data.visibility)/1000; 
    tempBox.textContent = `${temp}°C`;
    weatherTyp.textContent = `${weatherType}`;
    windBox.textContent = `${wind}km/h`;
    humidityBox.textContent = `${humidity}%`;
    visibilityBox.textContent = `${visibility}km`;

    if(weatherType == "Clouds" ){
        console.log("clouds");
        backdrop.classList.add('Clouds');
        backdrop.classList.add('backColor');
        backdrop.classList.remove('Rain');
        backdrop.classList.remove('Haze');
        backdrop.classList.remove('Sunny');
    }
    else if(weatherType == "Rain" ){
        console.log("R");
        backdrop.classList.add('Rain');
        backdrop.classList.add('backColor');
        backdrop.classList.remove('Clouds');
        backdrop.classList.remove('Haze');
        backdrop.classList.remove('Sunny');
    }
    else if(weatherType == "Haze" ){
        console.log("H");
        backdrop.classList.add('Haze');
        backdrop.classList.add('backColor');
        backdrop.classList.remove('Rain');
        backdrop.classList.remove('Clouds');
        backdrop.classList.remove('Sunny');
    }
    else{
        console.log("S");
        backdrop.classList.add('Sunny');
        backdrop.classList.add('backColor');
        backdrop.classList.remove('Rain');
        backdrop.classList.remove('Clouds');
        backdrop.classList.remove('Haze');
    }
}

// Event listener for search button
searchBut.addEventListener('click', () => {
    const city = loc.value;
    if (city) {
        fetchWeather(city); // Fetch weather for the entered city
    }
});

// Initial call to update time and set interval
updateDateTime();
setInterval(updateDateTime, 1000);