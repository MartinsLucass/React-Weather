import React from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import WeatherBox from "./components/WeatherBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-screen-xl justify-center items-center px-4 my-4 flex flex-col space-y-8">
      <NavBar />
      <Search />
      <WeatherBox />
      <Footer />
    </div>
  );
}

export default App;
