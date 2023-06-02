import React from "react";
import { Search } from "./components/Search";
import { WeatherBox } from "./components/WeatherBox";

function App() {
  return (
    <div className="max-w-screen-xl  mx-auto px-4 my-4 flex flex-col gap-10 ">
      <Search />
      <WeatherBox />
    </div>
  );
}

export default App;
