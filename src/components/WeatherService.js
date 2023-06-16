export const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
export const API_key = `cc1d9b64613c605de9790bf618e14e65`

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "cc1d9b64613c605de9790bf618e14e65";

const makeIconURL = (iconID) => `http://openweathermap.org/img/wn/${iconID}@2x.png`;

const getWeatherData = (searchParams) => {
  const url = new URL(`${BASE_URL}/weather`);
  searchParams.units = "metric";
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formattedCurrentWeather = (data) => {
  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  const formattedDateString = `${day}/${month}/${year}`;

  const formattedWeather = {
    visibility: (data.visibility / 1000),
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: formattedDateString,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600,
    wind_speed: Math.round(data.wind.speed * 3.6),
    icon: makeIconURL(data.weather[0].icon),
  };

  return formattedWeather;
};



const getFormattedWeatherData = async (searchParams) => {
  const currentData = await getWeatherData(searchParams).then(
    formattedCurrentWeather
  );

  return { currentData };
};

export default getFormattedWeatherData;
