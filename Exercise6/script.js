// Replace with your OpenWeatherMap API key
const apiKey = 'c834e190303a6cf7aac3d266579e3f7b';

document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const description = weather[0].description;
    const temp = main.temp;
    document.getElementById('weather-result').innerHTML = `
        <h2>${name}</h2>
        <p>${description}</p>
        <p>Temperature: ${temp}&deg;C</p>
    `;
}