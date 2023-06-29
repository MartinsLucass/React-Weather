import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";

const WeatherBox = ({ weather }) => {
  const flag = (weather) => `https://flagsapi.com/${weather.country}/flat/32.png`;

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center sm:items-start border-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-50 bg-zinc-300 text-gray-800 border-zinc-500 rounded-lg w-full sm:w-min-72 p-4">
        <div className="text-lg font-medium">Now</div>
        <div className="flex flex-row gap-4">
          <div className="flex justify-center items-center w-1/2 text-5xl">
            {weather && weather.temperature}°C
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img className="full" src={weather && weather.icon} alt="weather image" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:items-start text-lg font-medium h-10 w-full border-b-2 border-zinc-500 dark:border-zinc-700">
          {weather && weather.description}
        </div>

        <div className="flex flex-row justify-center items-center mt-2">
          <AiOutlineCalendar size={20} />
          <div className="ml-2 text-lg">{weather && weather.date}</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-2">
          <LuMapPin size={20} />
          <div className="ml-2 text-lg flex flex-row gap-2">
            {weather && weather.location}, {weather && weather.country}
            {weather && <img src={flag(weather)} alt="Country Flag" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
