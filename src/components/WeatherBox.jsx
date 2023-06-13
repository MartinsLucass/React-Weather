import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";

const WeatherBox = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-start border-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-50 bg-zinc-300 text-gray-800 border-zinc-500 rounded-lg w-full sm:w-72 p-4">
        <div className="text-lg font-medium">Now</div>
        <div className="flex flex-row gap-4">
          <div className="flex justify-center items-center w-1/2 text-5xl">
            15 °C
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img
              className="w-11/12"
              src="./src/images/logo.svg"
              alt="weather image"
            />
          </div>
        </div>

        <div className="text-lg font-medium h-10 w-full border-b-2 border-zinc-500 dark:border-zinc-700">
          Sun
        </div>

        <div className="flex flex-row justify-center items-center mt-2">
          <AiOutlineCalendar size={20} />
          <div className="ml-2 text-lg">Monday 1 May 2023</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-2">
          <LuMapPin size={20} />
          <div className="ml-2 text-lg">Brazil</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
