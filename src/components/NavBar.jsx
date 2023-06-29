import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [image, setImage] = useState(null);

  const handleToggleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    setImage(theme === "dark" ? "./src/images/logoLight.svg" : "./src/images/logoDark.svg");
  }, [theme]);

  return (
    <div className="flex flex-row justify-between items-center h-14 w-5/6 border-gray-300 dark:border-zinc-800 border-b-2">
      <header className="flex flex-row items-center gap-2 h-full">
        <h1 className="text-3xl flex items-center text-gray-900 dark:text-gray-50">
          Weather
        </h1>
        <img className="h-full" src={image} alt="logo" />
      </header>
      <nav className="flex items-center space-x-2">
        <a
          href="https://github.com/MartinsLucass"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <AiFillGithub
            size={30}
            className="text-zinc-700 hover:text-zinc-800 dark:text-gray-50 text-2xl dark:hover:text-zinc-400 cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
        <button
          className="px-3 py-2 rounded-md flex items-center justify-center"
          onClick={handleToggleMode}
        >
          {theme === "dark" ? (
            <BsFillSunFill
              size={30}
              className="text-gray-50 text-2xl hover:text-zinc-400 cursor-pointer hover:scale-105 transition-transform"
            />
          ) : (
            <BsFillMoonFill
              size={30}
              className="text-zinc-700 hover:text-zinc-800 dark:text-gray-50 text-2xl dark:hover:text-zinc-400 cursor-pointer hover:scale-105 transition-transform"
            />
          )}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
