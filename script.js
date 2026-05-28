async function getWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "3e8b663a1dc894ef3c93e35a8c483585";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (data.cod == "404") {

      document.getElementById("weather").innerHTML =
        "<p>City not found</p>";

      return;
    }

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
    `;

  } catch (error) {

    console.log(error);

    document.getElementById("weather").innerHTML =
      "<p>Error fetching weather</p>";
  }
}