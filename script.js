// Define constants for API key and URL
const apiKey = 'f85e3607f1f85bf1071f01ca6427452e';
const apiURLBase = 'https://api.openweathermap.org/data/2.5/weather';

// Select DOM elements
const d = document.querySelector('.date');
const t = document.querySelector('.time');
const loc = document.querySelector('.cityN');
const searchBut = document.querySelector('.search');
const tempBox = document.querySelector('.temp');
const weatherTyp = document.querySelector('.weatherType');
const windBox = document.querySelector('.wind');
const humidityBox = document.querySelector('.humidity');
const visibilityBox = document.querySelector('.visibility');
const backdrop = document.body;
// const svgEle = document.getElementsByTagName('svg');
const svgElement = document.querySelectorAll('svg');

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
    const visibility = (data.visibility) / 1000;
    tempBox.textContent = `${temp}°C`;
    weatherTyp.textContent = `${weatherType}`;
    windBox.textContent = `${wind}km/h`;
    humidityBox.textContent = `${humidity}%`;
    visibilityBox.textContent = `${visibility}km`;

    if (weatherType == "Clear" && "Sunny") {
        console.log("Clear&Sunny");
        backdrop.classList.remove('bg-gradient-to-r', 'from-[#E0F7FA]', 'to-[#ECEFF1]');
        backdrop.classList.add('bg-gradient-to-r', 'from-[#FDEB71]', 'to-[#87CEEB]');
    }
    else if (weatherType == "Haze") {
        console.log("Haze");
        // remove main css
        backdrop.classList.remove('bg-gradient-to-r', 'from-[#E0F7FA]', 'to-[#ECEFF1]');
        backdrop.classList.remove('text-[#2F4F4F]');
        loc.classList.remove('bg-[#D1F2EB]');
        searchBut.classList.remove('bg-[#48C9B0]');
        // add new css
        backdrop.classList.add('bg-gradient-to-b', 'from-[#D3D3D3]', 'via-[#C0C0C0]', 'to-[#E6D8B8]');
        backdrop.classList.add('text-[#4A4A4A]');
        loc.classList.add('bg-[#F5F5F5]', 'text-[#4A4A4A]');
        searchBut.classList.add('bg-gradient-to-b', 'from-[#B0B0B0]', 'to-[#A0A0A0]');

        svgElement.forEach(element => {
            element.classList.remove('stroke-[#48C9B0]', 'fill-[#48C9B0]');
            element.setAttribute('fill', '#F5F5F5');
            // element.setAttribute('stroke', '#C0C0C0');
        });
    }
    else if (weatherType == "smoke") {
        console.log("Smoke");
        // remove main css
        backdrop.classList.remove('bg-gradient-to-r', 'from-[#E0F7FA]', 'to-[#ECEFF1]');
        backdrop.classList.remove('text-[#2F4F4F]');
        loc.classList.remove('bg-[#D1F2EB]');
        searchBut.classList.remove('bg-[#48C9B0]');
        // add new css
        backdrop.classList.add('bg-gradient-to-b', 'from-[#A8A8A8]', 'via-[#888888]', 'to-[#D1D1D1]');
        backdrop.classList.add('text-[#333333]');
        loc.classList.add('bg-[#EAEAEA]', 'text-[#333333]');
        searchBut.classList.add('bg-gradient-to-b', 'from-[#C0C0C0]', 'to-[#9E9E9E]', 'text-[#FFFFFF]');
        svgElement.forEach(element => {
            element.classList.remove('stroke-[#48C9B0]', 'fill-[#48C9B0]');
            element.setAttribute('fill', '#888888');
            // element.setAttribute('stroke', '#333333');
        });
    }
    else if (weatherType == "Clouds") {
        console.log("Clouds");
        // remove main css
        backdrop.classList.remove('bg-gradient-to-r', 'from-[#E0F7FA]', 'to-[#ECEFF1]');
        backdrop.classList.remove('text-[#2F4F4F]');
        loc.classList.remove('bg-[#D1F2EB]');
        searchBut.classList.remove('bg-[#48C9B0]');
        // add new css
        backdrop.classList.add('bg-gradient-to-b', 'from-[#BFD3E6]', 'via-[#E0E8EC]', 'to-[#F5F5F5]');
        backdrop.classList.add('text-[#5A5A5A]');
        loc.classList.add('bg-[#F0F8FF]', 'text-[#5A5A5A]');
        searchBut.classList.add('bg-gradient-to-b', 'from-[#D1D9E0]', 'to-[#AFC7D5]', 'text-[#FFFFFF]');
        svgElement.forEach(element => {
            element.classList.remove('stroke-[#48C9B0]', 'fill-[#48C9B0]');
            element.setAttribute('fill', '#AFC7D5');
            // element.setAttribute('stroke', '#333333');
        });
    }
    else if (weatherType == "Mist") {
        console.log("Mist");
        // remove main css
        backdrop.classList.remove('bg-gradient-to-r', 'from-[#E0F7FA]', 'to-[#ECEFF1]');
        backdrop.classList.remove('text-[#2F4F4F]');
        loc.classList.remove('bg-[#D1F2EB]');
        searchBut.classList.remove('bg-[#48C9B0]');
        // add new css
        backdrop.classList.add('bg-gradient-to-b', 'from-[#DDE2E4]', 'via-[#F0F2F3]', 'to-[#FAFAFA]');
        backdrop.classList.add('text-[#4D4D4D]');
        loc.classList.add('bg-[#F8FAFB]', 'text-[#4D4D4D]');
        searchBut.classList.add('bg-gradient-to-b', 'from-[#D1D5D6]', 'to-[#BFC3C5]', 'text-[#FFFFFF]');
        svgElement.forEach(element => {
            element.classList.remove('stroke-[#48C9B0]', 'fill-[#48C9B0]');
            element.setAttribute('fill', '#C5C9CB');
            // element.setAttribute('stroke', '#333333');
        });
    }

}

loc.addEventListener('keydown', (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior (if any)
        event.preventDefault();
        // Trigger a click event on the search button
        searchBut.click();
    }
});

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