// Static (hardcoded) weather data
const weatherData = {
  delhi: {
    city: 'Delhi, IN',
    temp: 32,
    condition: 'Clear',
    description: 'clear sky',
    humidity: 40,
    wind: 3
  },
  mumbai: {
    city: 'Mumbai, IN',
    temp: 30,
    condition: 'Clouds',
    description: 'scattered clouds',
    humidity: 65,
    wind: 4
  },
  london: {
    city: 'London, UK',
    temp: 18,
    condition: 'Rain',
    description: 'light rain',
    humidity: 80,
    wind: 6
  },
  tokyo: {
    city: 'Tokyo, JP',
    temp: 24,
    condition: 'Clear',
    description: 'sunny',
    humidity: 50,
    wind: 5
  }
};

function getStaticWeather() {
  const input = document.getElementById('cityInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('weatherResult');

  if (!input) {
    resultDiv.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
    return;
  }

  const data = weatherData[input];
  if (!data) {
    resultDiv.innerHTML = `<p style="color:red;">City not found. Try: Delhi, Mumbai, London, Tokyo.</p>`;
    return;
  }

  const html = `
    <div class="city-card">
      <h3>${data.city}</h3>
      <p><strong>${data.condition}</strong> - ${data.description}</p>
      <p>🌡️ Temp: ${data.temp}°C</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>💨 Wind: ${data.wind} m/s</p>
    </div>
  `;

  resultDiv.innerHTML = html;
}