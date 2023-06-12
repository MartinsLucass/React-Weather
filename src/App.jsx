import React from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import WeatherBox from "./components/WeatherBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-4 flex flex-col gap-10 sm:gap-8 ">
      <NavBar />
      <Search />
      <WeatherBox />
      <Footer />
    </div>
  );
}

export default App;
