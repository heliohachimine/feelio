import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header({onClickDarkMode, darkMode}) {
  const { user } = useAuth();
  console.log(darkMode);

  return (
    <motion.header
      className="w-full px-6 py-4 flex bg-main-purple_100 dark:bg-gray-900 shadow-md fixed top-0 z-50"
    >
      <div className="text-center z-10 bg-black/40 p-6 rounded-xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-2">
          Welcome to feel.io <HeartIcon className="w-6 h-6" />
        </h1>
        <p className="text-lg text-gray-200">
          Feel. Record. Discover. Each emotion is part of your journey
        </p>
      </div>

      {/* Botões à direita */}
      <div className="flex items-center gap-4">
      <button
            className="border mt-80 px-4 py-1 rounded text-sm"
            onClick={() => onClickDarkMode(!darkMode)}
          >
            <p>
              {darkMode ? (
                <SunIcon className="h-6 w-6 stroke-main-purple_500" />
              ) : (
                <MoonIcon className="h-6 w-6 stroke-main-purple_500" />
              )}
            </p>
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
