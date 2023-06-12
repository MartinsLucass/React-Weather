import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center mt-4 h-14 w-  space-y-4 sm:space-y-0 space-x-4">

      <header className="flex flex-row items-center gap-2 h-full">
        <h1 className="text-aliceblue text-3xl flex items-center text-gray-50">
          Weather
        </h1>
        <img className="h-full" src="./src/images/logo.svg" alt="logo" />
      </header>
      <nav className="flex items-center">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <AiFillGithub size={30} className="text-gray-50 text-2xl hover:text-blue-500 cursor-pointer" />
        </a>
        <button
          className="px-3 py-2 rounded-md flex items-center justify-center"
          onClick={handleToggleMode}
        >
          {isDarkMode ? <BsFillSunFill color="#F9FAFB" size={30} /> : <BsFillMoonFill color="#F9FAFB" size={30} />}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
