export const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
export const API_key = `cc1d9b64613c605de9790bf618e14e65`

/*const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "cc1d9b64613c605de9790bf618e14e65";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => mapResponseProperties(data));
};

function mapResponseProperties(data) {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // convert from seconds to hours
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
  };

  return mapped;
}

export { getWeatherData };

//weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=cc1d9b64613c605de9790bf618e14e65*/