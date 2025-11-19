const result = document.getElementById("weatherResult");

function getWeatherEmoji(condition) {
    const weather = condition.toLowerCase();
    if (weather.includes('clear')) return '☀️';
    if (weather.includes('cloud')) return '☁️';
    if (weather.includes('rain')) return '🌧️';
    if (weather.includes('snow')) return '❄️';
    if (weather.includes('thunder')) return '⛈️';
    if (weather.includes('mist') || weather.includes('fog')) return '🌫️';
    return '🌤️';
}

async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        result.innerHTML = "🚨 Please enter a city name!";
        result.className = "show error";
        return;
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fddac9abdc729fcb0b466c21185f004e&units=metric`
        );

        if (!res.ok) throw new Error("🚫 City not found!");

        const data = await res.json();
        const weatherEmoji = getWeatherEmoji(data.weather[0].description);

        result.innerHTML = `
            <span class="weather-icon">${weatherEmoji}</span>
            <strong>🏙️ ${data.name}, ${data.sys.country}</strong><br><br>
            <strong>🌡️ Temperature:</strong> ${Math.round(data.main.temp)}°C<br>
            <strong>💧 Humidity:</strong> ${data.main.humidity}%<br>
            <strong>🌬️ Wind:</strong> ${data.wind.speed} m/s<br>
            <strong>🌤️ Condition:</strong> ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
        `;
        result.className = "show";
    } catch (err) {
        result.innerHTML = err.message;
        result.className = "show error";
    }
}

document.getElementById("weatherBtn").addEventListener("click", getWeather);
document.getElementById("city").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        getWeather();
    }
});