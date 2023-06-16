import React, { useEffect, useState } from "react";
import { API_endpoint, API_key } from "./WeatherService";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import useGeoLocation from "../hooks/useGeolocation";
import getFormattedWeatherData from "./WeatherService";

const Search = ({ setWeather }) => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useGeoLocation();

  const fetchData = async () => {
    try {
      const searchParams = { q: searchTerm };
      setLoading(true);
      const data = await getFormattedWeatherData(searchParams);
      setWeather(data.currentData);
    } catch (error) {
      console.log("Erro ao obter os dados do clima:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCurrent = () => {
    let finalAPIEndPoint = `${API_endpoint}lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&exclude=hourly,daily&appid=${API_key}`;
    axios.get(finalAPIEndPoint).then((response) => {
      setSearchTerm(response.data.name);
      setInput(response.data.name);
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    localStorage.setItem("search", searchTerm);
    fetchData();
  };

  useEffect(() => {
    const storedSearch = localStorage.getItem("search");
    if (storedSearch) {
      setInput(storedSearch);
      setSearchTerm(storedSearch);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("search") !== null ) {
      setSearchTerm(localStorage.getItem("search"));
    }
  }, []);

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center h-14 w-full space-x-1 sm:space-x-4">
      <form
        className="flex items-center justify-center flex-row h-full ml-4 sm:ml-8"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-dark-200 dark:text-gray-50 dark:bg-zinc-800 rounded-l-xl px-4 py-2 focus:outline-none w-72 sm:w-80 placeholder-zinc-500 bg-zinc-300 text-gray-800 h-full sm:h-4/5"
          type="text"
          placeholder="Search for city..."
          autoComplete="off"
          value={input}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-r-xl bg-zinc-300 text-gray-800 dark:bg-zinc-800 dark:text-gray-50 h-full sm:h-4/5 w-12"
        >
          <AiOutlineSearch />
        </button>

        <button
          className="flex justify-center items-center rounded-full md:rounded-lg gap-2 bg-purple-500 light:bg-red-500 text-zinc-950 h-full sm:h-4/5 px-4 ml-4"
          onClick={handleCurrent}
        >
          <BiTargetLock size={20} />
          <span className="hidden md:flex">Current Location</span>
        </button>
      </form>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Search;
