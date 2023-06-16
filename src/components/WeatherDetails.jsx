import React from "react";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { BsThermometerHalf } from "react-icons/bs";

const WeatherDetails = ({ weather }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-4 border-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-50 bg-zinc-300 text-gray-800 border-zinc-500 rounded-lg w-full sm:w-min-72 p-4 h-min-72">
        <div className="dark:bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center">
            <WiHumidity size={40} />
            <div className="ml-2">
              <div className="font-medium">Humidity</div>
              <div>{weather && weather.humidity}%</div>
            </div>
          </div>
        </div>
        <div className="dark:bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center">
            <BsThermometerHalf size={40} />
            <div className="ml-2">
              <div className="font-medium">Feels Like</div>
              <div>{weather && weather.feels_like}°C</div>
            </div>
          </div>
        </div>
        <div className="dark:bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center">
            <BsWind size={40} />
            <div className="ml-2">
              <div className="font-medium">Wind Speed</div>
              <div>{weather && weather.wind_speed} km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
