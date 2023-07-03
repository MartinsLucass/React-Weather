import React from "react";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { BsThermometerHalf } from "react-icons/bs";

const WeatherDetails = ({ weather }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 border-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-50 bg-zinc-300 text-gray-900 border-zinc-500 rounded-lg w-full sm:max-w-2xl p-4">
        <div className="dark:bg-zinc-900 bg-zinc-400 p-4 rounded-xl flex justify-center items-center">
          <div className="items-center flex flex-col sm:flex-row">
            <WiHumidity size={32} />
            <div className="ml-2">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-lg">{weather && weather.humidity + " %"}</div>
            </div>
          </div>
        </div>
        <div className="dark:bg-zinc-900 bg-zinc-400 p-4 rounded-xl flex flex-row sm:flex-col">
          <div className="items-center flex flex-col sm:flex-row">
            <BsThermometerHalf size={32} />
            <div className="ml-2">
              <div className="font-medium text-sm">Feels Like</div>
              <div className="text-lg">{weather && weather.feels_like + " °C"}</div>
            </div>
          </div>
        </div>
        <div className="dark:bg-zinc-900 bg-zinc-400 p-4 rounded-xl flex flex-row sm:flex-col">
          <div className="items-center flex flex-col sm:flex-row">
            <BsWind size={32} />
            <div className="ml-2">
              <div className="font-medium text-sm">Wind Speed</div>
              <div className="text-lg">{weather && weather.wind_speed + " km/h"} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
