import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { MoonIcon, SunIcon, HeartIcon } from "@heroicons/react/24/solid";
import WaveIcon from "../assets/waves.svg?react";

export default function Header({ onClickDarkMode, darkMode }) {
  const { user } = useAuth();
  console.log(darkMode);

  return (
    <motion.header className="flex justify-between w-full min-h-[8rem] fixed top-0 border-b-6 border-main-yellow_500 bg-main-purple_100 dark:bg-main-purple_900 dark:border-main-purple_100">
      {/* Ícone à esquerda */}
      <div className=" flex flex-row items-center gap-2 px-6 sm:pr-0">
        <HeartIcon className="w-10 h-10 text-main-yellow_500 stroke-utils-black dark:fill-none dark:stroke-main-yellow_200" />
        <h1 className="text-3xl font-dm text-main-purple_900 dark:text-main-yellow_200">
          feel.io
        </h1>
        <WaveIcon className="animate-draw w-40 fill-none stroke-main-purple_900 stroke-20 [stroke-dasharray:5000] dark:stroke-main-yellow_200" />
      </div>

      {/* Botões à direita */}
      <div className="flex items-center gap-4 px-6 bg-main-purple_200 bg-waves border-l-6 border-main-yellow_500 dark:bg-main-purple_900 dark:border-main-purple_100">
        <button
          className="p-2 rounded-full text-sm bg-main-purple_900 dark:bg-main-yellow_200"
          onClick={() => onClickDarkMode(!darkMode)}
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-utils-black" />
          ) : (
            <MoonIcon className="h-6 w-6  text-utils-white"/>
          )}
        </button>
        {!user && (
          <Link to="/login">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Login
            </button>
          </Link>
        )}

        {/* Select de idioma */}
        <select className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-lg focus:outline-none">
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </motion.header>
  );
}
