import React, { useState } from "react";
import { API_endpoint, API_key } from "./Api";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleCurrent = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      let finalAPIEndPoint = `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=${API_key}`;
      axios.get(finalAPIEndPoint).then((response) => {
        setSearchTerm(response.data.name);
      });
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 h-14 w-full">
      <div className="flex items-center gap-2 h-full">
        <h1 className="text-aliceblue text-3xl flex items-center text-gray-50">
          Weather
        </h1>
        <img className=" h-full" src="./src/images/logo.svg" alt="logo" />
      </div>
      <form className="flex items-center h-full ml-4 sm:ml-8" onSubmit={handleSubmit}>
        <input
          className="bg-dark-200 text-gray-50 rounded-l-xl px-4 py-2 focus:outline-none h-4/5 w-full sm:w-72 placeholder-zinc-500"
          type="text"
          placeholder="Search for city..."
          autoComplete="off"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-r-lg bg-dark-200 text-gray-50 h-4/5 w-12"
        >
          <AiOutlineSearch />
        </button>
      </form>
      <button
        className="flex justify-center items-center rounded-lg gap-2 bg-purple-500 text-zinc-950 h-4/5 px-4 ml-4 sm:ml-8"
        onClick={handleCurrent}
      >
        <BiTargetLock size={20}/>
        Current Location
      </button>
    </div>
)};