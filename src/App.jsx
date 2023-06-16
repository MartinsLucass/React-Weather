import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import WeatherBox from "./components/WeatherBox";
import Footer from "./components/Footer";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <div className="max-w-screen-xl justify-center items-center px-4 my-4 flex flex-col space-y-8">
      <NavBar />
      <Search setWeather={setWeather} />
      <div className="flex flex-row space-x-8">
        <WeatherBox weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
