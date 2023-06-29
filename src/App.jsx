import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import WeatherBox from "./components/WeatherBox";
import Footer from "./components/Footer";
import WeatherDetails from "./components/WeatherDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFormattedWeatherData } from "./components/WeatherService";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [weather, setWeather] = useState({ data: null });
  const [city, setCity] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const searchParams = { q: city };
          toast.info("Fetching for " + city);
          const data = await getFormattedWeatherData(searchParams);
          toast.success("successfully fetched weather for " + city);
          setWeather(data.currentData);
        }
      } catch (error) {
        toast.error("Error fetching weather data");
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-screen-xl justify-center items-center px-4 my-4 flex flex-col space-y-8">
          <NavBar setTheme={setTheme}/>
          <Search setCity={setCity} />
          {weather.data !== null ? (
            <div className="flex flex-col sm:flex-row 
            space-x-0 sm:space-x-4 md:space-x-8 space-y-2 sm:space-y-0">
              <WeatherBox weather={weather} />
              <WeatherDetails weather={weather} />
            </div>
          ) : null}
          <ToastContainer autoClose={800} theme={theme} newestOnTop={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default App;
